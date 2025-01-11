// skills cards 
'use client'
import { useEffect, useState } from "react";
import { Data, Skill } from "../interfaces/skills_project";

// function to split array into chunks 
const chunkArray = (arr: Skill[], size: number) => {
    const result = [];
    for (let i=0; i<arr.length; i+=size) {
        result.push(arr.slice(i, i+size));
    }
    return result;
}

const Skills = () => {
    const [data, setData] = useState<Data>({ skills: [], projects: [] });
    const [flipped, setFlipped] = useState<Record<number, boolean>>({});

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

    const handleCardClick = (index: number) => {
        setFlipped((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const skillsChunk = chunkArray(data.skills, 4);
    
    return (
        <div className="w-full h-auto flex flex-col gap-10 items-center">
            {skillsChunk.map((chunk, chunkIndex) => (
                <div key={chunkIndex} className="flex justify-center w-full gap-20">
                    {chunk.map((skill,index) => {
                        const absoluteIndex = chunkIndex * 4 + index;
                        return (
                            <div
                                key={absoluteIndex}
                                className="group w-56 h-60 relative"
                                onClick={() => handleCardClick(absoluteIndex)}
                            >
                                {/* wrapper */}
                                <div
                                    className={`relative bg-[#3d3131] h-full w-full rounded-xl shadow-xl transition-transform duration-500 [transform-style:preserve-3d]
                                    ${flipped[absoluteIndex] ? '[transform:rotateY(180deg)]' : ''}
                                    ${!flipped[absoluteIndex] ? 'group-hover:translate-y-[-10px]' : ''}
                                    cursor-pointer`}
                                >
                                    {/* front face */}
                                    <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] flex flex-col justify-center items-center p-5">
                                        <img 
                                            src={skill.icon} 
                                            alt={`${skill.name} icon`}
                                            className="w-auto h-auto mb-3"
                                        />                                        
                                        <h1 className="font-heading text-2xl">{skill.name}</h1>
                                    </div>
                                    {/* back face */}
                                    <div className="absolute inset-0 h-full w-full rounded-xl text-center [transform:rotateY(180deg)] [backface-visibility:hidden] p-5">                                        
                                        <h1 className="font-heading text-2xl mb-2">{skill.name}</h1>
                                        <p className="font-sans text-lg text-pretty text-center">{skill.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            ))}

        </div>
        // <div className="w-full h-auto flex flex-col gap-10 items-center">
        //     {skillsChunk.map((chunk, chunkIndex) => (
        //         <div
        //             key={chunkIndex}
        //             className={`flex justify-center w-full gap-20`}
        //         >
        //             {chunk.map((skill, index) => (
        //                 <div
        //                     key={index}
        //                     className="group w-56 h-60"
        //                 >
        //                     {/* wrapper */}
        //                     <div className="relative bg-[#3d3131] h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        //                         {/* front face */}
        //                         <div className="inset-0 h-full w-full rounded-xl [backface-visibility:hidden] flex flex-col justify-center items-center p-5">
        //                             <img 
        //                                 src={skill.icon} 
        //                                 alt={`${skill.name} icon`}
        //                                 className="w-auto h-auto mb-3"
        //                             />
        //                             <h1 className="font-heading text-lg">{skill.name}</h1>
        //                         </div>
        //                         {/* back face */}
        //                         <div className="absolute inset-0 h-full w-full rounded-xl text-center [transform:rotateY(180deg)] [backface-visibility:hidden] p-5">
        //                             <h1 className="font-heading text-2xl mb-2">{skill.name}</h1>
        //                             <p className="font-sans text-lg text-pretty text-center">{skill.description}</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //     ))}
        // </div>
    )
}

export default Skills;