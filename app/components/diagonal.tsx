// diagonal image for about me page 

import { Box, Text } from "@mantine/core"

const DiagonalImage = () => {
    return(
        <Box className="relative w-[95%] h-[90%] overflow-hidden rounded-3xl">
            {/* top left */}
            <Box 
                className="absolute top-0 left-0 w-[95%] h-full bg-cover group"
                style={{
                    backgroundImage: "url('/images/about/Bird.JPG')",
                    backgroundPosition: "0 72%",
                    clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                }}
            >
                {/* hover location */}
                <Box className="absolute opacity-0 bg-gray-800 w-3/12 rounded-lg ml-2 text-center bg-opacity-80 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:translate-y-2 group-hover:pointer-events-auto">
                    <Text className="font-sans text-sm font-medium text-gray-200">Botanic Garden, Singapore</Text>
                </Box>
            </Box>

            {/* bottom right */}
            <Box
                className="absolute bottom-o right-0 w-[95%] h-full bg-cover group"
                style={{
                    backgroundImage: "url('/images/about/Chicken.JPG')",
                    backgroundPosition: "0 68%",
                    clipPath: 'polygon(100% 100%, 0 100%, 100% 0)',
                }}
            >
                <Box className="absolute opacity-0 bottom-0 right-0 bg-gray-800 w-3/12 rounded-lg mr-2 text-center bg-opacity-80 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:pointer-events-auto">
                    <Text className="font-sans text-sm font-medium text-gray-200">Botanic Garden, Singapore</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default DiagonalImage