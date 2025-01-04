// Contact page
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import ContactForm from "../components/contactForm";
import ContactTitle from "../components/contactTitle";

export default function Contact() {
    return (
        <main>
            <NavBar />
            {/* main sectino */}
            <section className="w-full h-auto flex flex-row my-16">
                {/* text section left */}
                <section className="w-1/2 h-auto">
                    <div className="w-full flex justify-start mt-14">
                        <h1 
                            className="font-heading text-8xl ml-28 transition-all duration-500 bg-gradient-to-br from-[#1a1414] via-[#3d3131] to-gray-200 bg-size-200 bg-pos-0 hover:bg-pos-100"
                        >Lets Get</h1>
                    </div>
                    <div className="w-full flex justify-end mt-10">
                        <h1 className="font-deading text-8xl text-gray-200 mr-28">In Touch</h1>
                    </div>
                    {/* <ContactTitle 
                        from="#1a1414"
                        via="#3d3131"
                        to="#f3f4f6"
                    /> */}
                </section>
                {/* contact form right */}
                <section className="w-1/2 h-auto flex">
                    <ContactForm />
                </section>
            </section>               
            <Footer />
        </main>
    );
}