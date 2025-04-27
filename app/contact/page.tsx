// Contact page
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import ContactForm from "../components/contactForm";
import { Group, Stack, Text } from "@mantine/core";

export default function Contact() {
    return (
        <>
            <NavBar />
            <Group className="w-full h-auto my-16" wrap="nowrap" gap={0}>
                {/* left text section */}
                <Stack className="w-1/2 h-auto">
                    <Text className="font-heading text-8xl text-gray-200 ml-40 opacity-0 animate-staggered-text-down [--slidein-delay:200ms]">Lets Get</Text>
                    <Text className="font-heading text-8xl text-gray-200 text-right mr-40 opacity-0 animate-staggered-text-down [--slidein-delay:400ms]">In Touch</Text>
                </Stack>
                {/* contact form right */}
                <Group className="w-1/2 h-auto">
                    <ContactForm />
                </Group>
            </Group>
            <Footer />
        </>
    );
}