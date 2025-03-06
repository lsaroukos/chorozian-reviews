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
        
        //TODO: if there is a need for different options on different sliders, data-attributes should be used on the php rendered component

        if( !swiperElement )
            return;

        const swiper = new Swiper(swiperElement, {
            loop: true,
            lazy : true,
            modules: [Navigation, Autoplay],
            autoHeight: false,

            // Navigation arrows
            navigation: {
                nextEl: swiperElement.querySelector('.swiper-button-next'),
                prevEl: swiperElement.querySelector('.swiper-button-prev')
            },

            autoplay: {
                delay: 3000, // Delay between transitions in milliseconds
                disableOnInteraction: false, // Continue autoplay after user interactions
            },
            
            //touch handle to allow block selection
            preventClicksPropagation:false,
            preventClicks:false,
            touchStartPreventDefault:true,
        });

    });  

});

