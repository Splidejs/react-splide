/**
 * The App component just for rendering examples.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

import React from 'react';
import { render } from 'react-dom';

import BasicExample from './examples/BasicExample';
import AutoplayExample from './examples/AutoplayExample';
import ThumbnailExample from './examples/ThumbnailsExample';
import DynamicSlidesExample from './examples/DynamicSlidesExample';

import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import '../sass/example.scss';

/**
 * The App component just for rendering examples.
 */
class App extends React.Component {
	render() {
		return (
			<div id="examples">
				<BasicExample />
				<AutoplayExample />
				<DynamicSlidesExample />
				<ThumbnailExample />
			</div>
		);
	}
}

document.addEventListener( 'DOMContentLoaded', () => {
	render( <App/>, document.getElementById( 'app' ) );
} );