import React, { forwardRef, useRef, useImperativeHandle, useEffect, useState } from 'react';
// Import Swiper react components
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { getBlocks } from '@wordpress/blocks';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SliderLayout = forwardRef( ({ innerBlocksProps, className}, ref)=>{

    const sliderRef = useRef(null);
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    const paginationRef = useRef(null);


    /**
     * start slider once 
     */
    useEffect(()=>{
   
        //start swiper
        const swiper = new Swiper( sliderRef.current , {
            // Optional parameters
            loop: true,
            modules: [Navigation, Autoplay],
            lazy : true,

            // Navigation arrows
            navigation: {
            nextEl: nextButtonRef.current,
            prevEl: prevButtonRef.current,
            },


            autoplay: {
            delay: 3000, // Delay between transitions in milliseconds
            disableOnInteraction: true, // Continue autoplay after user interactions
            },
            
            //touch handle to allow block selection
            preventClicksPropagation:false,
            preventClicks:false,
            touchStartPreventDefault:true,

        });


    },[]);

    return (
        <div className="swiper" ref={sliderRef}>
            <div className="swiper-wrapper">{ innerBlocksProps.children }</div>

            {/** If we need navigation buttons */ }
            <div className='swiper-navigation'>
                <div ref={prevButtonRef} className="swiper-button-prev">⟵</div>
                <div ref={nextButtonRef} className="swiper-button-next">⟶</div>
            </div>

        </div>
    );

});

export default SliderLayout;