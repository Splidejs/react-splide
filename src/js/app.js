/**
 * Render examples.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

import React from 'react';
import { render } from 'react-dom';
import BasicExample from './examples/BasicExample';
import DynamicSlidesExample from './examples/DynamicSlidesExample';
import ThumbnailExample from './examples/ThumbnailsExample';

class App extends React.Component {
	render() {
		return (
			<div id="examples">
				<BasicExample />
				<DynamicSlidesExample />
				<ThumbnailExample />
			</div>
		);
	}
}

render( <App/>, document.getElementById( 'app' ) );