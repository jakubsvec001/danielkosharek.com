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

const CollectionsPage = ({ data, actions }) => {
  // add state and use useMemo()
  return (
    <StyledPage>
      <StyledPageHeader>
        <StyledPageTitle>COLLECTIONS</StyledPageTitle>
        <CollectionSelector />
      </StyledPageHeader>
      <hr />
      <Switch>
        <Route path="/collections/aMeasureOfTime" component={() => <CollectionComponent actions={actions} data={{ data, collection: 'aMeasureOfTime' }} />} />
        <Route path="/collections/landscapes" component={() => <CollectionComponent actions={actions} data={{ data, collection: 'landscapes' }} />} />
        <Route path="/collections/additional" component={() => <CollectionComponent actions={actions} data={{ data, collection: 'additional' }} />} />
      </Switch>
    </StyledPage>
  );
};

export default CollectionsPage;
