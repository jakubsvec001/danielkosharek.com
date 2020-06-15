import * as React from 'react';
import * as style from '../../src_index.scss';
import Zoom from 'react-img-zoom';

interface Iprops {
  image: any;
}

const Image_hero: React.FC<Iprops> = (props) => {
  return (
    <Zoom img={props.image} zoomScale={3} width={300} height={300}/>
    // <div className={style['img-hover-zoom']}>
    //   <div className={style['img-hover-zoom--brightness']} >
    //     <img src={props.image}/>
    //   </div>
    // </div>
  )
}

export default Image_hero;