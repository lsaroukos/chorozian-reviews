<?php 
/**
 * Template file for rendering a single review slide dynamically
 * 
 * $attributes = [
 *      clientName : string,
 *      reviewText : string,
 *      rating  :   number,
 *      img     : { id, full, large, medium },
 *      link    : string
 * ]
 * 
 * 
 */

use CRZN_REVIEWS\Src\Template;

// Extract attributes

?>
<div class="swiper-slide reviews-slider-item" >
    <?php if( !empty($attributes['img']->id) ): ?>
        <img class="review-image" src="<?php echo $attributes['img']->large; ?>" />
    <?php endif; ?>
    <div class="review-details">
        <h3 class="reviewer-name"><?php echo $attributes['clientName']; ?></h3>
        <p class="review-text"><?php echo $attributes['reviewText']; ?></p>
        <div class="review-footer">
            <div class="star-rating">
                <?php 
                    $star_tmpl = new Template('partial.star-rating');
                    $star_tmpl->render(['rating'=>$attributes['rating']]);
                ?>
            </div>
            <?php if( !empty($attributes['link']) ): ?>
                <a class="review-link" href="<?php echo $attributes['link']; ?>" target="_blank">(see review)</a>
            <?php endif; ?>
        </div>
    </div>
</div>