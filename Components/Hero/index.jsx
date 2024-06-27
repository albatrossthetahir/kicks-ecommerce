"use client"
import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

import '@splidejs/react-splide/css/core';

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
                    <img src="/hero-img-1.jpg" alt="Image 1" />
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className='rounded-[64px] overflow-hidden'>
                    <img src="/hero-img-1.jpg" alt="Image 1" />
                    </div>
                </SplideSlide>
            </Splide>
        </>
    );
}