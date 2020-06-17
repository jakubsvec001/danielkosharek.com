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
          <p>Hi, my name is Daniel. I paint things with implements.</p>
        </div>
      </div>
    </div>
  )
}

export default Image_hero;