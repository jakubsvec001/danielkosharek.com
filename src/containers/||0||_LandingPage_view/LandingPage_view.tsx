import * as React from 'react';
import * as style from '../../src_index.scss';
import ImageHero from '../../components/||~2~||_Image_hero/Image_hero'
import img1 from '../../assets/Measure_Of_Time_1000px/July.23.2017_1000px.jpg';
import img2 from '../../assets/Measure_Of_Time_1000px/May.22.2018_2_1000px.jpg';

const LandingPage_view: React.FC = () => {
  return (
    <div className={style["landing-page"]}>
      Landing Page
      <div>
        <ImageHero image={img1}/>
        <ImageHero image={img2}/>
      </div>
    </div>
  )
}

export default LandingPage_view;