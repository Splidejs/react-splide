import React from 'react';
import { render } from 'react-dom';
import { AutoplayExample } from './components/AutoplayExample';
import { BasicExample } from './components/BasicExample';
import { DynamicSlidesExample } from './components/DynamicSlidesExample';
import { ReactivityExample } from './components/ReactivityExample';
import { ThumbnailsExample } from './components/ThumbnailsExample';
import '@splidejs/react-splide/css';
import '../css/style.css';


/**
 * The test application.
 */
const App: React.VoidFunctionComponent = () => {
  return (
    <div className="examples">
      <BasicExample/>
      <AutoplayExample/>
      <ReactivityExample/>
      <DynamicSlidesExample/>
      <ThumbnailsExample/>
    </div>
  );
};

document.addEventListener( 'DOMContentLoaded', () => {
  render( <App/>, document.getElementById( 'app' ) );
} );
