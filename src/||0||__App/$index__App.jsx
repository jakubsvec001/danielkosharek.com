import * as React from 'react';
import Header_section from './||~1~||_containers/||~0~||_Header_section/Header_section';
import Main_section from './||~1~||_containers/||~1~||_Main_container/Main_section'
import Footer_section from '../||~1~||_containers/||~2~||_Footer_container/Footer_section'
import LandingPage_view from '../||~1~||_containers/||~1~||_Main_container/||~1~||_Landing_page/$index__Landing_page';
import Announcement_view from './||~1~||_containers/||4||_Announcement_view/Announcement_view';
import * as style from './src_index.scss';

const App () => {

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
