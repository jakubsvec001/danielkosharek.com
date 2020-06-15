import * as React from 'react';
import * as style from '../../src_index.scss';
import ReactImageZoom from 'react-image-zoom';

interface Iprops {
  image: any;
}


const Image_hero: React.FC<Iprops> = (props) => {
  return (
    <div style={{height: '300px', width: '300px'}}>
      <ReactImageZoom width={300} height={300} zoomWidth={300} img={props.image} zoomPosition="original" />
    </div>

  )
}

export default Image_hero;