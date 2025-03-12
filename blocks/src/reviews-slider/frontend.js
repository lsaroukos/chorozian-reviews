import Swiper from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./index.scss"
import { Navigation, Autoplay } from 'swiper/modules';


document.addEventListener('DOMContentLoaded',()=>{
    
    document.querySelectorAll('.reviews-slider-block.frontend').forEach( slider => {

        const swiperElement = slider.querySelector('.swiper'); // Ensure this is the correct class or selector for the swiper container


        const autoplay = swiperElement.dataset.autoplay === 'true' ? true : false;
        const autoplaySpeed = parseInt(swiperElement.dataset.autoplaySpeed) || 3000;

        if( !swiperElement )
            return;

        const swiper = new Swiper(swiperElement, {
            loop: true,
            lazy : true,
            modules: [Navigation, Autoplay],
            autoHeight: true,
            
            breakpoints: {
                500: {
                    autoHeight: false,
                },
            },

            // Navigation arrows
            navigation: {
                nextEl: swiperElement.querySelector('.swiper-button-next'),
                prevEl: swiperElement.querySelector('.swiper-button-prev')
            },

            autoplay: autoplay && {
                delay: autoplaySpeed, // Delay between transitions in milliseconds
                disableOnInteraction: false, // Continue autoplay after user interactions
            },
            
            //touch handle to allow block selection
            preventClicksPropagation:false,
            preventClicks:false,
            touchStartPreventDefault:true,
        });

    });  

});

