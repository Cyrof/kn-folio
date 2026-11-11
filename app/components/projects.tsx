import {
    ArrowUpRight,
    Circle,
    Crosshair,
    Server,
    Terminal,
} from "lucide-react";
import Image from "next/image";

import { projects } from "../data/portfolio";

function ProjectVisual({ kind, image }: { kind: string; image: string }) {
    if (kind === "image")
        return (
            <div className="project-logo-art" aria-hidden="true">
                <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(max-width: 650px) 76vw, (max-width: 1050px) 34vw, 400px"
                />
            </div>
        );
    if (kind === "portfolio")
        return (
            <div className="mini-browser" aria-hidden="true">
                <div className="browser-bar">
                    <span />
                    <span />
                    <span />
                    <b>keith neo / portfolio</b>
                </div>
                <div className="browser-content">
                    <span className="mini-label">
                        ENGINEER. BUILDER. EXPLORER.
                    </span>
                    <strong>
                        Ideas into
                        <br />
                        <i>impact.</i>
                    </strong>
                    <div className="mini-button">Explore my work ↗</div>
                    <div className="mini-code">
                        <Terminal size={25} />
                        <span>const curiosity = true;</span>
                    </div>
                </div>
            </div>
        );
    if (kind === "cluster")
        return (
            <div className="cluster-art" aria-hidden="true">
                <div className="cluster-label">CYROSTACK / HOME LAB</div>
                <div className="server-stack">
                    {[0, 1, 2, 3].map((item) => (
                        <div className="server-unit" key={item}>
                            <Server size={24} />
                            <span>pi-node-0{item + 1}</span>
                            <i />
                            <i />
                        </div>
                    ))}
                </div>
                <div className="cluster-caption">
                    <span className="status-dot" /> 4 nodes. One ecosystem.
                </div>
            </div>
        );
    if (kind === "sentinel")
        return (
            <div className="sentinel-art" aria-hidden="true">
                <Crosshair size={115} strokeWidth={1} />
                <span className="detection-label">
                    SENTINEL / OBJECT DETECTION
                </span>
                <div className="detection-box">
                    hazard detection <span>⌁</span>
                </div>
            </div>
        );
    return (
        <div className="cycle-art" aria-hidden="true">
            <Circle size={140} strokeWidth={1} />
            <Circle size={100} strokeWidth={1} />
            <span>
                ChronoCycle<span>Make time for what matters.</span>
            </span>
        </div>
    );
}

export default function Projects({
    items = projects,
}: {
    items?: typeof projects;
}) {
    return (
        <div className="project-grid">
            {items.map((project) => (
                <article className="project-card" key={project.github}>
                    <a
                        className="project-preview"
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Explore ${project.name} on GitHub (opens in a new tab)`}
                        data-tone={project.tone}
                    >
                        <span className="project-number">
                            {project.number} / PROJECT
                        </span>
                        <ProjectVisual
                            kind={project.visual}
                            image={project.image}
                        />
                        <span className="project-preview-arrow">
                            <ArrowUpRight size={20} />
                        </span>
                    </a>
                    <div className="project-info">
                        <p className="project-category">{project.category}</p>
                        <div className="project-heading">
                            <Image
                                src={project.image}
                                alt=""
                                width={36}
                                height={36}
                                className="project-icon"
                            />
                            <h3>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {project.name}
                                    <span className="sr-only">
                                        {" "}
                                        on GitHub (opens in a new tab)
                                    </span>
                                </a>
                            </h3>
                            <ArrowUpRight size={20} aria-hidden="true" />
                        </div>
                        <p>
                            {project.description} {project.note}
                        </p>
                        <ul
                            className="tags"
                            aria-label={`${project.name} technologies and topics`}
                        >
                            {project.tags.map((tag) => (
                                <li key={tag}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                </article>
            ))}
        </div>
    );
}
