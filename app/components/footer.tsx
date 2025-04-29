// Main footer 

import { Anchor, Box, Center, Group, Stack, Text } from "@mantine/core";

const Footer = () => {
    return (
        <>
            <hr className="mx-10 border-[#2b1f1f]" />
            <Stack className="text-gray-200 w-full my-8" align="center">
                <Box className="w-4/12 text-center">
                    <Text className="text-2xl font-semibold">Keith - Cyber Forensis & AI Specialist</Text>
                </Box>
                <Box className="w-4/12 text-center p-5 text-md">
                    <Text>Discover my journey in AI and Cybersecurity through this portfolio. Building smarter, safer and more reliable digital systems is my mission.</Text>
                </Box>
                <Group className="mb-5" gap="md">
                    {/* github */}
                    <Anchor target="_blank" href="https://github.com/Cyrof" className="group h-14 w-auto rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-auto fill-red-500 group-hover:fill-red-400 transition-colors duration-500 rounded-full" viewBox="0 0 97.707 97.707">
                            <path 
                                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" 
                            />
                        </svg>
                    </Anchor>
                    {/* linkedin */}
                    <Anchor target="_blank" href="https://www.linkedin.com/in/keithnks" className="group h-14 w-auto rounded-full">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="bi bi-linkedin h-14 w-auto fill-red-500 group-hover:fill-red-400 transition-colors duration-500 rounded-full" 
                            viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                        </svg>
                    </Anchor>
                    {/* stackoverflow */}
                    <Center className="group h-14 w-14 bg-red-500 rounded-full hover:bg-red-400 transition-colors duration-500">
                        <Anchor target="_blank" href="https://stackoverflow.com/users/22228481/cyrof" className="h-10 w-auto my-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto" viewBox="0 0 32 32">
                                <path d="M28.16 32H2.475V20.58H5.32v8.575h19.956V20.58h2.884z"/>
                                <path d="M8.477 19.8l13.993 2.923.585-2.806-13.993-2.923zm1.832-6.704l12.94 6.04 1.208-2.572-12.94-6.08zm3.586-6.353l10.99 9.12 1.832-2.183-10.99-9.12zM20.99 0l-2.3 1.715 8.536 11.46 2.3-1.715zM8.166 26.27H22.43v-2.845H8.166v2.845z"/>
                            </svg>
                        </Anchor>
                    </Center>
                    {/* gmail icon */}
                    <Center className="group h-14 w-14 bg-red-500 rounded-full hover:bg-red-400 transition-colors duration-500">
                        <Anchor href="mailto:keithneo00@gmail.com" className="h-10 w-auto my-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto" viewBox="0 0 640 512">
                                <path d="M386.1 228.5c1.8 9.7 3.1 19.4 3.1 32C389.2 370.2 315.6 448 204.8 448c-106.1 0-192-85.9-192-192s85.9-192 192-192c51.9 0 95.1 18.9 128.6 50.3l-52.1 50c-14.1-13.6-39-29.6-76.5-29.6-65.5 0-118.9 54.2-118.9 121.3 0 67.1 53.4 121.3 118.9 121.3 76 0 104.5-54.7 109-82.8H204.8v-66h181.3zm185.4 6.4V179.2h-56v55.7h-55.7v56h55.7v55.7h56v-55.7H627.2v-56h-55.7z"/>
                            </svg>
                        </Anchor>
                    </Center>
                </Group>
            </Stack>
        </>
    );
}

export default Footer
