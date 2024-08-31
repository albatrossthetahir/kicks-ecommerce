"use client"
import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

import '@splidejs/react-splide/css/core';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <Splide aria-label="My Favorite Images"
              options={ {
                rewind: true,
              } }
            >
                <SplideSlide>
                    <div className='rounded-[64px] overflow-hidden'>
                    <Image src="/hero-img-1.jpg" width={1920} height={900} className='max-w-full h-auto object-cover' alt="Image 1" />
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className='rounded-[64px] overflow-hidden'>
                    <Image src="/hero-img-1.jpg" width={1920} height={900} className='max-w-full h-auto object-cover' alt="Image 1" />
                    </div>
                </SplideSlide>
            </Splide>
        </>
    );
}

