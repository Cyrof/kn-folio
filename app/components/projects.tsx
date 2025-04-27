// projects cards 
'use client'
import { useEffect, useState } from "react"
import { Data } from "../interfaces/skills_project"
import { chunkArray } from "../utils/chunkArray"
import { Box, Button, Center, Group, Image, Stack, Text } from "@mantine/core"

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
        <Stack className="w-full h-auto animate-staggered-text-down [--slidein-delay:200ms] opacity-0 [animation-timeline:view()]" align="center" gap="lg">
            {projectChunk.map((chunk, chunkIndex) => (
                <Group key={chunkIndex} className="w-full" justify="center" gap="xl">
                    {chunk.map((project, index) => (
                        <Box
                            key={index}
                            className="group w-56 h-56 m-0 relative transition-all duration-500 ease-in-out hover:h-[19rem] hover:w-[17rem]"
                        >
                            {/* wrapper */}
                            <Stack className="bg-[#3d3131] m-0 h-full w-full rounded-xl shadow-xl relative" justify="center" align="center" gap={3}>
                                <Stack className="w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:-translate-y-10" gap={3} align="center">
                                    {/* square image */}
                                    <Center className="w-24 h-24 border-4 border-gray-900 shadow-lg bg-gray-700 rounded-xl">
                                        <Image 
                                            src={project.url}
                                            alt="img"
                                            className="w-20 h-auto"
                                        />
                                    </Center>
                                    <Text className="w-4/5 h-10 text-center font-sans font-bold text-lg text-gray-200">{project.name}</Text>
                                </Stack>
                                <Stack className="absolute mb-2 font-sans font-medium bottom-0 opacity-0 text-center group-hover:animate-staggered-text-up group-hover:[--slidein-delay:100ms" align="center" gap={3}>
                                    <Text className="w-4/5 text-gray-200">{project.description}</Text>
                                    <Button
                                        component="a"
                                        href={project.github}
                                        target="_blank"
                                        className="bg-red-500 rounded-xl text-gray-200 p-1 hover:bg-red-400 hover:text-gray-900 transition-colors duration-300"
                                    >
                                        View Repo
                                    </Button>
                                </Stack>
                            </Stack>
                        </Box>
                    ))}
                </Group>
            ))}
        </Stack>
    )
}

export default Projects;