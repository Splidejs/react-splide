/**
 * Basic example.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

import React from 'react';
import { Splide, SplideSlide } from '../';
import { createSlides } from "../utils/slides";

/**
 * The function for the basic example.
 *
 * @return {FunctionComponent} - Function component.
 */
export default () => {
	return (
		<Splide
			options={ {
				rewind : true,
				width  : 800,
				perPage: 2,
				perMove: 1,
				gap    : '1rem',
			} }
			onMoved={ ( splide, newIndex ) => { console.log( 'moved', newIndex ) } }
		>
			{ createSlides().map( slide => (
				<SplideSlide className="splide__slide" key={ slide.src }>
					<img src={ slide.src } alt={ slide.alt } />
				</SplideSlide>
			) ) }
		</Splide>
	);
}