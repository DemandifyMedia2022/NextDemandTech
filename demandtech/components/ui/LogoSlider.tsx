import './LogoSlider.css';



const placeholderLogos: string[] = [
    '/Redis.png',
    '/paycor.png',
    '/peoplestrong.png',
    '/hp.png',
    '/tally.png',
    '/sd.png',
    '/Sophos.png',
    '/tatacommunication.png',
    '/thoughtspot.png',
    '/epicor.png',
    '/RedHat.png', 
    '/Zoho.png',
    '/Zoom.png',
    '/bamboohr.png',
    '/commvault.png',
    '/tmp.png',
    '/salesforce.png',
        
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


