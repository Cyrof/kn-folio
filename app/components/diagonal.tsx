// diagonal image for about me page 

const DiagonalImage = () => {
    return(
        <div className="relative w-[95%] h-[90%] overflow-hidden rounded-3xl">
            {/* top left image */}
            <div
                className="w-[95%] h-full bg-cover clip-custom absolute top-0 left-0 group"
                style={{
                    backgroundImage: "url('/images/Bird.JPG')",
                    backgroundPosition: "0 72%",
                    '--clip-path': 'polygon(0 0, 100% 0, 0 100%)',
                } as Record<string, string>}
            >
                {/* hover location */}
                <div 
                    className="absolute opacity-0 bg-gray-800 w-3/12 rounded-lg ml-2 text-center bg-opacity-80 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:translate-y-2 group-hover:pointer-even-auto"
                >
                    <span className="font-sans text-sm font-medium text-gray-200">Botanic Garden, Singapore</span>
                </div>
            </div>

            {/* bottom right image */}
            <div
                className="absolute bottom-0 right-0 w-[95%] h-full bg-cover clip-custom group"
                style={{
                    backgroundImage: "url('/images/Chicken.JPG')",
                    backgroundPosition: "0 68%",
                    '--clip-path': 'polygon(100% 100%, 0 100%, 100% 0)',
                } as Record<string,string>}
            >
                {/* hover location */}
                <div
                    className="absolute opacity-0 bottom-0 right-0 bg-gray-800 w-3/12 rounded-lg mr-2 text-center bg-opacity-80 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:pointer-events-auto"
                >
                    <span className="font-sans text-sm font-medium text-gray-200">Botanic Garden, Singapore</span>
                </div>
            </div>
        </div>
    )
}

export default DiagonalImage