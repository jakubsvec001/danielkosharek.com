import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledPage = styled.div`
  margin: ${({ theme }) => theme.paddingLarge};
  min-width: 450px;
`;

export const StyledPageHeader = styled.div`
  /* padding-left: ${({ theme }) => theme.paddingSmall}; */
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  /* border: 1px solid #ff00ff; */
  @media screen and (min-width: 600px) {
    flex-flow: row wrap;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: inherit;
  font-weight: 300;
  margin-left: 5px;
  margin-left: ${({ theme }) => theme.paddingSmall};
  &.active {
    font-weight: 600;
  }
`;

export const StyledPageTitle = styled.h1`
  align-self: baseline;
  /* border: 1px solid #ff00ff; */
  padding-right: ${({ theme }) => theme.paddingLarge};
`;

export const StyledSelector = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  /* border: 1px solid #ff00ff; */
  align-self: baseline;
`;