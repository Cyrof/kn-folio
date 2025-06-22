// About page
import { Box, Group, Image, Stack, Text } from "@mantine/core";
import DiagonalImage from "../components/diagonal";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { SpanText } from "../components/customComponents/spanText";

export default function About() {
    return (
        <>
            <NavBar />
            <Stack className="my-8" gap="xl">
                {/* first part (introduction) */}
                <Group wrap="nowrap" gap={0} align="flex-start">
                    <Stack className="p-10 text-gray-200 w-2/3 h-full" gap="xl">
                        {/* header */}
                        <Text className="text-5xl font-heading mt-5 animate-staggered-text-down opacity-0 [--slidein-delay:300ms]">A Little About Me</Text>
                        {/* paragraph */}
                        <Stack gap="lg">
                            <Box className="animate-staggered-text-down opacity-0 [--slidein-delay:500ms]">
                                <SpanText>I&apos;m a{' '}</SpanText>
                                <SpanText>dedicated AI and Cybersecurity enthusiast{' '}</SpanText>
                                <SpanText>with a passion for building innovative solutions with tackling complex challenges.</SpanText>
                            </Box>
                            <Box className="animate-staggered-text-down opacity-0 [--slidein-delay:700ms]">
                                <SpanText span>Since{' '}</SpanText>
                                <SpanText className="text-red-400" span>2018{' '}</SpanText>
                                <SpanText span>I&apos;ve been exploring the world of technology through{' '}</SpanText>
                                <SpanText className="text-red-400" span>self-driven projects{' '}</SpanText>
                                <SpanText span>from crafting{' '}</SpanText> 
                                <SpanText className="text-red-400" span>commmand-line tools{' '}</SpanText>
                                <SpanText span>to orchestrating{' '}</SpanText>
                                <SpanText className="text-red-400" span>Kubernetes deployments{' '}</SpanText>
                                <SpanText span>on my{' '}</SpanText>
                                <SpanText className="text-red-400" span>self-built Raspberry Pi cluster</SpanText>
                                <SpanText span>.{' '}My experience also spans{' '}</SpanText>
                                <SpanText className="text-red-400" span>machine learning</SpanText>
                                <SpanText span>,{' '}</SpanText>
                                <SpanText className="text-red-400" span>cybersecurity tools</SpanText>
                                <SpanText span>,{' '}and{' '}</SpanText>
                                <SpanText className="text-red-400" span>server-side development</SpanText>
                                <SpanText span>,{' '}reflecting my versatile approach to tech.</SpanText>
                            </Box>
                            <Box className="animate-staggered-text-down opacity-0 [--slidein-delay:900ms]">
                                <SpanText>In addition to backend expertise, I&apos;ve delved into{' '}</SpanText>
                                <SpanText className="text-red-400">fontend and full-stack development</SpanText>,{' '}
                                <SpanText>building projects like this very{' '}</SpanText>
                                <SpanText className="text-red-400"> digital portfolio</SpanText>
                                <SpanText>,{' '}crafted entirely from scratch using{' '}</SpanText>
                                <SpanText className="text-red-400">Next.js{' '}</SpanText>
                                <SpanText>for scalability and performance.</SpanText>
                            </Box>
                            <Box className="animate-staggered-text-down opacity-0 [--slidein-delay:1100ms]">
                                <SpanText>Having graduated in{' '}</SpanText>
                                <SpanText className="text-red-400">April 2025</SpanText>
                                <SpanText>,{' '}I&apos;m eager to transition into the professional world as an{' '}</SpanText>
                                <SpanText className="text-red-400">AI Engineer</SpanText>
                                <SpanText>,{' '}contributing to advancing{' '}</SpanText>
                                <SpanText className="text-red-400">modern AI systems{' '}</SpanText>
                                <SpanText>and driving impactful change.</SpanText>
                            </Box>
                        </Stack>
                    </Stack>
                    <Box className="text-white w-1/3 p-5 group animate-appear opacity-0">
                        <Box className="relative w-auto h-auto">
                            <Image 
                                src="images/about/about_me.png"
                                alt="about me"
                                className="rounded-3xl"
                            />
                            <Box className="absolute opacity-0 bottom-0 right-0 bg-gray-800 w-3/12 rounded-lg mr-2 text-center bg-opacity-80 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:pointer-events-auto">
                                <Text className="text-sm font-medium text-gray-200">Botanic Garden, Singapore</Text>
                            </Box>
                        </Box>
                    </Box>
                </Group>
                {/* second part (outside of work) */}
                <Group wrap="nowrap" gap={0} align="top">
                    <Box className="text-white w-1/3 flex justify-center items-center animate-right-slideIn opacity-0 [animation-timeline:view()] [animation-range-start:10%] [animation-range-end:70%]">
                        <DiagonalImage />
                    </Box>
                    <Stack className="p-10 text-gray-200 w-2/3" gap="xl">
                        <Text className="text-5xl font-heading animate-staggered-text-down opacity-0 [--slidein-delay:300ms] [animation-timeline:view()] [animation-range-start:10%] [animation-range-end:40%]">When I&apos;m Not Coding...</Text>
                        <Stack gap="lg">
                            <Box className="animate-staggered-text-down opacity-0 [--slidein-delay:500ms] [animation-timeline:view()] [animation-range-start:10%] [animation-range-end:45%]">
                                <SpanText>Beyond the world of code and AI models, I&apos;m someone who finds joy in{' '}</SpanText>
                                <SpanText className="text-red-400">capturing the moments through photography</SpanText>
                                <SpanText>.{' '} Whether it&apos;s exploring new landscapes, documenting life&apos;s fleeting moments, or experimenting with creative compositions, photography serves as my creative outlet.</SpanText>
                            </Box>
                            <Box className="animate-staggered-text-down opacity-0 [--slidein-delay:700ms] [animation-timeline:view()] [animation-range-start:10%] [animation-range-end:50%]">
                                <SpanText>On the more melodic side, I&apos;ve been playing the{' '}</SpanText>
                                <SpanText className="text-red-400">guitar for over 12 years and counting</SpanText>
                                <SpanText>.{' '}Music isn&apos;t just a hobby for me. It&apos;s a way to unwind, express myself, and sometimes even spark fresh ideas for my tech projects.</SpanText>
                            </Box>
                            <Box className="animate-staggered-text-down opacity-0 [--slidein-delay:900ms] [animation-timeline:view()] [animation-range-start:10%] [animation-range-end:55%]">
                                <SpanText>Balancing{' '}</SpanText>
                                <SpanText className="text-red-400">technology, creativity, and music{' '}</SpanText>
                                <SpanText>helps me stay inspired, curious, and ready to tackle new challenges. Whether that&apos;s behind a camera lens, strumming a guitar or writing lines of code.</SpanText>
                            </Box>
                        </Stack>
                    </Stack>
                </Group>
            </Stack>
            <Footer />
        </>
    );
}
