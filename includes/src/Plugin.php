<?php
/**
 * main plugin file
 */

namespace CRZN_REVIEWS;

if( !class_exists('\CRZN_REVIEWS\Plugin') ){

class Plugin{

    public function __construct(){
        $this->init_blocks();
    }

    /**
     * initializes Custom Gutenburg Blocks
     */
    public function init_blocks(){
        
    }
}

}