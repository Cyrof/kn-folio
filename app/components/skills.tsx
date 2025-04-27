// skills cards 
'use client'
import { useEffect, useState } from "react";
import { Data } from "../interfaces/skills_project";
import { chunkArray } from "../utils/chunkArray";
import { Box, Image, Stack, Text, Group } from "@mantine/core";

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
        <Stack className="w-full h-auto items-center" gap="lg">
            {skillsChunk.map((chunk, chunkIndex) => (
                <Group key={chunkIndex} className="w-full" justify="center" gap="xl">
                    {chunk.map((skill, index) => {
                        const absoluteIndex = chunkIndex * 4 + index;
                        return (
                            <Box 
                                key={absoluteIndex} 
                                className="group w-56 h-60 relative opacity-0 animate-card-down"
                                style={{ animationDelay: `${index * 0.05}s`}}
                                onClick={() => handleCardClick(absoluteIndex)}
                            >
                                <Box
                                    className={`relative bg-[#3d3131] h-full w-full rounded-xl shadow-xl transition-transform duration-500 [transform-style:preserve-3d]
                                    ${flipped[absoluteIndex] ? '[transform:rotateY(180deg)]' : ''}    
                                    ${!flipped[absoluteIndex] ? 'group-hover:translate-y-[-10px]' : ''}
                                    cursor-pointer`}
                                >
                                    {/* front */}
                                    <Stack className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] p-5" justify="center" align="center">
                                        <Image 
                                            src={skill.icon}
                                            alt={`${skill.name} icon`}
                                            className="w-auto h-auto mb-3"
                                        />
                                        <Text className="font-semibold text-2xl text-gray-200">{skill.name}</Text>
                                    </Stack>
                                    {/* back */}
                                    <Stack className="absolute inset-0 h-full w-full rounded-xl text-center [transform:rotateY(180deg)] [backface-visibility:hidden] p-5" justify="flex-start" align="center">
                                        <Text className="font-semibold text-3xl mb-2 text-gray-200">{skill.name}</Text>
                                        <Text className="font-sans text-lg text-pretty text-center text-gray-200">{skill.description}</Text>
                                    </Stack>
                                </Box>
                            </Box>
                        )
                    })}
                </Group>
            ))}
        </Stack>
    )
}

export default Skills;