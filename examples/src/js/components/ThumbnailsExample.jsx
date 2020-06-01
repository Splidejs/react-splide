/**
 * Thumbnail slider example.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

import React from 'react';
import { Splide, SplideSlide } from '../../../../src/js';
import { createSlides } from "../utils/slides";

/**
 * The class for the thumbnail slider example.
 * Need to call sync() after the component is mounted, using refs.
 */
export default class ThumbnailsExample extends React.Component {
	/**
	 * ThumbnailExample constructor.
	 *
	 * @param {Object} props - Props.
	 */
	constructor( props ) {
		super( props );

		this.primaryRef   = React.createRef();
		this.secondaryRef = React.createRef();
	}

	/**
	 * Set the sync target right after the component is mounted.
	 */
	componentDidMount() {
		this.primaryRef.current.sync( this.secondaryRef.current.splide );
	}

	/**
	 * Render slides.
	 *
	 * @return {ReactNode[]}
	 */
	renderSlides() {
		return createSlides().map( slide => (
			<SplideSlide key={ slide.src }>
				<img src={ slide.src } alt={ slide.alt } />
			</SplideSlide>
		) );
	};

	/**
	 * Render the component.
	 *
	 * @return {ReactNode} - React component.
	 */
	render() {
		const primaryOptions = {
			type      : 'loop',
			perPage   : 2,
			perMove   : 1,
			gap       : '1rem',
			pagination: false,
		};

		const secondaryOptions = {
			type        : 'slide',
			rewind      : true,
			gap         : '1rem',
			pagination  : false,
			fixedWidth  : 110,
			fixedHeight : 70,
			cover       : true,
			focus       : 'center',
			isNavigation: true,
			updateOnMove: true,
		};

		return (
			<div className="wrapper">
				<h2>Thumbnail Slider</h2>

				<a
					href="https://github.com/Splidejs/react-splide/blob/master/examples/src/js/components/ThumbnailsExample.jsx"
					target="_blank"
					rel="noopener"
				>
					View Code
				</a>

				<Splide options={ primaryOptions } ref={ this.primaryRef }>
					{ this.renderSlides() }
				</Splide>

				<Splide options={ secondaryOptions } ref={ this.secondaryRef }>
					{ this.renderSlides() }
				</Splide>
			</div>
		);
	}
}