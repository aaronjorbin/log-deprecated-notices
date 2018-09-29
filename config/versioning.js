const fs = require( 'fs' );
const packagejson = JSON.parse( fs.readFileSync( 'package.json', 'utf8' ) );
const version = packagejson.version;

const template = `<?php
// This file is built, don't modify manually

if ( DEFINED( 'WP_DEBUG' ) && WP_DEBUG ) {
	define( 'LOG_DEPRECATED_NOTICES_SCRIPT_VERSION', time() );
} else {
	define( 'LOG_DEPRECATED_NOTICES_SCRIPT_VERSION', '${version}' );
}
`;

fs.writeFileSync( './version.php', template, 'utf8' );
