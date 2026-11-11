import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import Projects from "../components/projects";
import Skills from "../components/skills";
import { projects } from "../data/portfolio";

export default function MyWork() {
    return (
        <div className="container">
            <header className="page-heading">
                <p className="eyebrow">
                    EXPERIMENTS. EXPLORATIONS. THINGS THAT WORK.
                </p>
                <h1>
                    Learning by doing.
                    <br />
                    <span className="serif">Building with purpose.</span>
                </h1>
                <div className="page-heading-bottom">
                    <p>
                        A collection of projects across software,
                        infrastructure, and AI.
                        <br />
                        Every one started with a question: what if?
                    </p>
                    <a
                        className="text-link"
                        href="https://github.com/Cyrof"
                        target="_blank"
                        rel="noreferrer"
                    >
                        More on GitHub{" "}
                        <ArrowUpRight size={17} aria-hidden="true" />
                        <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                </div>
            </header>
            <section
                className="section-bottom"
                aria-labelledby="all-projects-title"
            >
                <div className="collection-heading">
                    <h2 id="all-projects-title">
                        Selected projects{" "}
                        <span>
                            ({String(projects.length).padStart(2, "0")})
                        </span>
                    </h2>
                    <span>PERSONAL & COLLABORATIVE WORK</span>
                </div>
                <Projects />
            </section>
            <section
                id="skills"
                className="section work-skills"
                aria-labelledby="work-skills-title"
            >
                <div className="section-heading">
                    <div>
                        <p className="eyebrow">THE TOOLS BEHIND THE WORK</p>
                        <h2 id="work-skills-title">
                            My ever-evolving{" "}
                            <span className="serif">toolkit.</span>
                        </h2>
                    </div>
                    <Link href="/skills" className="text-link">
                        Explore my skills{" "}
                        <ArrowUpRight size={17} aria-hidden="true" />
                    </Link>
                </div>
                <Skills />
            </section>
        </div>
    );
}
