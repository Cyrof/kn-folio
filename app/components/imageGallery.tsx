import Image from "next/image";

export default function ImageGallery() {
    return (
        <div className="photo-gallery">
            <figure className="photography-photo">
                <div>
                    <Image
                        src="/images/optimized/photography-hong-kong.webp"
                        alt="Keith holding a camera on a street in Hong Kong"
                        fill
                        sizes="(max-width: 650px) 90vw, 45vw"
                    />
                </div>
                <figcaption>
                    Hong Kong <span>01 / PHOTOGRAPHY</span>
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
