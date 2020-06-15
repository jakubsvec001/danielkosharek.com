import * as React from 'react';
import * as style from '../../src_index.scss';
import ReactImageZoom from 'react-image-zoom';

interface Iprops {
  image: any;
}


const Image_hero: React.FC<Iprops> = (props) => {
  return (
    <ReactImageZoom width={300} height={300} zoomWidth={300} img={props.image} zoomPosition="original" />
  )
}

export default Image_hero;