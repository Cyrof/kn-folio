import { skillGroups } from "../data/portfolio";

export default function Skills() {
    return (
        <div className="skill-groups">
            {skillGroups.map((group, index) => (
                <section
                    className="skill-group"
                    key={group.name}
                    aria-labelledby={`skill-group-${index}`}
                >
                    <div className="skill-group-heading">
                        <span className="section-index">0{index + 1}</span>
                        <div>
                            <h3 id={`skill-group-${index}`}>{group.name}</h3>
                            <p>{group.subtitle}</p>
                        </div>
                    </div>
                    <div className="skill-list">
                        {group.skills.map((skill) => (
                            <details className="skill-detail" key={skill.name}>
                                <summary>
                                    {skill.name}
                                    <span aria-hidden="true">+</span>
                                </summary>
                                <p>{skill.description}</p>
                            </details>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}
