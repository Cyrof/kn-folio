# Set up Resend for KN Folio

The browser posts to the existing `/api/contact` route. The Next.js server calls
`https://api.resend.com/emails`, and Resend delivers the message to the configured
inbox. Resend is a managed external service. Your cluster runs the portfolio;
`mail.cyrostack.dev` is a verified sending domain, not a new app or ingress.

These steps use Cloudflare as the authoritative DNS provider, even if the domain
registration remains with Porkbun. The example sender is
`Keith Portfolio <portfolio@mail.cyrostack.dev>`; the recipient can remain your
Gmail inbox.

## 1. Create a Resend account and add the sending domain

1. Sign in or create an account at [Resend](https://resend.com).
2. Open **Domains**, choose **Add Domain**, and enter `mail.cyrostack.dev`.
3. Keep sending enabled. Receiving is optional and is not needed for this form.
4. Keep the DNS records Resend displays open. Use their actual names, values,
   record types, and MX priorities; the values depend on the selected region.

Use the [verified-domain documentation](https://resend.com/docs/dashboard/domains/introduction)
as the reference for this step.

## 2. Add the records in Cloudflare

1. Open Cloudflare and select the `cyrostack.dev` zone.
2. Open **DNS > Records** and add the sending-verification records from Resend.
   These include DKIM and SPF-related records, including a sending/return-path
   MX record where requested. Copy the values from your dashboard, not examples
   from another account or region.
3. Cloudflare may shorten a full hostname to a zone-relative name. Confirm the
   resulting hostname contains `cyrostack.dev` once, without duplicating it.
4. TXT and MX records are DNS-only automatically. If Resend supplies a CNAME for
   verification, set that record to **DNS only**. Keep the website's proxy
   settings unchanged.
5. Add the records for the sending subdomain while preserving any existing
   root-domain mail records.
6. Return to Resend, start verification, and wait for the sending domain to show
   **Verified**. If it stays pending, check the record names, contents, and MX
   priorities against the dashboard.

There is no need to point `mail.cyrostack.dev` at your cluster's IP address or
create an ingress for it. See Cloudflare's
[proxy-status documentation](https://developers.cloudflare.com/dns/proxy-status/)
and [email-provider setup walkthrough](https://developers.cloudflare.com/workers/tutorials/send-emails-with-resend/)
for DNS behavior; this app continues running in Kubernetes, not Workers.

## 3. Create a sending API key

1. Open **API Keys** in Resend and create a key named `knfolio`.
2. Choose **Sending access**, restricted to `mail.cyrostack.dev`.
3. Save the value locally when it is shown. Enter it in your environment file;
   it does not need to be pasted into chat or committed to the repository.

The app uses the key only on the server. There is no `NEXT_PUBLIC_` email setting.
See [Resend API keys](https://resend.com/docs/dashboard/api-keys/introduction).

## 4. Configure and test locally

From `E:\kn-folio` in PowerShell, create the local file if it does not exist:

```powershell
if (!(Test-Path -LiteralPath .env.local)) {
    Copy-Item -LiteralPath .env.example -Destination .env.local
}
```

Edit `.env.local` on your computer:

```dotenv
RESEND_API_KEY=your_actual_resend_key
CONTACT_FROM_EMAIL=Keith Portfolio <portfolio@mail.cyrostack.dev>
RECIPIENT_EMAIL=keithneo00@gmail.com
```

Keep these values unquoted if you will also use this file with kubectl below;
kubectl's env-file parser retains quotation marks. Plain spaces in the friendly
sender name are supported. Set `RECIPIENT_EMAIL` to whichever inbox should receive
your messages. `CONTACT_FROM_EMAIL` must use the verified sending domain.

Restart the dev server after changing the environment:

```powershell
npm.cmd run dev -- --port 4173
```

Open `http://localhost:4173/contact`, submit a short test note using an email
address you control, and verify:

- The form displays success and clears after Resend accepts the request.
- The email appears in the intended inbox, with the sender and message intact.
- Clicking **Reply** addresses the email entered in the contact form.
- Resend's Emails dashboard shows the corresponding message and delivery event.

The API's success means Resend accepted the message. Actual inbox delivery is
confirmed through the delivery event and inbox check.

For provider-event simulation instead of delivery to your own inbox, temporarily
set `RECIPIENT_EMAIL=delivered@resend.dev`, restart, and submit a note. This is a
Resend test address: it simulates delivery and does not forward to your Gmail.
Restore your real recipient before production. Test addresses count toward the
sending quota. See [Resend test emails](https://resend.com/docs/dashboard/emails/send-test-emails).

Automated regression tests are independent of this account setup:

```powershell
npm.cmd test
npm.cmd run lint
npm.cmd run build
```

They mock HTTP requests, do not read `.env.local`, and never send email.

## 5. Prepare the Kubernetes Secret

The old chart expects `EMAIL_USER` and `EMAIL_PASS` from `knfolio-secrets`.
This migration uses a separate Secret, `knfolio-resend-secrets`, so the running
Gmail-based deployment can keep using its existing configuration until rollout.

From the portfolio checkout, with kubectl connected to your intended cluster:

```powershell
kubectl config current-context
kubectl create namespace folio --dry-run=client -o yaml | kubectl apply -f -
kubectl create secret generic knfolio-resend-secrets --namespace folio --from-env-file=.env.local --dry-run=client -o yaml | kubectl apply -f -
```

The API key is read from the local file; it is not placed in command history.
Only the three contact variables need to be active in the file used here.
The Secret must be in `folio`, alongside the app. These commands create runtime
configuration; the application image contains no email credentials.

## 6. Update the Helm chart in CyroStack

Deployment configuration is maintained in the separate **CyroStack checkout**.
In `portfolio/knfolio-chart/templates/deployment.yaml`, replace the `EMAIL_USER`
container variable and its Secret key with `RESEND_API_KEY`. Replace `EMAIL_PASS`
and its Secret key with `CONTACT_FROM_EMAIL`. Keep `RECIPIENT_EMAIL` and the
existing `{{ .Values.existingSecret.name }}` Secret name references.

The resulting Deployment must reference these keys:

| Container variable | Key in `knfolio-resend-secrets` |
| --- | --- |
| `RESEND_API_KEY` | `RESEND_API_KEY` |
| `CONTACT_FROM_EMAIL` | `CONTACT_FROM_EMAIL` |
| `RECIPIENT_EMAIL` | `RECIPIENT_EMAIL` |

Save the following values in
`portfolio/knfolio-chart/resend-values.yaml` in the CyroStack checkout, or merge
them into the values file used by your existing deployment workflow:

```yaml
existingSecret:
  enabled: true
  name: knfolio-resend-secrets

ingress:
  host: knfolio.cyrostack.dev
```

Keep any other cluster-specific values you already use when rendering and
upgrading the release. The portfolio pod needs outbound DNS resolution and HTTPS
access to `api.resend.com:443`. These instructions do not apply changes to the
CyroStack repository or your cluster automatically.

## 7. Deploy the version containing the Resend changes

Build and publish an image containing the new route through the normal release
pipeline. Then, from the CyroStack checkout, choose the published tag and render
the chart for review:

```powershell
$imageTag = Read-Host "Published cyrof/kn-folio image tag containing the Resend changes"
helm template knfolio ./portfolio/knfolio-chart --namespace folio --values ./portfolio/knfolio-chart/resend-values.yaml --set-string "image.tag=$imageTag"
```

After checking the image, Secret references, and ingress hostname, deploy it:

```powershell
helm upgrade --install knfolio ./portfolio/knfolio-chart --namespace folio --create-namespace --values ./portfolio/knfolio-chart/resend-values.yaml --set-string "image.tag=$imageTag" --wait --timeout 5m
kubectl rollout status deployment/knfolio --namespace folio
```

Include the same other cluster-specific values files and overrides in both Helm
commands if your release uses them. Follow your existing GitOps workflow instead
if Helm releases are managed by a controller.

`SITE_URL` is a build-time metadata setting and already defaults to
`https://knfolio.cyrostack.dev`. Email settings are read at runtime. A Secret-only
change requires a pod restart to refresh environment variables:

```powershell
kubectl rollout restart deployment/knfolio --namespace folio
kubectl rollout status deployment/knfolio --namespace folio
```

Keep the old Gmail Secret until the new deployment is verified and any rollback
window has passed. Re-running the old image with only Resend variables will not
enable Resend; the chart and application need to change together.

## 8. Verify the deployed contact form

Visit `https://knfolio.cyrostack.dev/contact`, submit one note, and check inbox
delivery, Reply-To, and the Resend dashboard. The direct email link continues
opening the visitor's email application independently of the form.

For a failed submission, inspect the deployment logs:

```powershell
kubectl logs deployment/knfolio --namespace folio --since=10m
```

| Symptom | What to check |
| --- | --- |
| `Contact email configuration is incomplete` | All three Secret keys, the Secret name, and pod restart after changes |
| `Resend rejected contact email 401` or `403` | API key, sending permissions, verified sender domain, and unquoted env-file values |
| `Resend rejected contact email 422` | Sender/recipient formatting and sender domain |
| `Resend rejected contact email 429` | Provider rate or sending limits |
| `Contact email delivery failed timeout` | Cluster egress, DNS, and Resend availability |
| Success but no inbox message | Provider delivery/bounce event, recipient address, and spam folder |

The server logs status information without the API key, message body, or provider
response body. The form retains the visitor's text on an unsuccessful request.
