import React from 'react';
import styled from 'styled-components';
import { useLocation, NavLink, Link } from 'react-router-dom';

import CollectionComponent from './CollectionComponent';

const StyledPage = styled.div`
  margin: ${({ theme }) => theme.paddingLarge};
`;

const PageHeader = styled.div`
  /* padding-left: ${({ theme }) => theme.paddingSmall}; */
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  /* border: 1px solid #ff00ff; */
  @media screen and (min-width: 600px) {
    flex-flow: row wrap;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: inherit;
  font-weight: 300;
  margin-left: 5px;
  margin-left: ${({ theme }) => theme.paddingSmall};
  &.active {
    font-weight: 600;
  }
`;

const StyledPageTitle = styled.h2`
  align-self: baseline;
  /* border: 1px solid #ff00ff; */
  padding-right: ${({ theme }) => theme.paddingLarge};
`;

const StyledSelector = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  /* border: 1px solid #ff00ff; */
  align-self: baseline;
`;

const CollectionSelector = () => {
  return (
    <StyledSelector>
      <StyledNavLink to="/collections/aMeasureOfTime" replace>A Measure of Time</StyledNavLink>
      <StyledNavLink to="/collections/landscapes" replace>Landscapes</StyledNavLink>
      <StyledNavLink to="/collections/additional" replace>Additional</StyledNavLink>
    </StyledSelector>
  );
};

const CollectionsPage = () => {
  return (
    <StyledPage>
      <PageHeader>
        <StyledPageTitle>Collections</StyledPageTitle>
        <CollectionSelector />
      </PageHeader>
      <hr />
      <CollectionComponent />
    </StyledPage>
  );
};

export default CollectionsPage;
