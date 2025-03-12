<?php 
/**
 * Plugin Name: Chorozian reviews
 * Description: Custom plugin to render client ratings
 * Version: 1.0.5
 * Requires at least: 6.1
 * Requires PHP: 8.1
 * Author: Lefteris Saroukos
 * License: private
 * Text Domain: chorozian-reviews
 * 
 */

$loader = require_once __DIR__ . '/vendor/autoload.php';

if( !defined('CRZN_REVIEWS_VERSION') ){
    define('CRZN_REVIEWS_VERSION','1.1.0');
    define('ROOT_DIR',__DIR__); //no trailing slash
    define('ROOT_URL', \plugin_dir_url(__FILE__) ); //with trailing slash
}

if( class_exists('\CRZN_REVIEWS\Plugin') ){
    $crzn_reviews = new \CRZN_REVIEWS\Plugin();
}