// Contact page
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import ContactForm from "../components/contactForm";

export default function Contact() {
    return (
        <main>
            <NavBar />
            {/* main sectino */}
            <section className="w-full h-auto flex flex-row my-16">
                {/* text section left */}
                <section className="w-1/2 h-auto">
                    <div className="w-full flex justify-start mt-14 opacity-0 animate-staggered-text-down [--slidein-delay:200ms]">
                        <h1 className="font-heading text-8xl text-gray-200 ml-28">Lets Get</h1>
                    </div>
                    <div className="w-full flex justify-end mt-10 opacity-0 animate-staggered-text-down [--slidein-delay:400ms]">
                        <h1 className="font-heading text-8xl text-gray-200 mr-28">In Touch</h1>
                    </div>
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