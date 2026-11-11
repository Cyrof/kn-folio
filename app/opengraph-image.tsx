import { ImageResponse } from "next/og";

export const alt =
    "Keith Neo — AI System Engineer moving toward solution architecture";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "65px 80px",
                background: "#443641",
                color: "#f2e6da",
            }}
        >
            <div style={{ display: "flex", fontSize: 45, fontWeight: 700 }}>
                kn<span style={{ color: "#ffc6ae" }}>.</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                    style={{
                        display: "flex",
                        fontSize: 20,
                        letterSpacing: 4,
                        marginBottom: 24,
                    }}
                >
                    KEITH NEO / AI SYSTEM ENGINEER
                </div>
                <div
                    style={{ display: "flex", fontSize: 76, letterSpacing: -4 }}
                >
                    Building a smarter,
                </div>
                <div
                    style={{
                        display: "flex",
                        fontSize: 76,
                        letterSpacing: -4,
                        color: "#ffc6ae",
                    }}
                >
                    safer digital world.
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderTop: "1px solid #735c67",
                    paddingTop: 23,
                    fontSize: 18,
                }}
            >
                <span>AI · DEVSECOPS · SOLUTION ARCHITECTURE</span>
                <span>BASED IN SINGAPORE</span>
            </div>
        </div>,
        size,
    );
}
