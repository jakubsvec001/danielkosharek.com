import React from 'react';

const App = () => {

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
