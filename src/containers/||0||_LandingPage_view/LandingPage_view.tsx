import * as React from 'react';
import * as style from '../../src_index.scss';
import img from '../../assets/Measure_Of_Time_4000px/April.21.2013_4000px.jpg';

const LandingPage_view: React.FC = () => {
  return (
    <div className={style["landing-page"]}>
      Landing Page
      <div>
        <img src={img}/>
      </div>
    </div>
  )
}
//alt='Painting: "July.9.2011" by Daniel Kosharek' 
export default LandingPage_view;