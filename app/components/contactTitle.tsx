// title for contact page
'use client'

import React, { useEffect } from "react"

interface GradientProps {
    from?: string;
    via?: string;
    to?: string;
}

const ContactTitle = ({ from, via, to }: GradientProps) => {
    useEffect(() => {
        const root = document.documentElement;
        if (from) root.style.setProperty('--from-color', from);
        if (via) root.style.setProperty('--via-color', via);
        if (to) root.style.setProperty('--to-color', to);

        const headings = document.querySelectorAll('.gradient-text-animate');
        headings.forEach((heading, index) => {
            (heading as HTMLElement).style.animationDelay = `${index * 0.3}`;
        });
    }, [from, via, to]);

    return(
        <div className="w-full">
            <div className="w-full flex justify-start mt-14 overflow-hidden">
                <h1 
                    className="font-heading text-8xl ml-28 bg-gradient-to-br from-[#1a1414] via-[#3d3131] to-gray-200 bg-clip-text text-transparent"
                >Lets Get</h1>
            </div>
            <div className="w-full flex justify-end mt-10 overflow-hidden">
                <h1 
                className="font-deading text-8xl mr-28 gradient-text gradient-text-animate"
                style={{
                    '--from-color': from,
                    '--via-color': via,
                    '--to-color': to,
                } as React.CSSProperties}
                >In Touch</h1>
            </div>
        </div>
    )
}

export default ContactTitle