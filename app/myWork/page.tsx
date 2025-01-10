// my work page 
import NavBar from "../components/navbar"
import Footer from "../components/footer"

export default function myWork(){ 
    return(
        <main>
            <NavBar />
                {/* main section wrapper */}
                <section className="text-gray-200 w-full h-auto flex flex-col">
                    {/* header / banner */}
                    <section className="w-full">
                        <div className="w-full flex justify-center items-center m-10">
                            <h1 className=" text-6xl">What I Do</h1>
                        </div>
                    </section>
                    {/* top 5 skills */}
                    <section>
                        <h1>Skills progress bar here</h1>
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