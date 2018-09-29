<?php
// This file is built, don't modify manually

if ( DEFINED( 'WP_DEBUG' ) && WP_DEBUG ) {
	define( 'LOG_DEPRECATED_NOTICES_SCRIPT_VERSION', time() );
} else {
	define( 'LOG_DEPRECATED_NOTICES_SCRIPT_VERSION', '0.5.0' );
}
