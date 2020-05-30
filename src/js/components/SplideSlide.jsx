/**
 * The component for each slide.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

import React from 'react';
import { classNames } from "../utils";

/**
 * The component for each slide.
 *
 * @param {Object} props - Props.
 */
export default ( { children, className } ) => {
	return (
		<li className={ classNames( 'splide__slide', className ) }>
			{ children }
		</li>
	);
}