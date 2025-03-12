<?php 
/**
 * template file for rendering reviews-slider block on frontend dynamically
 */


$maxHeight = $attributes['sliderHeight'] + 60;
$autoplay = !empty($attributes['autoplay']) ? 'true' : 'false';  
$autoplaySpeed = !empty($attributes['autoplaySpeed']) ? $attributes['autoplaySpeed'] : 3000;  // 3 seconds

?>
<div class="reviews-slider-block frontend" id="<?php echo $block_id; ?>" >
    <h2><?php echo $attributes['title'] ?? 'Client Reviewws'; ?></h2>

    <div class="swiper" style="height:<?php echo $maxHeight.'px'; ?>;"
        data-autoplay="<?php echo $autoplay; ?>"
        data-autoplay-speed="<?php echo $autoplaySpeed; ?>"
    >
        <div class="swiper-wrapper" ><?php echo $content; ?></div>

        <div class='swiper-navigation'>
            <div class="swiper-button-prev">⟵ &nbsp; <span>prev</span></div>
            <div class="swiper-button-next"><span>next</span>&nbsp; ⟶</div>
        </div>

    </div>
</div>


