import React from 'react';
import styled from 'styled-components';
import { Router, NavLink } from 'react-router-dom';


const StyledHeader = styled.header`
  /* border: 1px solid magenta; */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${ ({theme}) => theme.canvas};
  height: 100px;
  flex-shrink: 0;
  padding: ${ ({theme}) => theme.paddingLarge}
`

const StyledTitle = styled.h1`
  white-space: nowrap;
`
const StyledNavLink = styled(NavLink)`
  color: inherit;
`

const Header_container = () => {
  return (
    <StyledHeader>
      <StyledNavLink to="/"><StyledTitle>Daniel Kosharek</StyledTitle></StyledNavLink>
      <nav>
        <StyledNavLink to='/'>Collections</StyledNavLink>
        <StyledNavLink to='/framing'>Framing</StyledNavLink>
        <StyledNavLink to='/about' className='disabled-link'>About</StyledNavLink>
        <StyledNavLink to='/contact'>Contact</StyledNavLink>
      </nav>
    </StyledHeader>
  )
}

export default Header_container;