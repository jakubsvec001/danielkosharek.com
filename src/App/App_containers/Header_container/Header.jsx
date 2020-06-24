import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


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
  font-weight: 200;
  margin-left: 5px;
  &.active {
    font-weight: 400;
  }
`

const Header_container = () => {
  return (
    <StyledHeader>
      <StyledTitle>Daniel Kosharek</StyledTitle>
      <nav>
        <StyledNavLink to='/collections'>Collections</StyledNavLink>
        <StyledNavLink to='/framing'>Framing</StyledNavLink>
        <StyledNavLink to='/about'>About</StyledNavLink>
        <StyledNavLink to='/contact'>Contact</StyledNavLink>
      </nav>
    </StyledHeader>
  )
}

export default Header_container;