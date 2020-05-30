/**
 * The class for the Splide component.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

import React from 'react';
import SplideSlider from '@splidejs/splide';
import { classNames } from "../utils";
import { EVENTS } from "../constants/events";

/**
 * The class for the Splide component.
 */
export default class Splide extends React.Component {
	/**
	 * Splide constructor.
	 *
	 * @param {Object} props - Props.
	 */
	constructor( props ) {
		super( props );
		this.splideRef = React.createRef();
	}

	/**
	 * Initialize Splide right after the component is mounted.
	 */
	componentDidMount() {
		const { options = {}, Extensions = {}, Transition = null } = this.props;
		this.splide = new SplideSlider( this.splideRef.current, options );
		this.splide.mount( Extensions, Transition );
		this.bind();
	}

	/**
	 * Destroy the splide instance just before the component is unmounted.
	 */
	componentWillUnmount() {
		if ( this.splide ) {
			this.splide.destroy();
		}
	}

	/**
	 * Remount the splide when the component is updated.
	 */
	componentDidUpdate() {
		this.remount();
	}

	/**
	 * Register handlers to Splide events.
	 * All event names are converted to "on + camelcase" without colon.
	 * For example, arrows:mounted will be onArrowsMounted.
	 */
	bind() {
		EVENTS.forEach( event => {
			const handler = 'on' + event.split( ':' ).map( fragment => {
				return fragment.charAt( 0 ).toUpperCase() + fragment.slice( 1 );
			} ).join( '' );

			if ( typeof this.props[ handler ] === 'function' ) {
				this.splide.on( event, ( ...args ) => {
					this.props[ handler ]( this.splide, ...args );
				} );
			}
		} );
	}

	/**
	 * Sync to the given splide.
	 *
	 * @param {Splide} splide - Splide instance.
	 */
	sync( splide ) {
		if ( this.splide ) {
			this.splide.sync( splide );
			this.remount();
		}
	}

	/**
	 * Remount the splide.
	 */
	remount() {
		if ( this.splide ) {
			this.splide.destroy();
			this.splide.mount();
			this.bind();
		}
	}

	/**
	 * Render the component.
	 *
	 * @return {ReactNode} - React component.
	 */
	render() {
		const {
			children,
			id,
      className,
			hasProgress,
		} = this.props;

		return (
			<div
				id={ id }
				className={ classNames( 'splide', className ) }
				ref={ this.splideRef }
			>
				<div className="splide__track">
					<ul className="splide__list">
						{ children }
					</ul>
				</div>

				{ hasProgress &&
				<div className="splide__progress">
					<div className="splide__progress__bar">
					</div>
				</div>
				}
			</div>
		);
	}
}
