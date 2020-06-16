import * as React from 'react';
import * as style from '../../src_index.scss';
import ReactImageZoom from 'react-image-zoom';

interface Iprops {
  image: any;
}


const Image_hero: React.FC<Iprops> = (props) => {
  return (
    <div className={style.image}>
      <ReactImageZoom zoomWidth={300} height={400} width={300} img={props.image} zoomPosition="original" />
    </div>
  )
}

export default Image_hero;