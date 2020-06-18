import React, { useState, useReducer, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { GlobalStyle } from '../styles/GlobalStyle';

import Header_container from './App_containers/Header_container/Header_container';
import Footer_container from './App_containers/Footer_container/Footer_container';
import Article_container from './App_containers/Article_container/Article_container';
import Modal_container from './App_containers/Modal_container/Modal_container';


// Define global styles

// Define App style layout
const StyledApp = styled.div`
  margin: auto;
  width: 700px;
  max-width: 90%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border: 1px solid magenta;
`

const App = () => {


  const [isModal, setIsModal] = useState(false);
  
  
  const showModal = () => {
  
  };
  
  const hideModal = () => {
  
  };

  return (
    <Fragment>
      <GlobalStyle />
      <StyledApp>
        {isModal && <Modal_container />}
        <Header_container />
        <Article_container>
          I'm the main article here.
        </Article_container>
        <Footer_container />
      </StyledApp>
    </Fragment>
  )
}

export default App;