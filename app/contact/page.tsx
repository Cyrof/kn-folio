// Contact page
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import ContactForm from "../components/contactForm";

export default function Contact() {
    return (
        <main>
            <NavBar />
            {/* main sectino */}
            <section className="w-full h-auto flex flex-row my-10">
                {/* text section left */}
                <section className="w-1/2 h-auto border border-purple-400">
                    <h1 className="text-gray-200">Text here</h1>
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