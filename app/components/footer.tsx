// Main footer 

import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <section className="main text-gray-200 w-full flex flex-col items-center">
                <div className="w-4/12 text-center">
                    <h3>Keith - Cyber Forensics & AI Specialist</h3>
                </div>
                <div className="w-4/12 text-center font-sans">
                    <p>
                        Discorver my journey in AI and Cybersecurity through this portfolio. Building smarter, safer and more reliable digital systems is my misson.
                    </p>
                </div>
                <div className="icons">
                    <span>icon here</span>
                </div>
                <div className="w-4/12 text-center">
                    <span className="font-semibold">&copy; 2024 Keith. All rights reserved.</span>
                </div>
            </section>
        </footer>
    );
}

export default Footer