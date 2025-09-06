"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import Button from '@/components/ui/Button';
import { ChevronDown, Play } from 'lucide-react';

const VideoHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 250]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial animations
    tl.from(titleRef.current, {
      duration: 1.2,
      y: 100,
      opacity: 0,
      ease: "power3.out",
      delay: 0.5
    })
      .from(subtitleRef.current, {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out"
      }, "-=0.8")
      .from(ctaRef.current, {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: "power3.out"
      }, "-=0.6");

    // Video fade in
    if (videoRef.current) {
      gsap.from(videoRef.current, {
        duration: 2,
        scale: 1.1,
        ease: "power3.out"
      });
    }

    // Floating animation for CTA
    if (ctaRef.current) {
      gsap.to(ctaRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: 2
      });
    }

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToContent = () => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: window.innerHeight,
      ease: "power3.inOut"
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.7) contrast(1.1)' }}
        >
          <source src="about-video.mp4" type="public/about-video.mp4" />
          <source src="about-video.mp4" type="public/about-video.mp4" />
        </video>

        {/* Gradient Overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-t from-hero-overlay/30 via-transparent to-hero-overlay/10"
        />

        {/* White Theme Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/70 mix-blend-overlay" />
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center"
      >
        <motion.h1
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-hero-text-primary mb-6 tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Elevate Your
          <br />
          <span className="text-hero-accent bg-gradient-to-r from-hero-accent to-hero-text-primary bg-clip-text text-transparent">
            Vision
          </span>
        </motion.h1>

        <motion.p
          ref={subtitleRef}
          className="text-xl md:text-2xl lg:text-3xl text-hero-text-secondary max-w-4xl mx-auto mb-12 font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Experience the future of digital innovation with our cutting-edge solutions
          that transform ideas into reality
        </motion.p>

        <motion.div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-6 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {/* <Button 
            size="lg" 
            className="group relative px-8 py-6 text-lg font-semibold bg-hero-accent hover:bg-hero-accent/90 text-white border-0 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
          >
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Get Started
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-6 text-lg font-semibold border-2 border-hero-text-primary/20 text-hero-text-primary hover:bg-hero-text-primary hover:text-white rounded-full backdrop-blur-sm bg-white/50 hover:scale-105 transition-all duration-300"
          > */}
          Learn More
          {/* </Button> */}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        onClick={scrollToContent}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="flex flex-col items-center text-hero-text-secondary group-hover:text-hero-text-primary transition-colors">
          <span className="text-sm font-medium mb-2 opacity-80">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </div>
      </motion.div>
    </section>
  );
};

export default VideoHero;