import Image from "next/image";

export default function ImageGallery() {
    return (
        <div className="photo-gallery">
            <figure>
                <div>
                    <Image
                        src="/images/optimized/photography.webp"
                        alt="Keith with a camera at Coney Island"
                        fill
                        sizes="(max-width: 650px) 90vw, 45vw"
                    />
                </div>
                <figcaption>
                    Coney Island, Singapore <span>01 / PHOTOGRAPHY</span>
                </figcaption>
            </figure>
            <figure>
                <div>
                    <Image
                        src="/images/optimized/guitar.webp"
                        alt="Keith playing guitar at Bellewaters"
                        fill
                        sizes="(max-width: 650px) 90vw, 45vw"
                    />
                </div>
                <figcaption>
                    Bellewaters, Singapore <span>02 / MUSIC</span>
                </figcaption>
            </figure>
        </div>
    );
}
