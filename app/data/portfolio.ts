import data from "./processed-data.json";

const details = [
    {
        github: "https://github.com/Cyrof/kn-folio",
        name: "Digital Portfolio",
        category: "Web development",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        tone: "peach",
        note: "A little corner of the internet, built from scratch.",
        visual: "portfolio",
    },
    {
        github: "https://github.com/Cyrof/rpi-home-server-config",
        name: "Cyrostack Pi Cluster",
        category: "Infrastructure",
        tags: ["Kubernetes", "Raspberry Pi", "Home lab"],
        tone: "sage",
        note: "A small cluster. A whole lot of possibilities.",
        visual: "cluster",
    },
    {
        github: "https://github.com/dixslyf/sentinel",
        name: "Sentinel",
        category: "AI & computer vision",
        tags: ["Computer vision", "Object detection"],
        tone: "lavender",
        note: "A home detection system that spots potential hazards.",
        visual: "sentinel",
    },
    {
        github: "https://github.com/dixslyf/chrono-cycle",
        name: "ChronoCycle",
        category: "Application development",
        tags: ["Task management", "Recurring tasks"],
        tone: "sand",
        note: "Making complex recurring tasks easier to manage.",
        visual: "cycle",
    },
    {
        github: "https://github.com/Cyrof/GopherGate",
        name: "GopherGate",
        category: "Networking & infrastructure",
        tags: ["Go", "WireGuard", "gRPC", "PostgreSQL"],
        tone: "blue",
        note: "Bringing structure to WireGuard peer management.",
        visual: "image",
    },
    {
        github: "https://github.com/OurNeZt",
        name: "OurNeZt",
        category: "Full-stack application",
        tags: ["Go", "Gin", "gRPC", "PostgreSQL", "Tailwind CSS"],
        tone: "rose",
        note: "A shared space for planning a home and a future together.",
        visual: "image",
    },
];

const detailsByRepository = new Map(
    details.map((detail) => [detail.github, detail]),
);

export const projects = data.projects.map((project, index) => ({
    ...project,
    originalName: project.name,
    category: "Personal project",
    tags: [] as string[],
    tone: "sage",
    note: "",
    visual: "image",
    ...detailsByRepository.get(project.github),
    image: `/${project.url}`,
    number: String(index + 1).padStart(2, "0"),
}));

// Keep the home-page selection independent of the full project collection.
export const featuredProjects = [
    "https://github.com/OurNeZt",
    "https://github.com/Cyrof/rpi-home-server-config",
].flatMap((github) => projects.filter((project) => project.github === github));

export const skillGroups = [
    {
        name: "Languages",
        subtitle: "The foundations I build with.",
        names: [
            "Python",
            "C",
            "C++",
            "Go (Golang)",
            "Rust",
            "JavaScript",
            "TypeScript",
        ],
    },
    {
        name: "Web & data",
        subtitle: "From the interface to the database.",
        names: [
            "Next.js",
            "Tailwind CSS",
            "React",
            "MongoDB",
            "PostgreSQL",
            "MySQL",
        ],
    },
    {
        name: "Infrastructure & AI",
        subtitle: "Deploy, automate, and keep exploring.",
        names: [
            "Git",
            "Docker",
            "Kubernetes",
            "Ansible",
            "PyTorch",
            "Arch Linux",
        ],
    },
].map((group) => ({
    ...group,
    skills: data.skills.filter((skill) => group.names.includes(skill.name)),
}));
