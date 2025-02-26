<?php 
/**
 * template file for rendering reviews-slider block on frontend dynamically
 */

?>

<div class="reviews-slider-block frontend" id="<?php echo $block_id; ?>" >
    <h2><?php echo $attributes['title'] ?? 'Client Reviewws'; ?></h2>

    <div class="swiper" >
        <div class="swiper-wrapper"><?php echo $content; ?></div>

        <div class='swiper-navigation'>
            <div class="swiper-button-prev">⟵ &nbsp; <span>prev</span></div>
            <div class="swiper-button-next"><span>next</span>&nbsp; ⟶</div>
        </div>

    </div>
</div>


