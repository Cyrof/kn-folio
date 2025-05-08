# build the app
FROM node:18-alpine AS builder 

# set work dir
WORKDIR /usr/src/app

# copy only necessary files 
COPY package*.json ./

# install dependencies 
RUN npm ci

# copy all files (exclude using dockerignore)
COPY . .

# build nextjs application 
RUN npm run build

# run the app 
FROM node:alpine3.20 AS prod

# install dependencies
RUN apk add --no-cache tini

# work dir 
WORKDIR /usr/src/app

# Copy only necessary files from building stage 
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public

# Ensure Next.js listens on all interfaces
ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000

# ensure container uses a signal-forwarding init system like `tini`
ENTRYPOINT ["tini", "--"]

# run command 
CMD ["npm", "run", "start", "--", "--hostname", "0.0.0.0", "--port", "3000"]
