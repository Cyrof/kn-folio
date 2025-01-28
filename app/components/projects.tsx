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
        <div className="w-full h-auto flex flex-col gap-10 items-center animate-staggered-text-down [--slidein-delay:200ms] opacity-0 [animation-timeline:view()]">
            {projectChunk.map((chunk, chunkIndex) => (
                <div key={chunkIndex} className="flex justify-center w-full gap-20">
                    {chunk.map((proj, index) => (
                        <div
                            key={index}
                            className="group w-56 h-56 m-0 relative transition-all duration-500 ease-in-out hover:h-[19rem] hover:w-[17rem]"
                        >
                            {/* wrapper */}
                            <div
                                className="bg-[#3d3131] m-0 h-full w-full rounded-xl shadow-xl flex flex-col justify-center items-center gap-3 relative"
                            >
                                <div className="w-full flex flex-col items-center gap-3 transition-transform duration-500 [transform-style:preserve-3d] group-hover:-translate-y-10">
                                    {/* square image */}
                                    <div className="w-24 h-24 border-4 border-gray-900 shadow-lg bg-gray-700 flex justify-center items-center rounded-xl">
                                        <img src={proj.url} alt="img" className="w-20 h-auto"/>
                                    </div>
                                    <span className="w-4/5 h-10 text-center font-sans font-bold text-lg">{proj.name}</span>
                                </div>
                                {/* <p className="absolute w-4/5 text-center font-sans font-medium bottom-0 opacity-0 group-hover:animate-staggered-text-up group-hover:[--slidein-delay:200ms]">{proj.description}</p> */}
                                <div className="absolute mb-2 font-sans font-medium bottom-0 opacity-0 flex flex-col gap-3 items-center text-center group-hover:animate-staggered-text-up group-hover:[--slidein-delay:100ms]">
                                    <p className="w-4/5">{proj.description}</p>
                                    {/* github button */}
                                    <a href={proj.github} target="_blank" className=" bg-red-500 rounded-xl text-gray-200 p-1 hover:bg-red-400 hover:text-gray-900 transition-colors duration-300">
                                        View Repo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Projects;