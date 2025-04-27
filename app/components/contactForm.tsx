// contact form component 
'use client';

import { Box, Button, Center, Group, Stack, Text, TextInput, Textarea } from "@mantine/core";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const initialFormData: FormData = {
    name: '',
    email: '',
    message: '',
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target; 
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccessMessage(null);
        setErrorMessage(null);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setSuccessMessage('Message sent successfully!');
                setFormData(initialFormData);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error(error);
            setErrorMessage('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Stack className="w-[70%] bg-[#3d3131] rounded-3xl shadow-lg shadow-red-500 animate-appear opacity-0">
            <Box className="w-full pl-10 pt-6">
                <Text className="w-11/12 font-sans text-gray-100 text-xl font-medium">I&apos;m excited to hear from you! Share your thoughts, ideas, or questions, and I&apos;ll get bck to you soon.</Text>
            </Box>
            <form
                onSubmit={handleSubmit}
                className="w-auto h-auto p-5"
            >
                <Center className="w-full mb-4 font-heading font-semibold">
                    {successMessage && <Text className="text-green-500 text-lg">{successMessage}</Text>}
                    {errorMessage && <Text className="text-red-500 text-lg">{errorMessage}</Text>}
                </Center>

                <Stack>
                    {/* name input */}
                    <Group className="w-full" wrap="nowrap" gap={0}>
                        <Group gap={1} className="w-1/3" align="center">
                            <Text span className="text-gray-200 text-lg font-sans font-semibold ml-5">Name</Text>
                            <Text span className="text-red-600">*</Text>
                        </Group>
                        <TextInput 
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => handleChange(e)}
                            required
                            className="w-2/3 px-2 py-1 focus:outline-none"
                        />
                    </Group>

                    {/* email input */}
                    <Group className="w-full" wrap="nowrap" gap={0}>
                        <Group gap={1} className="w-1/3" align="center">
                            <Text span className="text-gray-200 text-lg font-sans font-semibold ml-5">Email</Text>
                            <Text span className="text-red-600">*</Text>
                        </Group>
                        <TextInput 
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Jane@example.com"
                            value={formData.email}
                            onChange={(e) => handleChange(e)}
                            required
                            className="w-2/3 px-2 py-1 focus:outline-none"
                        />
                    </Group>

                    {/* message input */}
                    <Group className="w-full" wrap="nowrap" gap={0} align="flex-start">
                        <Group gap={1} className="w-1/3" align="center">
                            <Text span className="text-gray-200 text-lg font-sans font-semibold ml-5">Message</Text>
                            <Text span className="text-red-600">*</Text>
                        </Group>
                        <Textarea 
                            id="message"
                            name="message"
                            placeholder="Have a project idea or a question? Let me know!"
                            value={formData.message}
                            onChange={(e) => handleChange(e)}
                            required
                            rows={5}
                            className="w-2/3 px-2 py-1 focus:outline-none"
                        />
                    </Group>

                    {/* submit button */}
                    <Group className="w-full px-2" justify="flex-end">
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="py-2 px-4 bg-red-400 text-base font-semibold rounded-md hover:bg-red-500 transition duration-200"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                    </Group>
                </Stack>
            </form>
        </Stack>
    )
}

export default ContactForm;