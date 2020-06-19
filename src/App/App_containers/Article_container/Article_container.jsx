import React from 'react';
import styled from 'styled-components';

import { theme } from '../../../styles/theme';

import Landing_article from './Landing_article';

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
        <Landing_article />
      </StyledMain>
    </StyledArticle>
  );
};

export default Article;
