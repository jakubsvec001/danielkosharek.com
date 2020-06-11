import * as React from 'react';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
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
