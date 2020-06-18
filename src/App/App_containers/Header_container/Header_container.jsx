import React from 'react';
import styled from 'styled-components';

import Title_component from './Title_component';

const StyledHeader = styled.main`
  background-color: white;
  height: 60px;
  flex-shrink: 0;
  border: 1px solid magenta;
`

const Header_container = () => {
  return (
    <StyledHeader>
      <Title_component />
    </StyledHeader>
  )
}

export default Header_container;