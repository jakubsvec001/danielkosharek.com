import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CollectionComponent from './CollectionComponent';
import { StyledPage, StyledPageHeader, StyledNavLink, StyledPageTitle, StyledSelector, } from '../pageStyles';


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
      <StyledPageHeader>
        <StyledPageTitle>Collections</StyledPageTitle>
        <CollectionSelector />
      </StyledPageHeader>
      <hr />
      <Switch>
        <Route path="/collections/aMeasureOfTime" component={() => <CollectionComponent collection='aMeasureOfTime' />} />
        <Route path="/collections/landscapes" component={() => <CollectionComponent collection='landscapes' />} />
        <Route path="/collections/additional" component={() => <CollectionComponent collection='additional' />} />
      </Switch>
    </StyledPage>
  );
};

export default CollectionsPage;
