'use client';

import { useState, useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/ScrollExpansion';

interface MediaAbout {
    overview: string;
    conclusion: string;
}

interface MediaContent {
    src: string;
    poster?: string;
    background: string;
    title: null;
    date: string;
    scrollToExpand: string;
    about: MediaAbout;
}

interface MediaContentCollection {
    [key: string]: MediaContent;
}

const sampleMediaContent: MediaContentCollection = {
    video: {
        src: '/about-video.mp4', // Place your video file in public folder
        poster: '/video-frame.png', // Place your video poster in public folder
        background: 'transparent', // Changed to transparent
        title: null,
        date: 'Since 2019',
        scrollToExpand: 'Scroll to Explore',
        about: {
            overview:
                'Revolutionizing B2B marketing since 2019. We\'re passionate marketers with expertise across diverse disciplines - performance specialists, content marketers, designers, and more, all dedicated to driving your business growth.',
            conclusion:
                'Our data-driven strategies and cutting-edge technology solutions help businesses across 15+ industries achieve unprecedented growth and success.',
        },
    },
    image: {
        src: '/about-hero-image.jpg', // Place your hero image in public folder
        background: 'transparent', // Changed to transparent
        title: null,
        date: 'Since 2019',
        scrollToExpand: 'Scroll to Explore',
        about: {
            overview:
                'Revolutionizing B2B marketing since 2019. We\'re passionate marketers with expertise across diverse disciplines - performance specialists, content marketers, designers, and more, all dedicated to driving your business growth.',
            conclusion:
                'Our data-driven strategies and cutting-edge technology solutions help businesses across 15+ industries achieve unprecedented growth and success.',
        },
    },
};

const VideoCard = () => {
    const mediaType = 'video';
    const currentMedia = sampleMediaContent[mediaType];

    useEffect(() => {
        window.scrollTo(0, 0);

        const resetEvent = new Event('resetSection');
        window.dispatchEvent(resetEvent);
    }, []);

    return (
        <ScrollExpandMedia
            mediaType={mediaType as 'video' | 'image'}
            mediaSrc={currentMedia.src}
            posterSrc={mediaType === 'video' ? currentMedia.poster : undefined}
            bgImageSrc={currentMedia.background}
            date={currentMedia.date}
            scrollToExpand={currentMedia.scrollToExpand}
        />
    );
};

export default VideoCard;
