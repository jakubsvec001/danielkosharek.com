import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledHeader = styled.header`
  /* border: 1px solid magenta; */
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: baseline;
  background-color: ${({ theme }) => theme.canvas};
  flex-shrink: 0;
  padding: ${({ theme }) => theme.paddingLarge};
  position: sticky;
  top: 0;
  z-index: 1000;
  min-height: 80px;
  /* opacity: 95%; */
  @media screen and (min-width: 600px) {
    flex-flow: row wrap;
  }
`;

const StyledTitle = styled.h1`
  white-space: nowrap;
  margin-right: ${({ theme }) => theme.paddingSmall};
`;
const StyledNavLink = styled(NavLink)`
  color: inherit;
  font-weight: 300;
  margin-left: 5px;
  margin-left: ${({ theme }) => theme.paddingSmall};
  &.active {
    font-weight: 400;
  }
`;

const HeaderContainer = () => {
  return (
    <StyledHeader>
      <StyledNavLink to="/collections">
        <StyledTitle>Daniel Kosharek</StyledTitle>
      </StyledNavLink>
      <nav>
        <StyledNavLink to="/collections">Collections</StyledNavLink>
        <StyledNavLink to="/framing">Framing</StyledNavLink>
        <StyledNavLink to="/about">About</StyledNavLink>
        <StyledNavLink to="/contact">Contact</StyledNavLink>
      </nav>
    </StyledHeader>
  );
};

export default HeaderContainer;
