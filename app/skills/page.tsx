import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import Skills from "../components/skills";

export const metadata: Metadata = {
    alternates: { canonical: "/skills" },
    title: "Skills & Toolkit",
    description:
        "Explore Keith Neo's skills in programming, full-stack development, databases, Kubernetes, automation, and AI. Discover how each tool is used.",
};

export default function SkillsPage() {
    return (
        <div className="container">
            <header className="page-heading">
                <p className="eyebrow">ALWAYS A STUDENT OF THE CRAFT</p>
                <h1>
                    The right tools.
                    <br />
                    <span className="serif">A curious mindset.</span>
                </h1>
                <p>
                    From the first line of code to the final deployment,
                    <br />
                    these are the technologies I work with and keep exploring.
                </p>
            </header>
            <section className="section-bottom" aria-labelledby="toolkit-title">
                <div className="collection-heading">
                    <h2 id="toolkit-title">
                        My toolkit <span>(19)</span>
                    </h2>
                    <span>SELECT A TOOL TO LEARN MORE</span>
                </div>
                <Skills />
            </section>
            <div className="skills-note">
                <p>
                    Good tools are only the beginning.
                    <br />
                    <strong>See what happens when I put them to work.</strong>
                </p>
                <Link className="button button-primary" href="/myWork">
                    Explore my projects{" "}
                    <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
            </div>
        </div>
    );
}
