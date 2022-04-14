<?php
/**
 * Plugin Name:       Go To Top Block
 * Description:       Provides a button at the end of page by click on it it will scroll to top of the page.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Nirav Sherasiya
 * Author URI:  	  https://github.com/nirav7707
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       go-to-top-block
 *
 * @package           go-to-top-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_go_to_top_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_go_to_top_block_block_init' );
