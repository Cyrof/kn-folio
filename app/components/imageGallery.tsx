import { Box, Text } from "@mantine/core";

const ImageGallery = () => {
    return (
        <Box className="relative w-[95%] h-[90%] overflow-hidden rounded-3xl mx-auto">
            <Box className="flex items-center gap-2 h-[400px] w-full">
                {/* Left image - expands on hover */}
                <Box className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full overflow-hidden rounded-lg">
                    <img
                        className="h-full w-full object-cover object-center"
                        src="/images/about/Bird.JPG"
                        alt="Bird at Botanic Garden"
                    />
                    {/* Optional hover text */}
                    <Box className="absolute bottom-4 left-4 z-10">
                        <Text className="font-sans text-sm font-medium text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800/80 backdrop-blur-sm rounded-lg py-2 px-4">
                            Botanic Garden, Singapore
                        </Text>
                    </Box>
                </Box>

                {/* Right image - expands on hover */}
                <Box className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full overflow-hidden rounded-lg">
                    <img
                        className="h-full w-full object-cover object-center"
                        src="/images/about/Chicken.JPG"
                        alt="Chicken at Botanic Garden"
                    />
                    {/* Optional hover text */}
                    <Box className="absolute bottom-4 right-4 z-10">
                        <Text className="font-sans text-sm font-medium text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800/80 backdrop-blur-sm rounded-lg py-2 px-4">
                            Botanic Garden, Singapore
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ImageGallery;
