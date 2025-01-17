// projects cards 
'use client'
import { useEffect, useState } from "react"
import { Data } from "../interfaces/skills_project"
import { chunkArray } from "../utils/chunkArray"

const Projects = () => {
    const [data, setData] = useState<Data>({ skills: [], projects: [] });
    
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

    const projectChunk = chunkArray(data.projects, 3);

    return(
        <div className="w-full h-auto flex flex-col gap-10 items-center">
            {projectChunk.map((chunk, chunkIndex) => (
                <div key={chunkIndex} className="flex justify-center w-full gap-20">
                    {chunk.map((proj, index) => (
                        <div
                            key={index}
                            className="group w-56 h-60 relative"
                        >
                            {/* wrapper */}
                            <div
                                className="bg-[#3d3131] h-full w-full rounded-xl shadow-xl flex flex-col justify-center items-center gap-3"
                            >
                                {/* circle image */}
                                <div className="w-20 h-20 border-4 border-gray-700 shadow-lg bg-gray-800 flex justify-center items-center rounded-xl">
                                    <img src={proj.url} alt="img" className="w-16 h-auto"/>
                                </div>
                                <span className="w-4/5 text-center font-sans font-semibold">{proj.name}</span>
                                <p className="w-4/5 text-center font-sans font-medium opacity-0 group-hover:animate-staggered-text-up [--slidein-delay: 200ms]">{proj.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Projects;