// About page
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import DiagonalImage from "../components/diagonal";

export default function About() {
    return (
        <main>
            <NavBar />                
            {/* main section */}
            <section className="main flex flex-col gap-10 my-8">
                {/* first part (introduction) */}
                <section className="intro flex">
                    <div className="p-10 text-gray-200 w-2/3">
                        {/* <h1>Text here</h1> */}
                        {/* <span className="text-5xl">A Little About Me</span> */}
                        <h1 className="text-5xl font-heading mt-5">A Little About Me</h1>
                        <br /> <br />
                        <p className="font-sans text-lg">
                            I&apos;m a 
                            <span className="text-red-400"> dedicated AI and Cybersecurity enthusiast </span>
                            with a passion for building innovative solutions with tackling complex challenges.
                            <br /> <br />
                            Since
                            <span className="text-red-400"> 2018</span>, 
                            I&apos;ve been exploring the world of technology through 
                            <span className="text-red-400"> self-driven projects </span>
                            from crafting <span className="text-red-400"> command-line tools</span> to orchestrating 
                            <span className="text-red-400"> Kubernetes deployments </span> on my 
                            <span className="text-red-400"> self-built Raspberry Pi cluster</span>. My experience also 
                            spans <span className="text-red-400"> machine learning</span>, <span className="text-red-400">cybersecurity tools</span>,
                            and <span className="text-red-400">server-side development</span>, reflecting my versatile approach to tech.
                            <br /> <br />
                            In addition to backend expertise, I&apos;ve delved into <span className="text-red-400">frontend and full-stack development</span>,
                             building projects like this very <span className="text-red-400">digital portfolio</span>, crafted entirely from 
                            scratch using <span className="text-red-400">Next.js</span> for scalability and performance. 
                            <br /> <br />
                            With graduation on the horizon in <span className="text-red-400">April 2025</span>, I&apos;m eager to transition 
                            into the professional world as an <span className="text-red-400">Ai Engineer</span>, contributing to advancing
                            <span className="text-red-400"> modern AI systems</span> and driving impactful change.
                        </p>
                    </div>                    
                    <div className="text-white w-1/3 p-5 group animate-appear opacity-0">
                        <div 
                            className="relative w-auto h-auto"
                        >
                            <img 
                                src="images/about_me.png" 
                                alt="about me" 
                                className="rounded-3xl"
                            />
                            <div
                                className="absolute opacity-0 bottom-0 right-0 bg-gray-800 w-3/12 rounded-lg mr-2 text-center bg-opacity-80 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:pointer-events-auto"
                            >
                                <span className="font-sans text-sm font-medium text-gray-200">Botanic Garden, Singapore</span>
                            </div>
                        </div>
                    </div>
                </section>
                {/* second part (outside of work) */}
                <section className="outside flex">
                    {/* double diagonal images */}
                    <div className="text-white w-1/3 flex justify-center items-center">
                        <DiagonalImage />
                    </div>
                    <div className="p-10 text-gray-200 w-2/3">
                        <h1 className="text-5xl font-heading">When I&apos;m Not Coding...</h1>
                        <br /><br />
                        <p className="font-sans text-lg">
                            Beyong the world of code and AI models, I&apos;m someone who finds joy in 
                            <span className="text-red-400"> capturing moments through photography</span>. Whether it&apos;s exploring new landscapes, 
                            documenting life&apos;s fleeting moments, or experimenting with creative compositions, photography serves
                            as my creative outlet.
                            <br /><br />
                            On the more melodic side, I&apos;s been playing the 
                            <span className="text-red-400"> guitar for over 12 years and counting</span>. Music isn&apos;t just a hobby for my. 
                            I&apos;s a way to unwind, express myself, and sometimes even spark fresh ideas for my tech projects. 
                            <br /><br />
                            Balancing <span className="text-red-400">technology, creativity, and music</span> helps me stay inspired, curious, and ready
                            to tackle new challenges. Whether that&apos;s behind a camera lengs, strumming a guitar, or writing lines 
                            of code.
                        </p>
                    </div>
                </section>
            </section>
            <Footer />
        </main>
    );
}