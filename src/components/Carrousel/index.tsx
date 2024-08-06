'use client'

import React, { useRef } from 'react';
import { CarrouselContainer } from './styles';
import { CarrouselData } from '@/contants/filescarrousel';
import Image from 'next/image';
// import { Container } from './styles';
import image from '../../assets/images/carrousel/image4.jpg'
import image2 from '../../assets/images/carrousel/image2.jpg'
import image3 from '../../assets/images/carrousel/image1.png'
const Carrousel: React.FC = () => {

    const refcarrousel = useRef<HTMLDivElement | null>(null)

    const handleLEft = () => {
        console.log(refcarrousel.current?.offsetWidth)
        if (refcarrousel.current)
            refcarrousel.current.scrollLeft += refcarrousel.current?.offsetWidth
    }
    return (
        <>
            <CarrouselContainer ref={refcarrousel}>
                {
                    CarrouselData.map((item, index) => (
                        <div>
                            <img src={item.src} />
                        </div>
                    ))
                }

            </CarrouselContainer>
            <button style={{ backgroundColor: 'red' }} onClick={handleLEft}>
                <p>oioi</p>
            </button>
        </>
    );
}

export default Carrousel;