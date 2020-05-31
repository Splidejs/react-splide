/**
 * Utility functions.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * No operation.
 */
export function noop() {}

/**
 * Join class names with/without condition.
 *
 * @param {string|Object} args - A class name itself or { className: condition } object.
 */
export function classNames( ...args ) {
	let names = [];

	for ( let className of args ) {
		if ( ! className ) {
			continue;
		}

		if ( typeof className === 'string' ) {
			names.push( className );
		} else if ( typeof className === 'object' ) {
			for ( let key in className ) {
				if ( className[ key ] ) {
					names.push( key );
				}
			}
		}
	}

	return names.join( ' ' );
}