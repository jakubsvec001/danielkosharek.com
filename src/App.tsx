import * as React from 'react';
import Header_section from './containers/||~0~||_Header_section/Header_section';
import Main_section from './containers/||~1~||_Main_section/Main_section'
import Footer_section from './containers/||~2~||_Footer_section/Footer_section'
import LandingPage_view from './components/||0||_LandingPage_view/LandingPage_view';
import Announcement_view from './containers/||4||_Announcement_view/Announcement_view';
import * as style from './src_index.scss';

const App: React.FC = () => {

  const [isAnnouncement, setIsAnnouncement] = React.useState(true);

  React.useEffect(()=>{
    setTimeout(() => setIsAnnouncement(!isAnnouncement), 1000)
  }, [])

  return (
    <div className={style["site-flexbox"]}>
      <Header_section />
      <Main_section>
        <div>
          {isAnnouncement && <Announcement_view /> }
        </div>
        <LandingPage_view />
      </Main_section>
      <Footer_section/>
    </div>
  );
};

export default App;
