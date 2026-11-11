import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    Code2,
    Github,
    Linkedin,
    MapPin,
    ShieldCheck,
    Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Projects from "./components/projects";
import { featuredProjects } from "./data/portfolio";

const expertise = [
    {
        icon: ShieldCheck,
        name: "Secure by design",
        text: "Bringing development, security, and operations together to build systems you can trust.",
    },
    {
        icon: Sparkles,
        name: "Curious about AI",
        text: "Exploring machine learning and computer vision through practical, hands-on projects.",
    },
    {
        icon: Code2,
        name: "Built from the ground up",
        text: "From full-stack applications to a self-built Raspberry Pi cluster. Learning by making.",
    },
];

export default function Home() {
    return (
        <>
            <section className="container hero" aria-labelledby="hero-title">
                <div className="hero-copy">
                    <p className="eyebrow">
                        <span className="status-dot" /> DEVSECOPS ENGINEER &
                        CREATIVE THINKER
                    </p>
                    <h1 id="hero-title">
                        Hi, I&apos;m Keith<span className="accent">.</span>
                        <br />I build for a<br />
                        <span className="serif">smarter, safer</span>
                        <br />
                        digital world.
                    </h1>
                    <p className="hero-description">
                        An engineer&apos;s curiosity. A builder&apos;s mindset.
                        <br className="desktop-break" /> Exploring the
                        intersection of AI, cybersecurity,
                        <br className="desktop-break" /> and thoughtful
                        software.
                    </p>
                    <div className="hero-actions">
                        <Link href="/myWork" className="button button-primary">
                            Explore my work{" "}
                            <ArrowUpRight size={18} aria-hidden="true" />
                        </Link>
                        <Link href="/about" className="text-link">
                            A little about me{" "}
                            <ArrowRight size={17} aria-hidden="true" />
                        </Link>
                    </div>
                    <div className="hero-socials">
                        <span>FIND ME ON</span>
                        <a
                            href="https://github.com/Cyrof"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub (opens in a new tab)"
                        >
                            <Github size={18} aria-hidden="true" /> GitHub{" "}
                            <ArrowUpRight size={13} aria-hidden="true" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/keithnks"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn (opens in a new tab)"
                        >
                            <Linkedin size={18} aria-hidden="true" /> LinkedIn{" "}
                            <ArrowUpRight size={13} aria-hidden="true" />
                        </a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="portrait-frame">
                        <Image
                            src="/images/optimized/portrait.webp"
                            alt="Keith Neo at the Singapore Botanic Gardens"
                            fill
                            priority
                            sizes="(max-width: 650px) 90vw, (max-width: 1000px) 43vw, 440px"
                            className="hero-portrait"
                        />
                        <span className="portrait-label">
                            A WORK IN PROGRESS. ALWAYS.
                        </span>
                    </div>
                    <span className="portrait-mark" aria-hidden="true">
                        <Code2 strokeWidth={1.5} />
                    </span>
                    <div className="portrait-note">
                        <span className="note-line" aria-hidden="true">
                            ↳
                        </span>{" "}
                        Always learning.
                        <br />
                        Always building.
                    </div>
                    <div className="location-label">
                        <MapPin size={15} aria-hidden="true" /> Based in
                        Singapore <span>01° N, 103° E</span>
                    </div>
                </div>
            </section>
            <div className="container intro-strip">
                <span>SECURITY MINDED. POSSIBILITY DRIVEN.</span>
                <p>Turning complex challenges into things that work.</p>
                <a href="#selected-work" aria-label="Scroll to selected work">
                    <ArrowDown size={20} aria-hidden="true" />
                </a>
            </div>
            <section
                id="selected-work"
                className="section container"
                aria-labelledby="work-title"
            >
                <div className="section-heading">
                    <div>
                        <p className="eyebrow">
                            <span className="section-index">01 /</span> SELECTED
                            WORK
                        </p>
                        <h2 id="work-title">
                            A few things I&apos;ve{" "}
                            <span className="serif">built.</span>
                        </h2>
                    </div>
                    <Link className="text-link" href="/myWork">
                        View all projects{" "}
                        <ArrowUpRight size={17} aria-hidden="true" />
                    </Link>
                </div>
                <Projects items={featuredProjects} />
            </section>
            <section
                className="expertise-section"
                aria-labelledby="approach-title"
            >
                <div className="container section">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">
                                <span className="section-index">02 /</span> MY
                                APPROACH
                            </p>
                            <h2 id="approach-title">
                                Different disciplines.
                                <br />
                                One <span className="serif">curious mind.</span>
                            </h2>
                        </div>
                        <p className="section-description">
                            I connect the dots between secure infrastructure,
                            intelligent systems, and the people who use them.
                        </p>
                    </div>
                    <div className="expertise-grid">
                        {expertise.map(({ icon: Icon, name, text }) => (
                            <article key={name}>
                                <Icon
                                    size={27}
                                    strokeWidth={1.5}
                                    aria-hidden="true"
                                />
                                <h3>{name}</h3>
                                <p>{text}</p>
                            </article>
                        ))}
                    </div>
                    <Link href="/skills" className="text-link">
                        Explore my toolkit{" "}
                        <ArrowUpRight size={17} aria-hidden="true" />
                    </Link>
                </div>
            </section>
            <section
                className="container section home-about"
                aria-labelledby="about-title"
            >
                <p className="eyebrow">
                    <span className="section-index">03 /</span> THE PERSON
                    BEHIND THE CODE
                </p>
                <div>
                    <h2 id="about-title">
                        Engineer by profession.
                        <br />
                        <span className="serif">Explorer at heart.</span>
                    </h2>
                    <p>
                        Since 2018, I&apos;ve followed my curiosity through
                        code, cameras, and guitar strings. Today, I work as a
                        DevSecOps Engineer at NCS Singapore, and keep that same
                        spirit of exploration in everything I build.
                    </p>
                    <Link href="/about" className="text-link">
                        More of my story{" "}
                        <ArrowUpRight size={17} aria-hidden="true" />
                    </Link>
                </div>
            </section>
        </>
    );
}
