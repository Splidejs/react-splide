import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Options } from '@splidejs/splide';
import React, { ReactNode } from 'react';
import { generateSlides } from '../utils';


export class ThumbnailsExample extends React.Component<{}> {
  /**
   * The main Splide component.
   */
  mainRef = React.createRef<Splide>();

  /**
   * The thumbnail Splide component.
   */
  thumbsRef = React.createRef<Splide>();

  /**
   * Set the sync target right after the component is mounted.
   */
  componentDidMount(): void {
    if ( this.mainRef.current && this.thumbsRef.current && this.thumbsRef.current.splide ) {
      this.mainRef.current.sync( this.thumbsRef.current.splide );
    }
  }

  /**
   * Render slides.
   *
   * @return Slide nodes.
   */
  renderSlides(): ReactNode[] {
    return generateSlides().map( slide => (
      <SplideSlide key={ slide.src }>
        <img src={ slide.src } alt={ slide.alt }/>
      </SplideSlide>
    ) );
  }

  /**
   * Render the component.
   *
   * @return A React node.
   */
  render(): ReactNode {
    const mainOptions: Options = {
      type      : 'loop',
      perPage   : 2,
      perMove   : 1,
      gap       : '1rem',
      pagination: false,
      height    : '10rem',
    };

    const thumbsOptions: Options = {
      type        : 'slide',
      rewind      : true,
      gap         : '1rem',
      pagination  : false,
      fixedWidth  : 110,
      fixedHeight : 70,
      cover       : true,
      focus       : 'center',
      isNavigation: true,
    };

    return (
      <div className="wrapper">
        <h2 id="thumbnail-slider-example">Thumbnail Slider</h2>

        <Splide
          options={ mainOptions }
          ref={ this.mainRef }
          aria-labelledby="thumbnail-slider-example"
        >
          { this.renderSlides() }
        </Splide>

        <Splide
          options={ thumbsOptions }
          ref={ this.thumbsRef }
          aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
        >
          { this.renderSlides() }
        </Splide>
      </div>
    );
  }
}
