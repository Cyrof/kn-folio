// interfaces for skills and project json file 

interface Skill {
    name: string, 
    description: string;
}

interface Project {
    name: string;
    description: string;
}

export interface Data {
    skills: Skill[];
    projects: Project[];
}