<?php

namespace CRZN_REVIEWS\Blocks;

use CRZN_REVIEWS\Src\Template;

if( !class_exists('CRZN_REVIEWS\Blocks\ReviewsSlider') ){

class ReviewsSlider extends Block{

    public function render_html($attributes, $content, $block)
    { 
        
        $template = new Template('block.reviews-slider');

        //unique block id
        $bid = uniqid('reviews-slider-');

        $html = $template->render ( [
             'attributes' => $attributes, 
             'content'    => $content,
             'block'      => $block,
             'block_id'   => $bid,
         ]);    

         return $html;
    }


}
}