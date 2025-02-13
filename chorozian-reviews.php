<?php 
/**
 * Plugin Name: Chorozian reviews
 * Description: Custom plugin to render client ratings
 * Version: 1.1.0
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
}

if( class_exists('\CRZN_REVIEWS\Plugin') ){
    $crzn_reviews = new \CRZN_REVIEWS\Plugin();
}