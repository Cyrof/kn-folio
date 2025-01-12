// interfaces for skills and project json file 

export interface Skill {
    name: string, 
    description: string;
    icon: string,
}

export interface Project {
    name: string;
    description: string;
    img: string;
}

export interface Data {
    skills: Skill[];
    projects: Project[];
}