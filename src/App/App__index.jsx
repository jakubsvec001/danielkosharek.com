import React, { useState, useMemo } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from '../globalStyles/GlobalStyle';
import { globalStyleTheme } from '../globalStyles/globalStyleTheme';

import Header from './App_containers/Header_container/Header';
import Footer from './App_containers/Footer_container/Footer';
import PageContainer from './App_containers/Page_container/PageContainer';
import Modal from './App_containers/Modal_container/Modal';

const StyledApp = styled.div`
  margin: auto;
  width: 800px;
  max-width: 90%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const App = () => {
  const [isModal, setIsModal] = useState(false);
  const showModal = () => {
  };
  const hideModal = () => {
  };
  const handleModalToggle = () => {
    setIsModal(!isModal);
  };

  const actions = {
    handleModalToggle,
    setIsModal,
  };

  const data = {
    isModal,
  };

  return (
    <BrowserRouter>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap" rel="stylesheet" />
      </Helmet>
      <ThemeProvider theme={globalStyleTheme}>
        <GlobalStyle />
        {isModal && <Modal actions={actions} />}
        <StyledApp>
          <Header />
          <PageContainer actions={actions} data={data} />
          <Footer />
        </StyledApp>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
