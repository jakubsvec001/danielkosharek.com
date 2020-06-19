import React from 'react';
import styled from 'styled-components';


const StyledHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${ ({theme}) => theme.canvas};
  height: 100px;
  flex-shrink: 0;
  /* border: 1px solid magenta; */
  padding: ${ ({theme}) => theme.paddingLarge}
`

const StyledTitle = styled.h1`
  white-space: nowrap;
`

const Header_container = () => {
  return (
    <StyledHeader>
      <StyledTitle>Daniel Kosharek</StyledTitle>
      <div>Menu</div>
    </StyledHeader>
  )
}

export default Header_container;