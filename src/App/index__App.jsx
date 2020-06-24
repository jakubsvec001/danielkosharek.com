import React, { useState, Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';


import { GlobalStyle } from '../styles/GlobalStyle';
import { theme } from '../styles/theme';

import Header from './App_containers/Header_container/Header';
import Footer from './App_containers/Footer_container/Footer';
import Page from './App_containers/Page_container/Page_container';
import Modal from './App_containers/Modal_container/Modal';


const StyledApp = styled.div`
  margin: auto;
  width: 800px;
  max-width: 90%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  /* border: ${ ({theme}) => theme.debugBorder}; */
`

const App = () => {
  const [isModal, setIsModal] = useState(false);
  const showModal = () => {
  };
  const hideModal = () => {
  };

  return (
    <BrowserRouter   getUserConfirmation={(message, callback) => {
      // this is the default behavior
      const allowTransition = window.confirm(message);
      callback(allowTransition);
    }}>
      <ThemeProvider theme={ theme } >
        <Fragment>
          <Helmet>
            <link href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap" rel="stylesheet" />
          </Helmet>
          <GlobalStyle />
          <StyledApp>
            {isModal && <Modal />}
            <Header />
            <Page/>
            <Footer />
          </StyledApp>
        </Fragment>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;