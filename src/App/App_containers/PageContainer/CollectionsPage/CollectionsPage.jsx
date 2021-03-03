import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CollectionComponent from './CollectionComponent';
import { StyledPage, StyledPageHeader, StyledNavLink, StyledPageTitle, StyledSelector, } from '../PageStyles';

const CollectionSelector = () => {
  return (
    <StyledSelector>
      <StyledNavLink to="/collections/MeasureOfDays" replace>Measure Of Days</StyledNavLink>
      <StyledNavLink to="/collections/landscapes" replace>Landscapes</StyledNavLink>
      <StyledNavLink to="/collections/paintingSeries" replace>Painting Series</StyledNavLink>
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
        <Route path="/collections/MeasureOfDays" component={() => <CollectionComponent actions={actions} data={{ data, collection: 'MeasureOfDays' }} />} />
        <Route path="/collections/landscapes" component={() => <CollectionComponent actions={actions} data={{ data, collection: 'landscapes' }} />} />
        <Route path="/collections/paintingSeries" component={() => <CollectionComponent actions={actions} data={{ data, collection: 'paintingSeries' }} />} />
      </Switch>
    </StyledPage>
  );
};

export default CollectionsPage;
