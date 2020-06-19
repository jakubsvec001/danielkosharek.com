import React from 'react';
import styled from 'styled-components';
import { Router, Link } from 'react-router-dom';


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
      <nav>
        <Link to="/">Menu</Link>
        <Link to='/about'>About</Link>
        <Link to='/framing'>Framing</Link>
      </nav>
    </StyledHeader>
  )
}

export default Header_container;