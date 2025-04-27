// my work page 
import NavBar from "../components/navbar"
import Footer from "../components/footer"
import TextReveal from "../components/textReveal"
import Skills from "../components/skills"
import Projects from "../components/projects"
import { Box, Center, Group, Stack, Text } from "@mantine/core"

export default function myWork(){ 
    return(
        <>
            <NavBar />
            <Stack>
                {/* header */}
                <Center className="w-full h-auto mt-5">
                    <TextReveal />
                </Center>
                {/* skills */}
                <Group className="my-16 w-full h-5/6 px-5" gap={0} wrap="nowrap">
                    <Center className="h-auto w-[5%] m-0 opacity-0 animate-right-slideIn [animation-delay:500ms]">
                        <Text className="[writing-mode:vertical-lr] rotate-180 text-4xl text-gray-200">My Skills</Text>
                    </Center>
                    <Skills />
                    {/* placeholder */}
                    <Box className="w-[5%] h-auto" />
                </Group>
                {/* projects */}
                <Group className="my-16 w-full h-5/6 px-5" gap={0} wrap="nowrap">
                    {/* placeholder */}
                    <Box className="w-[5%] h-auto"/>
                    <Projects />
                    {/* header */}
                    <Center className="h-auto w-[5%] animate-left-slidein opacity-0 [animation-timeline:view()] [animation-range-start:10%] [animation-range-end:20%]">
                        <Text className="[writing-mode:vertical-lr] text-4xl text-gray-200">My Projects</Text>
                    </Center>
                </Group>
            </Stack>
            <Footer />
        </>
    )
}