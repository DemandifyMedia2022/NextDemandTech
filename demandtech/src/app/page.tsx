import { Metadata } from 'next'
import {
  Ribbon1,
  LogoSlider,
  Card1,
  Button, 
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
import { ProgressiveBlurBentoGrid, ProgressiveBlurBentoGridV2 } from '@/components/ui/progressive-blur-bento-grid';

export const metadata: Metadata = {
  title: 'DemandTech | Accelerate Your Business Growth',
  description: 'Transform your demand generation with cutting-edge technology and proven strategies. Drive qualified leads, increase conversions, and scale your business.',
}

export default function HomePage() {
  const globeConfig = {
    continentColor: "#005be5ff",
    seaColor: "#FFFFFF",
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
      </div>

      {/* Hero Section */}
      <section className="hero section-spacing">
        <div className="headline" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginTop: '30px', 
          marginBottom: '50px', 
          fontFamily: 'Clash Display',
          textAlign: 'center',
          padding: '0 1rem'
        }}>
          <HeroTitle />
        </div>

        <section className='cardAndDesc'>
          <div className="card-col">
            <Card1 />
          </div>

          <div className="desc-col">
            <AnimatedParagraph
              className="lead"
              stagger={0.03}
              duration={0.5}
              start="top 80%"
            >
              We combine cutting-edge tech with expert insight to pinpoint your highest-value prospects—accelerating your path to revenue fast. We combine cutting-edge tech with expert insight to pinpoint your highest-value prospects—accelerating your path to revenue fast.
            </AnimatedParagraph>
            <div className="actions">
              <Button />
            </div>
          </div>
        </section>
      </section>

      {/* Logo Slider */}
      <div className="logo-slider-container section-spacing" style={{ padding: '0 0' }}>
        <LogoSlider />
      </div>

      {/* Features Section */}
      <div className='features-section section-spacing'>
        <div className='features-title'>
          <GSAPTextReveal
            style={{ 
              alignItems: 'center', 
              alignContent: 'center', 
              fontFamily: 'Clash Display', 
              fontSize: 'clamp(48px, 8vw, 92px)', 
              textAlign: 'center', 
              color: '#000cf8' 
            }}
            stagger={0.15}
            duration={1.0}
            yOffset={80}
            start="top 75%"
          >
            Features
          </GSAPTextReveal>
        </div>
        <div className='servicescards'>
          <div className='service-item'>
            <Card2 imageSrc="/image2.jpeg" alt="Service 1" />
            <Button2 text="Intent-Verified Lead" />
          </div>
          <div className='service-item'>
            <Card2 imageSrc="/image3.jpeg" alt="Service 2" />
            <Button2 text="Brand Awareness" />
          </div>
          <div className='service-item'>
            <Card2 imageSrc="/image1.jpeg" alt="Service 3" />
            <Button2 text="Sales Intent Profile" />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className='testimonials-section section-spacing'>
        <div className='testimonials-title'>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            fontFamily: 'Clash Display', 
            textAlign: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px'
          }}>
            <GSAPTextReveal
              style={{ 
                alignItems: 'center', 
                alignContent: 'center', 
                fontFamily: 'Clash Display', 
                fontSize: 'clamp(40px, 7vw, 85px)', 
                textAlign: 'center', 
                color: '#000cf8' 
              }}
              stagger={0.12}
              duration={0.9}
              yOffset={70}
              start="top 80%"
            >
              Success
            </GSAPTextReveal>
            <span style={{ color: '#000000' }}>
              <GSAPTextReveal
                style={{ 
                  alignItems: 'center', 
                  alignContent: 'center', 
                  fontFamily: 'Clash Display', 
                  fontSize: 'clamp(36px, 6vw, 75px)', 
                  textAlign: 'center', 
                  color: '#000000' 
                }}
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
      </div>

      {/* Globe Section */}
      <div className='globe-section section-spacing'>
        <div className='globe-titles'>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: '10px',
            textAlign: 'center'
          }}>
            <GSAPTextReveal
              style={{ 
                alignItems: 'center', 
                alignContent: 'center', 
                fontFamily: 'Clash Display', 
                fontSize: 'clamp(48px, 8vw, 92px)', 
                textAlign: 'center', 
                color: '#000000' 
              }}
              stagger={0.15}
              duration={1.0}
              yOffset={80}
              start="top 75%"
            >
              Global Reach
            </GSAPTextReveal>
          </div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            textAlign: 'center'
          }}>
            <GSAPTextReveal
              style={{ 
                alignItems: 'center', 
                alignContent: 'center', 
                fontFamily: 'Clash Display', 
                fontSize: 'clamp(48px, 8vw, 92px)', 
                textAlign: 'center', 
                color: '#000cf7' 
              }}
              stagger={0.15}
              duration={1.0}
              yOffset={80}
              start="top 75%"
            >
              Local Impact
            </GSAPTextReveal>
          </div>
        </div>

        <div className='globe-content' >
          <div className="globe-wrapper"style={{ zIndex: -5 , marginTop: '-100px', marginLeft: '-250px'}}>
            <SimpleGlobe globeConfig={globeConfig} />
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className='services-grid-section section-spacing'>
        <div className='services-grid-title'>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            fontFamily: 'Clash Display', 
            textAlign: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px'
          }}>
            <GSAPTextReveal
              style={{ 
                alignItems: 'center', 
                alignContent: 'center', 
                fontFamily: 'Clash Display', 
                fontSize: 'clamp(48px, 8vw, 92px)', 
                textAlign: 'center', 
                color: '#000cf8' 
              }}
              stagger={0.15}
              duration={1.0}
              yOffset={80}
              start="top 75%"
            >
              Services
            </GSAPTextReveal>
            <span style={{ color: '#000000' }}>
              <GSAPTextReveal
                style={{ 
                  alignItems: 'center', 
                  alignContent: 'center', 
                  fontFamily: 'Clash Display', 
                  fontSize: 'clamp(48px, 8vw, 92px)', 
                  textAlign: 'center', 
                  color: '#000000' 
                }}
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
        
        <div className="bento-grid-container">
          <ProgressiveBlurBentoGridV2 />
        </div>
      </div>

      {/* Contact Section */}
      <div className='contact-section section-spacing'>
        <div className='contact-title'>
          <GSAPTextReveal
            style={{ 
              alignItems: 'center', 
              alignContent: 'center', 
              fontFamily: 'Clash Display', 
              fontSize: 'clamp(48px, 8vw, 92px)', 
              textAlign: 'center', 
              color: '#000000' 
            }}
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
        <div style={{ height: '100%', width: '100%' }} />
      </div>
    </>
  );
}