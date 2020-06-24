import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import { theme } from '../../../styles/theme';

import Landing_article from './LandingArticle_container/Landing_article';

const StyledArticle = styled.main`
  /* border: 1px solid magenta; */
  flex-grow: 1;
  height: 100%;
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.canvas};
  padding: ${({ theme }) => theme.paddingSmall};
`;

const StyledMain = styled.article`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Article = ({ children }) => {
  return (
    <StyledArticle>
      <StyledMain>
        <Switch>
          <Route path='/' exact component={Landing_article} />
          <Route path='/framing' exact component={()=><h1>Framing</h1>}/>
          <Route path='/about' exact component={()=><h1>About</h1>}/>
          <Route path='*' component={()=><h3>404</h3>} />
        </Switch>
      </StyledMain>
    </StyledArticle>
  );
};

export default Article;
