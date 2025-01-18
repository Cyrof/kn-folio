// my work page 
import NavBar from "../components/navbar"
import Footer from "../components/footer"
import TextReveal from "../components/textReveal"
import Skills from "../components/skills"
import Projects from "../components/projects"

export default function myWork(){ 
    return(
        <main>
            <NavBar />
                {/* main section wrapper */}
                <section className="text-gray-200 w-full h-auto flex flex-col">
                    {/* header / banner */}
                    <section className="w-full">
                        <div className="w-full h-auto flex justify-center items-center mt-5 ">
                            <TextReveal />
                        </div>
                    </section>
                    {/* top skills */}
                    <section className="my-16 h-5/6">
                        <div className="w-full h-auto flex px-5">
                            {/* header */}
                            <div className="flex justify-center items-center h-auto w-[5%] m-0 opacity-0 animate-right-slideIn [animation-delay:500ms]">
                                <h1 className="[writing-mode:vertical-lr] rotate-180 text-4xl text-gray-200">My Skills</h1>
                            </div>
                            <Skills />
                            {/* placeholder */}
                            <div className="w-[5%] h-auto"></div>
                        </div>
                    </section>
                    <hr className="mx-10 border-[#2b1f1f]"/>
                    {/* projects here */}
                    <section className="my-16 h-4/6">
                        <div className="w-full h-auto flex px-5">
                            {/* placeholder */}
                            <div className="w-[5%]"></div>
                            <Projects />
                            {/* header */}
                            <div className="flex justify-center items-center h-auto w-[5%] animate-left-slidein opacity-0 [animation-timeline:view()] [animation-range-start:20%] [animation-range-end:80%]">
                                <h1 className="[writing-mode:vertical-lr] text-4xl text-gray-200">My Projects</h1>
                            </div>
                        </div>
                    </section>
                </section>
            <Footer />
        </main>
    )
}