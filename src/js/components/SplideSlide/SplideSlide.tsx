import React from 'react';
import { classNames } from '../../utils';


type Props = {
  className?: string;
};

/**
 * The component for each slide element.
 *
 * @since 0.5.0
 */
export const SplideSlide: React.FC<Props> = ( { className, children } ) => {
  return (
    <li className={ classNames( 'splide__slide', className ) }>
      { children }
    </li>
  );
};
