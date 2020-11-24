import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CollectionComponent from './CollectionComponent';
import { StyledPage, StyledPageHeader, StyledNavLink, StyledPageTitle, StyledSelector, } from '../PageStyles';


const CollectionSelector = () => {
  return (
    <StyledSelector>
      <StyledNavLink to="/collections/aMeasureOfTime" replace>A Measure of Time</StyledNavLink>
      <StyledNavLink to="/collections/landscapes" replace>Landscapes</StyledNavLink>
      <StyledNavLink to="/collections/additional" replace>Additional</StyledNavLink>
    </StyledSelector>
  );
};

const CollectionsPage = ({ actions, data }) => {
  // add state and use useMemo()
  return (
    <StyledPage>
      <StyledPageHeader>
        <StyledPageTitle>COLLECTIONS</StyledPageTitle>
        <CollectionSelector />
      </StyledPageHeader>
      <hr />
      <Switch>
        <Route path="/collections/aMeasureOfTime" component={() => <CollectionComponent collection='aMeasureOfTime' actions={actions} data={data} />} />
        <Route path="/collections/landscapes" component={() => <CollectionComponent collection='landscapes' actions={actions} data={data} />} />
        <Route path="/collections/additional" component={() => <CollectionComponent collection='additional' actions={actions} data={data} />} />
      </Switch>
    </StyledPage>
  );
};

export default CollectionsPage;
