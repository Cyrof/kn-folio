import { ArrowUpRight } from "lucide-react";

import { experience } from "../data/experience";

export default function Experience() {
    return (
        <section
            id="experience"
            className="container section experience-section"
            aria-labelledby="experience-title"
        >
            <div className="section-heading">
                <div>
                    <p className="eyebrow">
                        <span className="section-index">02 /</span> EXPERIENCE
                    </p>
                    <h2 id="experience-title">
                        Real systems.
                        <br />
                        <span className="serif">Hands-on responsibility.</span>
                    </h2>
                </div>
                <a
                    className="text-link"
                    href="https://www.linkedin.com/in/keithnks"
                    target="_blank"
                    rel="noreferrer"
                >
                    View on LinkedIn{" "}
                    <ArrowUpRight size={17} aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                </a>
            </div>
            <article
                className="experience-entry"
                aria-labelledby="current-role-title"
            >
                <div className="experience-role">
                    <p className="eyebrow experience-status">
                        <span className="status-dot" /> CURRENT ROLE
                    </p>
                    <h3 id="current-role-title">{experience.title}</h3>
                    <p className="experience-company">{experience.company}</p>
                    <p className="experience-department">
                        {experience.department}
                    </p>
                    <p className="experience-dates">
                        <time dateTime={experience.startDate}>
                            {experience.startLabel}
                        </time>{" "}
                        – Present
                    </p>
                    <p className="experience-summary">{experience.summary}</p>
                    <ul
                        className="tags experience-technologies"
                        aria-label="Technologies used in this role"
                    >
                        {experience.technologies.map((technology) => (
                            <li key={technology}>{technology}</li>
                        ))}
                    </ul>
                </div>
                <ul
                    className="experience-highlights"
                    aria-label="Responsibilities and contributions"
                >
                    {experience.highlights.map((highlight) => (
                        <li key={highlight.title}>
                            <h4>{highlight.title}</h4>
                            <p>{highlight.description}</p>
                        </li>
                    ))}
                </ul>
            </article>
        </section>
    );
}
