// skills cards 
'use client'
import { useEffect, useState } from "react";
import { Data } from "../interfaces/skills_project";

// define interfaces 


const Skills = () => {
    const [data, setData] = useState<Data>({ skills: [], projects: [] });

    // useEffect(() => {
    //     fetch('/api/data')
    //         .then((res) => res.json())
    //         .then((json) => setData(json))
    //         .catch((err) => console.error('Failed to fetch data', err))
    // }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/data');
                if (!res.ok) throw new Error('Failed to fetch data');
                const data = await res.json();
                setData(data);
            } catch (err) {
                console.error(`Error fetching data ${err}`);
            }
        }

        fetchData();
    }, []);
    
    return (
        <div className="w-full h-auto grid grid-cols-3 gap-5 justify-items-center">
            {data.skills.map((skill, index) => (
                <div key={index} className="bg-gray-800 text-gray-200 p-5 rounded-xl">
                    <h1 className="font-heading text-lg">{skill.name}</h1>
                    <span>{skill.description}</span>
                </div>
            ))}
        </div>
    )
}

export default Skills;