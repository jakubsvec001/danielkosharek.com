import * as React from 'react';
import * as style from '../../src_index.scss';
import ImageHero from '../||~2~||_Image_hero/Image_hero'
import img1 from '../../assets/Measure_Of_Time_1000px/July.23.2017_1000px.jpg';
import img2 from '../../assets/Measure_Of_Time_300px/May.22.2018_2_300px.jpg';
import img3 from '../../assets/Measure_Of_Time_300px/November.6.2016_300px.jpg';
import img4 from '../../assets/Measure_Of_Time_300px/May.15.2016_300px.jpg';
import img5 from '../../assets/Measure_Of_Time_300px/July.17.2017_300px.jpg';
import img6 from '../../assets/Measure_Of_Time_300px/April.30.2011_300px.jpg';

const Landing_page () => {
  return (
    <div className={style["landing-page"]}>
      <ImageHero image={img1}/>
      <hr/>
      <h2 className={style.padding}>
        Collections:
      </h2>
      <div className={style['collections-container']}>
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
        <img src={img6} />
      </div>
    </div>
  )
}

export default Landing_page;