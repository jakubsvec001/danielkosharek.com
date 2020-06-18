import React from 'react';
import styled from 'styled-components';

import Title_component from './Title_component';

const StyledHeader = styled.main`
  display: flex;
  flex-flow: row nowrap;
  background-color: white;
  height: 60px;
  flex-shrink: 0;
  border: 1px solid magenta;
`

const Header_container = () => {
  return (
    <StyledHeader>
      <h1>Daniel Kosharek</h1>

    </StyledHeader>
  )
}

export default Header_container;