import React from 'react';
import styled from 'styled-components';
import { Router, NavLink } from 'react-router-dom';


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
      <NavLink to="/"><StyledTitle>Daniel Kosharek</StyledTitle></NavLink>
      <nav>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/framing'>Framing</NavLink>
      </nav>
    </StyledHeader>
  )
}

export default Header_container;