import * as React from 'react';
import * as style from '../../src_index.scss';

const LandingPage_view: React.FC = () => {
  return (
    <div className={style["landing-page"]}>
      Landing Page
      <div>
        <img style={{width: '300px'}} src='../../assets/July.9.2011.png' />
      </div>
    </div>
  )
}
//alt='Painting: "July.9.2011" by Daniel Kosharek' 
export default LandingPage_view;