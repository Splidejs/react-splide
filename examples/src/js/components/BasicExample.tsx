import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { generateSlides } from '../utils';


export const BasicExample: React.VoidFunctionComponent = () => {
  return (
    <div className="wrapper">
      <h2 id="basic-example-heading">Basic Example</h2>

      <Splide
        options={ {
          perPage: 2,
          height : '10rem',
          rewind : true,
          gap    : '1rem',
        } }
        aria-labelledby="basic-example-heading"
        onMoved={ ( splide, newIndex ) => {
          // eslint-disable-next-line
          console.log( 'moved', newIndex );

          // eslint-disable-next-line
          console.log( 'length', splide.length );
        } }
      >
        { generateSlides().map( slide => (
          <SplideSlide key={ slide.src }>
            <img src={ slide.src } alt={ slide.alt }/>
          </SplideSlide>
        ) ) }
      </Splide>
    </div>
  );
};
