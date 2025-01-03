// contact form component 
'use client';

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
        <div className="w-[70%] bg-[#3d3131] rounded-3xl shadow-lg shadow-red-500">
            <div className="w-full pl-10 pt-6">
                {/* <h3 className="text-gray-200 text-4xl font-heading mb-3">Drop Me a Message</h3> */}
                <p className="w-11/12 font-sans text-gray-100 text-xl font-medium">
                    I&apos;m excited to hear from you! Share your thoughts, ideas, or questions, and I&apos;ll get back to you soon.
                </p>
            </div>
            <form 
            onSubmit={handleSubmit}
            className="w-auto h-auto p-5"
            >
                <div className="w-full flex justify-center mb-4 font-heading font-semibold">
                    {successMessage && <p className="text-green-500 text-lg">{successMessage}</p>}
                    {errorMessage && <p className="text-red-500 text-lg">{errorMessage}</p>}
                </div>
    
            <div className="grid grid-cols-3 gap-y-5">
                {/* name input */}
                <label 
                    htmlFor="name"
                    className="text-gray-200 text-lg font-sans font-semibold ml-5"
                >
                    Name<span className="text-red-600">*</span>
                </label>
                <input 
                    id="name" 
                    type="text" 
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="col-span-2 rounded-md border px-2 py-1 focus:outline-none focus:border-blue-700 focus:ring-blue-700 focus:ring-1"
                />

                {/* email input */}
                <label 
                    htmlFor="email"
                    className="text-gray-200 text-lg font-sans font-semibold ml-5"
                >
                    Email<span className="text-red-600">*</span>
                </label>
                <input 
                    id="email"
                    type="email" 
                    name="email"
                    placeholder="Jane@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="col-span-2 rounded-md border px-2 py-1 focus:outline-none focus:border-blue-700 focus:ring-blue-700 focus:ring-1"
                />

                {/* message input */}
                <label 
                    htmlFor="message"
                    className="text-gray-200 text-lg font-sans font-semibold ml-5"
                >
                    Message<span className="text-red-600">*</span>
                </label>
                <textarea 
                    name="message" 
                    id="message"
                    placeholder="Have a project idea or a question? Let me know!"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="col-span-2 rounded-md border px-2 py-1 focus:outline-none focus:border-blue-700 focus:ring-blue-700 focus:ring-1"
                ></textarea>
                <div className="col-span-3 flex justify-end">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="p-2 px-4 bg-red-400 text-base font-semibold rounded-md hover:bg-red-500 transition duration-200"
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
            </div>
                
            </form>
        </div>
    )
}

export default ContactForm;