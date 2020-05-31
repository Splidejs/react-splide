# React Splide
<p class="center">
    <img src="images/hero.png" style="max-width: 300px">
</p>

**[React](https://reactjs.org/) component for the [Splide](https://github.com/Splidejs/splide) slider library.**
* [Splide](https://github.com/Splidejs/splide)

## Installation
Get the latest version by NPM:
```bash
$ npm install @splidejs/react-splide
```

### CSS
Import [styles](https://splidejs.com/themes/) if you need.
```javascript
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
```

## Examples
Here is a small example:
```javascript
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default () => {
  return (
    <Splide
      options={ {
        rewind : true,
        width  : 800,
        gap    : '1rem',
      } }
    >
      <SplideSlide>
        <img src="image1.jpg" alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <img src="image2.jpg" alt="Image 2"/>
      </SplideSlide>
      <SplideSlide>
        <img src="image3.jpg" alt="Image 3"/>
      </SplideSlide>
    </Splide>
  );
}
```
More examples:
* [Basic example](https://github.com/Splidejs/react-splide/blob/master/src/js/examples/BasicExample.jsx)
* [Autoplay](https://github.com/Splidejs/react-splide/blob/master/src/js/examples/AutoplayExample.jsx)
* [Thumbnails](https://github.com/Splidejs/react-splide/blob/master/src/js/examples/ThumbnailsExample.jsx)
* [Dynamic slides](https://github.com/Splidejs/react-splide/blob/master/src/js/examples/DynamicSlidesExample.jsx)

## License
React Splide and Splide are released under the MIT license.  
© 2020 Naotoshi Fujita