import { CardBody, CardContainer, CardItem } from './3d-card';

interface Card2Props {
    imageSrc?: string;
    alt?: string;
}

function Card2({ imageSrc = "/image1.jpeg", alt = "Card image" }: Card2Props) {
    return (
        <CardContainer className="inter-var w-full">
            <CardBody
                className="relative group/card w-full max-w-[440px] sm:max-w-[520px] md:max-w-[640px] lg:max-w-[720px]"
            >
                <CardItem translateZ={60} className="w-full">
                    {/* Aspect ratio wrapper to keep image responsive */}
                    <div className="relative w-full aspect-[16/9]">
                        <img
                            src={imageSrc}
                            height={800}
                            width={1280}
                            className="absolute inset-0 h-full w-full object-cover rounded-[28px] group-hover/card:shadow-xl"
                            alt={alt}
                        />
                    </div>
                </CardItem>
            </CardBody>
        </CardContainer>
    );
}

export default Card2;
