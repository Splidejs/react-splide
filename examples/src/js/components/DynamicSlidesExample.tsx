import React, { ReactNode } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { generateSlides } from '../utils';


type State = {
  slides: ReturnType<typeof generateSlides>;
};

export class DynamicSlidesExample extends React.Component<{}, State> {
  /**
   * The current count.
   */
  private count = 0;

  /**
   * The current count.
   */
  state = {
    slides: generateSlides( 1 ),
  };

  /**
   * Add a slide when the button is clicked.
   */
  onClick(): void {
    const slides = this.state.slides.concat( generateSlides( 1, this.count + 100 ) );
    this.setState( { slides }, () => this.count++ );
  }

  /**
   * Render the component.
   *
   * @return React node.
   */
  render(): ReactNode {
    return (
      <div className="wrapper">
        <h2 id="dynamic-slides-example-heading">Dynamic Slide Example</h2>

        <Splide
          options={ {
            rewind : true,
            perPage: 2,
            height : '10rem',
            gap    : '1rem',
          } }
          aria-labelledby="dynamic-slides-example-heading"
        >
          { this.state.slides.map( ( slide, index ) => (
            <SplideSlide key={ index }>
              <img src={ slide.src } alt={ slide.alt }/>
            </SplideSlide>
          ) ) }
        </Splide>

        <div className="controls">
          <button onClick={ this.onClick.bind( this ) }>Add Slide</button>
        </div>
      </div>
    );
  }
}
