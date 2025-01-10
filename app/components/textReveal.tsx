// text reveal animation for my work page

const TextReveal = () => {
    const text = "What I Do";

    return (
        <>
            <h1 className="overflow-hidden text-6xl font-heading text-gray-200">
                {text.match(/./gu)!.map((char, index) => (
                    <span
                        key={`${char}-${index}`}
                        className="animate-text-reveal inline-block"
                        style={{ animationDelay: `${index * 0.05}s` }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </h1>
        </>
    )
}

export default TextReveal;