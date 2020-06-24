import React, { useState, useReducer, Fragment } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';


import { GlobalStyle } from '../styles/GlobalStyle';
import { theme } from '../styles/theme';

import Header_container from './App_containers/Header_container/Header';
import Footer_container from './App_containers/Footer_container/Footer';
import Page_container from './App_containers/Page_container/Page_container';
import Modal_container from './App_containers/Modal_container/Modal';


// Define global styles

// Define App style layout
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
    <BrowserRouter>
      <ThemeProvider theme={ theme } >
        <Fragment>
          <Helmet>
            <link href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap" rel="stylesheet" />
          </Helmet>
          <GlobalStyle />
          <StyledApp>
            {isModal && <Modal_container />}
            <Header_container />
            <Page_container/>
            <Footer_container />
          </StyledApp>
        </Fragment>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;