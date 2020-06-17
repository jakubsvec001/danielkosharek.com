import * as React from 'react';
import * as style from '../../src_index.scss';
import ReactImageZoom from 'react-image-zoom';

interface Iprops {
  image: any;
}


const Image_hero: React.FC<Iprops> = (props) => {
  return (
    <div>
      <div className={style['artist-statement']}>
        <ReactImageZoom zoomWidth={340} height={340} width={340} img={props.image} zoomPosition="original" as='img' />
        <div className={style.padding}>
          <h3>Artist statement here</h3>
          <p>Hi, my name is Daniel. I paint things with implements. A quick and simplified answer is that Lorem Ipsum refers to text that the DTP (Desktop Publishing) industry use as replacement text when the real text is not available. For example, when designing a brochure or book, a designer will insert Lorem ipsum text if the real text is not available.</p>
        </div>
      </div>
    </div>
  )
}

export default Image_hero;