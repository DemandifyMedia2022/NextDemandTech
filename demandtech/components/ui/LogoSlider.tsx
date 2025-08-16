import './LogoSlider.css';

const placeholderLogos: string[] = [
    'https://logo.clearbit.com/google.com?size=256',
    'https://logo.clearbit.com/apple.com?size=256',
    'https://logo.clearbit.com/microsoft.com?size=256',
    'https://logo.clearbit.com/amazon.com?size=256',
    'https://logo.clearbit.com/netflix.com?size=256',
    'https://logo.clearbit.com/spotify.com?size=256',
    'https://logo.clearbit.com/airbnb.com?size=256',
    'https://logo.clearbit.com/uber.com?size=256',
    'https://logo.clearbit.com/nike.com?size=256',
    'https://logo.clearbit.com/adidas.com?size=256',
    'https://logo.clearbit.com/coca-cola.com?size=256',
    'https://logo.clearbit.com/salesforce.com?size=256',
];

function LogoSlider() {
    return (
        <div className="logo-slider">
            <div className="logo-slider-track" aria-hidden="false">
                {placeholderLogos.map((src, idx) => (
                    <img key={`logo-a-${idx}`} src={src} alt="logo" />
                ))}
                {/* Duplicate for seamless loop */}
                {placeholderLogos.map((src, idx) => (
                    <img key={`logo-b-${idx}`} src={src} alt="logo" />
                ))}
            </div>
        </div>
    );
}

export default LogoSlider;


