import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Styled404 = styled.div`
  /* border: 1px solid #ff00ff; */
  text-align: center;
  margin: auto;
`

const StyledItem = styled.div`

`

const PageNotFoundPage = () => {
  return (
    <Styled404>
      <h1>
        404
      </h1>
      <h2>
        page not found
      </h2>
    </Styled404>
  );
}

export default PageNotFoundPage