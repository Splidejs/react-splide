import { ComponentConstructor, Options } from '@splidejs/splide';
import React, { DOMAttributes, HTMLAttributes } from 'react';
import { SplideEventHandlers } from './events';


/**
 * Properties of the Splide component.
 *
 * @since 0.1.0
 */
export interface SplideProps extends
  SplideHTMLAttributes,
  Partial<SplideEventHandlers>
{
  options?: Options;
  hasTrack?: boolean;
  tag?: 'div' | 'section' | 'header' | 'footer' | 'nav';
  extensions?: Record<string, ComponentConstructor>;
  transition?: ComponentConstructor;
  children?: React.ReactNode;
}

/**
 * Excludes event handlers used in Splide.
 *
 * @since 0.7.0
 */
export interface SplideHTMLAttributes extends
  Partial<Omit<HTMLAttributes<HTMLElement>, keyof DOMAttributes<HTMLElement>>> {}