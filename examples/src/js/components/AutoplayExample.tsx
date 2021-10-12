import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { generateSlides } from '../utils';


export const AutoplayExample: React.VoidFunctionComponent = () => {
  return (
    <div className="wrapper">
      <h2>Autoplay</h2>

      <Splide
        options={ {
          type         : 'loop',
          gap          : '1rem',
          autoplay     : true,
          pauseOnHover : false,
          resetProgress: false,
          arrows       : 'slider',
          height       : '15rem',
        } }
        hasSliderWrapper
        hasAutoplayControls
        hasAutoplayProgress
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
