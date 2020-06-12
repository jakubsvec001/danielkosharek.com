import * as React from 'react';
import HeaderSection from './containers/HeaderSection/HeaderSection';
import FooterSection from './containers/FooterSection/FooterSection';
import MainContentSection from './containers/MainContentSection/MainContentSection';
import LandingPage from './containers/LandingPage/LandingPage';
import * as style from './src_index.scss';

const App: React.FC = () => {
  return (
    <div className={style["site-flexbox"]}>
      <div className={style['site-container']}>
        <HeaderSection/>
        <MainContentSection>
          <main>
            <LandingPage />
          </main>
        </MainContentSection>
        <FooterSection/>
      </div>
    </div>
  );
};

export default App;
