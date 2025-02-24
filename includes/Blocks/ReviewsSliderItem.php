<?php

namespace CRZN_REVIEWS\Blocks;

use CRZN_REVIEWS\Src\Template;

if( !class_exists('CRZN_REVIEWS\Blocks\ReviewsSliderItem') ){

class ReviewsSliderItem extends Block{

    public function render_html($attributes, $content, $block)
    {        
        
        $template = new Template('block.reviews-slider-item');

        $html = $template->render ( [
             'attributes' => $attributes, 
             'content'    => $content,
             'block'      => $block,
         ]);    

         return $html;
    }

}
}