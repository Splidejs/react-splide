const info = require( '../../package.json' );

module.exports = `/*!
 * React Splide
 * Version  : ${ info.version }
 * License  : ${ info.license }
 * Copyright: ${ new Date().getFullYear() } ${ info.author }
 */`;
