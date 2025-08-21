import { Metadata } from 'next'
import {
  Ribbon1,
  Ribbon2,
  LogoSlider,
  Card1,
  SlideTabsExample,
  Button,
  DotGrid,
  ProgressiveBlurBentoGrid
} from '../../components';
import './Homepage.css';
import Card2 from '../../components/ui/Card2';
import Button2 from '../../components/ui/Button2';
import { AnimatedTestimonials } from '../../components/ui/animated-testimonials';
import { GSAPTextReveal } from '../../components/ui/GSAPTextReveal';
import { HeroTitle } from '../../components/ui/HeroTitle';
import { ScrollAnimations } from '../../components/ui/ScrollAnimations';
import { AnimatedParagraph } from '../../components/ui/AnimatedParagraph';
import SimpleGlobe from "@/components/ui/globe";
import MultiStepContactForm from "@/components/ui/MultiStepContactForm";
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'DemandTech | Accelerate Your Business Growth',
  description: 'Transform your demand generation with cutting-edge technology and proven strategies. Drive qualified leads, increase conversions, and scale your business.',
}

export default function HomePage() {
  const globeConfig = {
    continentColor: "#005be5ff",
    seaColor: "#FFFFFF", // bright white
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    autoRotate: true,
    autoRotateSpeed: 0.8,
  };
  const testimonials = [
    {
      quote: "DemandTech transformed our lead generation process completely. We saw a 300% increase in qualified leads within the first quarter. Their AI-driven approach is simply revolutionary.",
      name: "Sarah Johnson",
      designation: "VP of Marketing, Redis",
      src: "/testimonial1.png"
    },
    {
      quote: "The intelligence and insights provided by DemandTech helped us identify our highest-value prospects with incredible precision. Our sales team is now more efficient than ever.",
      name: "Michael Chen",
      designation: "Sales Director, Autodesk",
      src: "/testimonial2.jpg"
    },
    {
      quote: "Working with DemandTech has been a game-changer for our business. Their cutting-edge technology combined with expert insights accelerated our path to revenue like never before.",
      name: "Emily Rodriguez",
      designation: "CEO, MongoDB",
      src: "/testimonial3.png"
    }
  ];

  return (
    <>
      <ScrollAnimations />
      <div style={{ position: 'absolute', width: '100%', zIndex: -1 }}>
        <Ribbon1 />
        {/* <Ribbon2 /> */}
      </div>
      {/* Navigation rendered globally in layout */}

      {/* Hero Section */}
      <section className="hero" style={{ marginBottom: '80px' }}>
        {/* <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: -2 }}>
          <DotGrid />
        </div> */}

        <div className="headline" style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '50px', fontFamily: 'Clash Display' }}>
          <HeroTitle />
        </div>
        <section className='cardAndDesc' style={{ display: 'flex', marginTop: '40px', marginLeft: '50px' }}>
          <div className="card-col">
            <Card1 />
          </div>

          <div className="desc-col" style={{ marginRight: '70px' }}>
            <AnimatedParagraph
              className="lead"
              stagger={0.03}
              duration={0.5}
              start="top 80%"
            >
              We combine cutting-edge tech with expert insight to pinpoint your highest-value prospects—accelerating your path to revenue fast. We combine cutting-edge tech with expert insight to pinpoint your highest-value prospects—accelerating your path to revenue fast.
            </AnimatedParagraph>
            <div className="actions" style={{ marginRight: '50px' }}>
              <Button />
            </div>
          </div>
        </section>
      </section>

      {/* Logo Slider */}
      <div className="logo-slider-container" style={{ marginBottom: '80px' }}>
        <LogoSlider />
      </div>

      {/* Features Section */}
      <div className='features-section' style={{ marginBottom: '80px' }}>
        <div className='features-title' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '50px' }}>
          <GSAPTextReveal
            style={{ alignItems: 'center', alignContent: 'center', fontFamily: 'Clash Display', fontSize: '92px', textAlign: 'center', color: '#000cf8' }}
            stagger={0.15}
            duration={1.0}
            yOffset={80}
            start="top 75%"
          >
            Features
          </GSAPTextReveal>
        </div>
        <div className='servicescards' style={{ display: 'flex', alignContent: 'center', alignItems: 'flex-start', justifyContent: 'center', columnGap: '55px', padding: '0 20px', marginTop: '50px' }}>
          <div className='service-item' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <Card2 imageSrc="/image2.jpeg" alt="Service 1" />
            <Button2 text="Intent-Verified Lead" />
          </div>
          <div className='service-item' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <Card2 imageSrc="/image3.jpeg" alt="Service 2" />
            <Button2 text="Brand Awareness" />
          </div>
          <div className='service-item' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <Card2 imageSrc="/image1.jpeg" alt="Service 3" />
            <Button2 text="Sales Intent Profile" />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className='testimonials-section' style={{ marginTop: '180px' }}>
        <div className='testimonials-title' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '50px' }}>
          <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'Clash Display', fontSize: '75px', textAlign: 'center' }}>
            <GSAPTextReveal
              style={{ alignItems: 'center', alignContent: 'center', fontFamily: 'Clash Display', fontSize: '85px', textAlign: 'center', color: '#000cf8' }}
              stagger={0.12}
              duration={0.9}
              yOffset={70}
              start="top 80%"
            >
              Success
            </GSAPTextReveal>
            <span style={{ color: '#000000', marginLeft: '10px' }}>
              <GSAPTextReveal
                style={{ alignItems: 'center', alignContent: 'center', fontFamily: 'Clash Display', fontSize: '75px', textAlign: 'center', color: '#000000' }}
                stagger={0.12}
                duration={0.9}
                yOffset={70}
                start="top 80%"
              >
                Through Their Lens
              </GSAPTextReveal>
            </span>
          </div>
        </div>
        <div className="testimonials-container">
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </div >

      {/* Globe Section */}
      <div className='globe-title' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '150px', marginLeft: '500px' }}>
          <GSAPTextReveal
            style={{ alignItems: 'center', alignContent: 'center', fontFamily: 'Clash Display', fontSize: '92px', textAlign: 'center', color: '#000000' }}
            stagger={0.15}
            duration={1.0}
            yOffset={80}
            start="top 75%"
          >
            Global Reach
          </GSAPTextReveal>
        </div>
        <div className='globe-title2' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '-40px', marginLeft: '500px' }}>
          <GSAPTextReveal
            style={{ alignItems: 'center', alignContent: 'center', fontFamily: 'Clash Display', fontSize: '92px', textAlign: 'center', color: '#000cf7' }}
            stagger={0.15}
            duration={1.0}
            yOffset={80}
            start="top 75%"
          >
            Local Impact
          </GSAPTextReveal>
        </div>
      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', margin: '-250px -500px' }}>
        <div style={{ width: '1200px', height: '1200px' }}>
          <SimpleGlobe globeConfig={globeConfig} />
        </div>
      </div>

      {/*Services Grid*/}
      <div>
        <div className='services-grid-title' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '180px', marginBottom: '0px' }}>
          <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'Clash Display', fontSize: '92px', textAlign: 'center' }}>
            <GSAPTextReveal
              style={{ alignItems: 'center', alignContent: 'center', fontFamily: 'Clash Display', fontSize: '92px', textAlign: 'center', color: '#000cf8' }}
              stagger={0.15}
              duration={1.0}
              yOffset={80}
              start="top 75%"
            >
              Services
            </GSAPTextReveal>
            <span style={{ color: '#000000', marginLeft: '10px' }}>
              <GSAPTextReveal
                style={{ alignItems: 'center', alignContent: 'center', fontFamily: 'Clash Display', fontSize: '92px', textAlign: 'center', color: '#000000' }}
                stagger={0.15}
                duration={1.0}
                yOffset={80}
                start="top 75%"
              >
                We Offer
              </GSAPTextReveal>
            </span>
          </div>
        </div>
        
        <div className="bento-grid-container" style={{ padding: '100px', marginTop: '-50px' }}>
          <ProgressiveBlurBentoGrid />
        </div>

        {/*Contact Section */}

        <div className='globe-title' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px', marginLeft: '0px' }}>
          <GSAPTextReveal
            style={{ alignItems: 'center', alignContent: 'center', fontFamily: 'Clash Display', fontSize: '92px', textAlign: 'center', color: '#000000' }}
            stagger={0.15}
            duration={1.0}
            yOffset={80}
            start="top 75%"
          >
            Contact Us
          </GSAPTextReveal>
        </div>
        <div className="bg-[#F0F1FA] min-h-screen px-0 py-2">
      <MultiStepContactForm />
    </div>

        

        {/* Ensure scrollable space after content */}
        <div style={{ height: '100%',width: '100%' }} />
      </div>
         
    </>
    
  );
}


