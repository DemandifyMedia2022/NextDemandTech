import './LogoSlider.css';



const placeholderLogos: string[] = [
    
    '/Redis.webp',
    '/paycor.webp',
    '/peoplestrong.webp',
    '/salesforce.webp',
    '/hp.webp',
    '/tally.webp',
    '/Sophos.webp',
    '/tata communication.webp',
    '/thoughtspot.webp',
    '/epicor.webp',
    '/RedHat.webp', 
    '/Zoho.webp',
    '/Zoom.webp',
    '/bamboohr.webp',
    '/commvault.webp',
    '/tmp.webp',

           
    
        
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


