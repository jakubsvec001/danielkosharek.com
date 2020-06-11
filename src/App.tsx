import * as React from 'react';
import Header from './containers/HeaderSection/HeaderSection';
import Footer from './containers/FooterSection/FooterSection';
import LandingPage from './containers/LandingPage/LandingPage';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <MainContent>

      </MainContent>
      <Footer />
    </React.Fragment>
  );
};

export default App;
