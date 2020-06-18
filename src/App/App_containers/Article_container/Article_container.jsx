import React from 'react';
import styled from 'styled-components';


const StyledArticle = styled.main`
  border: 1px solid magenta;
  flex-grow: 1;
  height: 100%;
  margin-top: 2rem;
  background-color: white;
`

const StyledMain = styled.article`
  min-height: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: stretch
`

const Article = ({children}) => {
  return(
    <StyledArticle>
      <StyledMain>
        {children}
      </StyledMain>
    </StyledArticle>
  )
}

export default Article;
