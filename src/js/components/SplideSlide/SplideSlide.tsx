import React from 'react';
import { classNames } from '../../utils';


type Props = Omit<JSX.IntrinsicElements[ 'li' ],
  | 'style'
  | 'tabIndex'
  | 'role'
  | 'aria-label'
  | 'aria-current'
  | 'aria-controls'
  | 'aria-hidden'
>;

/**
 * The component for each slide element.
 *
 * @since 0.5.0
 */
export const SplideSlide: React.FC<Props> = ( { children, className, ...props } ) => {
  return (
    <li className={ classNames( 'splide__slide', className ) } { ...props }>
      { children }
    </li>
  );
};
