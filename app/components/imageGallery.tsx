import { Box, Text, Image } from "@mantine/core";

const ImageGallery = () => {
    return (
        <Box className="relative w-[95%] h-full overflow-hidden rounded-3xl mx-auto">
            <Box className="flex items-center gap-2 h-[400px] w-full">
                {/* Left image - expands on hover */}
                <Box className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full overflow-hidden rounded-lg">
                    <Image
                        src="/images/about/cam-me.JPG"
                        alt="Me at Coney Island"
                        className="h-full w-full object-cover object-center"
                        fit="cover"
                    />
                    {/* hover text */}
                    <Box className="absolute opacity-0 bottom-0 left-0 p-2 bg-gray-800/80 rounded-lg ml-2 text-center bg-opacity-80 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:pointer-events-auto">
                        <Text className="text-sm font-medium">
                            Coney Island, Singapore
                        </Text>
                    </Box>
                </Box>

                {/* Right image - expands on hover */}
                <Box className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full overflow-hidden rounded-lg">
                    <Image
                        src="/images/about/guitar-me.JPG"
                        alt="Guitar me"
                        className="h-full w-full object-cover object-center"
                        fit="cover"
                    />
                    {/* hover text */}
                    <Box className="absolute opacity-0 bottom-0 right-0 p-2 bg-gray-800/80 rounded-lg mr-2 text-center bg-opacity-80 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:pointer-events-auto">
                        <Text className="text-sm font-medium">
                            Bellewaters, Singapore
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ImageGallery;
