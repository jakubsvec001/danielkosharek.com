import * as React from 'react';
import * as style from '../../src_index.scss';
import * as img from '../../assets/Measure_Of_Time_1000px/April.21.2013_1000px.jpg';

const LandingPage_view: React.FC = () => {
  return (
    <div className={style["landing-page"]}>
      Landing Page
      <div>
        <img />
      </div>
    </div>
  )
}
//alt='Painting: "July.9.2011" by Daniel Kosharek' 
export default LandingPage_view;