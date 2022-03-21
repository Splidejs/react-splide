import React from 'react';
import { classNames } from '../../utils';


/**
 * The component for the track element.
 *
 * @since 0.7.0
 */
export const SplideTrack: React.FC<JSX.IntrinsicElements[ 'div' ]> = ( { children, className, ...props } ) => {
  return (
    <div className={ classNames( 'splide__track', className ) } { ...props }>
      <ul className="splide__list">
        { children }
      </ul>
    </div>
  );
};