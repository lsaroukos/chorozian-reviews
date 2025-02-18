<?php
/**
 * main plugin file
 */

namespace CRZN_REVIEWS;

if( !class_exists('\CRZN_REVIEWS\Plugin') ){

class Plugin{

    public function __construct(){
        add_action('init', [$this, 'register_blocks']);

        //add_action('enqueue_block_editor_assets', [$this, 'register_admin_scripts']);
    }
    
    /**
     * initializes Custom Gutenburg Blocks
     */
    public function register_blocks(){
        return [
            Blocks\ReviewsSlider::class => new Blocks\ReviewsSlider(),
        ];
    }

    public function register_admin_scripts(){
        wp_enqueue_script ('admin-my', ROOT_URL. 'assets/dist/admin.js', ['wp-blocks', 'wp-element', 'wp-editor']);

    }
}

}