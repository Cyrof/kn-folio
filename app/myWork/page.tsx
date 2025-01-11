// my work page 
import NavBar from "../components/navbar"
import Footer from "../components/footer"
import TextReveal from "../components/textReveal"
import Skills from "../components/skills"

export default function myWork(){ 
    return(
        <main>
            <NavBar />
                {/* main section wrapper */}
                <section className="text-gray-200 w-full h-auto flex flex-col">
                    {/* header / banner */}
                    <section className="w-full">
                        <div className="w-full h-auto flex justify-center items-center mt-5 mb-16">
                            <TextReveal />
                        </div>
                    </section>
                    {/* top 5 skills */}
                    <section>
                        <Skills />
                    </section>
                    {/* projects here */}
                    <section>
                        <h1>Projects here</h1>
                    </section>
                </section>
            <Footer />
        </main>
    )
}