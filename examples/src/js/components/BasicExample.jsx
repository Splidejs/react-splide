/**
 * Basic example.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

import React from 'react';
import { Splide, SplideSlide } from '../../../../src/js';
import { createSlides } from "../utils/slides";

/**
 * The function for the basic example.
 *
 * @return {FunctionComponent} - Function component.
 */
export default () => {
	return (
		<div className="wrapper">
			<h2>Basic Example</h2>

			<a
				href="https://github.com/Splidejs/react-splide/blob/master/examples/src/js/components/BasicExample.jsx"
				target="_blank"
				rel="noopener"
			>
				View Code
			</a>

			<Splide
				options={ {
					rewind : true,
					perPage: 2,
					perMove: 1,
					gap    : '1rem',
				} }
				onMoved={ ( splide, newIndex ) => { console.log( 'moved', newIndex ) } }
			>
				{ createSlides().map( slide => (
					<SplideSlide key={ slide.src }>
						<img src={ slide.src } alt={ slide.alt } />
					</SplideSlide>
				) ) }
			</Splide>
		</div>
	);
}