import { ArrowUpRight, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ImageGallery from "../components/imageGallery";

export const metadata: Metadata = {
    alternates: { canonical: "/about" },
    title: "About",
    description:
        "Meet Keith Neo: AI System Engineer with experience in AI infrastructure, DevSecOps, and cybersecurity. Photographer and guitarist based in Singapore.",
};

export default function About() {
    return (
        <div className="container">
            <header className="page-heading">
                <p className="eyebrow">A LITTLE ABOUT ME</p>
                <h1>
                    Driven by curiosity.
                    <br />
                    <span className="serif">Grounded in craft.</span>
                </h1>
                <p>
                    There&apos;s a person behind every line of code.
                    <br />
                    Here&apos;s a little of my story.
                </p>
            </header>
            <section
                className="about-intro section-bottom"
                aria-labelledby="story-title"
            >
                <figure className="about-portrait">
                    <div>
                        <Image
                            src="/images/optimized/portrait.webp"
                            alt="Keith at the Singapore Botanic Gardens"
                            fill
                            priority
                            sizes="(max-width: 700px) 90vw, 40vw"
                        />
                    </div>
                    <figcaption>
                        <MapPin size={14} aria-hidden="true" /> Botanic Gardens,
                        Singapore
                    </figcaption>
                </figure>
                <div className="prose">
                    <p className="eyebrow">THE STORY SO FAR</p>
                    <h2 id="story-title">
                        An engineer&apos;s mind.
                        <br />A{" "}
                        <span className="serif">maker&apos;s spirit.</span>
                    </h2>
                    <p>
                        I&apos;m a dedicated AI and cybersecurity enthusiast
                        with a passion for building innovative solutions and
                        tackling complex challenges.
                    </p>
                    <p>
                        Since <strong>2018</strong>, I&apos;ve been exploring
                        technology through self-driven projects, from crafting
                        command-line tools to orchestrating Kubernetes
                        deployments on my self-built Raspberry Pi cluster. My
                        experience also spans machine learning, cybersecurity
                        tools, and DevSecOps engineering.
                    </p>
                    <p>
                        Today, I work as an{" "}
                        <strong>AI System Engineer at NCS Singapore</strong>, in
                        the Video Intelligence department since August 2025,
                        bridging development, security, and operations. Since
                        graduating in April 2025, I&apos;ve been contributing to
                        secure and scalable systems while continuing to explore
                        AI and cybersecurity through hands-on projects.
                    </p>
                    <p>
                        Outside my professional role, I build full-stack
                        projects like <strong>GopherGate</strong>, a VPN
                        solution using WireGuard and Golang with a UI, CLI, and
                        backend. This digital portfolio is another project,
                        crafted from scratch using Next.js with scalability and
                        performance in mind.
                    </p>
                    <Link href="/myWork" className="text-link">
                        See what I&apos;ve been building{" "}
                        <ArrowUpRight size={17} aria-hidden="true" />
                    </Link>
                    <Link
                        href="/#experience"
                        className="text-link about-experience-link"
                    >
                        Explore my professional experience{" "}
                        <ArrowUpRight size={17} aria-hidden="true" />
                    </Link>
                </div>
            </section>
            <section
                className="outside-work section"
                aria-labelledby="outside-title"
            >
                <div className="section-heading">
                    <div>
                        <p className="eyebrow">BEYOND THE TERMINAL</p>
                        <h2 id="outside-title">
                            A different kind
                            <br />
                            of <span className="serif">creative outlet.</span>
                        </h2>
                    </div>
                    <p className="section-description">
                        Technology, creativity, and music keep me inspired,
                        curious, and ready for the next challenge.
                    </p>
                </div>
                <ImageGallery />
                <div className="hobby-copy">
                    <article>
                        <span className="eyebrow">01 / THROUGH THE LENS</span>
                        <h3>Finding a new perspective.</h3>
                        <p>
                            Photography is my creative outlet: exploring new
                            landscapes, documenting fleeting moments, and
                            experimenting with compositions. There&apos;s always
                            something worth noticing.
                        </p>
                    </article>
                    <article>
                        <span className="eyebrow">
                            02 / AWAY FROM THE KEYBOARD
                        </span>
                        <h3>Six strings. Endless ideas.</h3>
                        <p>
                            I&apos;ve been playing guitar for over 12 years and
                            counting. Music is a way to unwind, express myself,
                            and sometimes spark fresh ideas for my tech
                            projects.
                        </p>
                    </article>
                </div>
            </section>
        </div>
    );
}
