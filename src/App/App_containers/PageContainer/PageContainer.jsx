import React, { lazy, Suspense }from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';

const CollectionsPage = lazy(() => import('./CollectionsPage/CollectionsPage'));
const PageNotFoundPage = lazy(() => import('./PageNotFoundPage/PageNotFoundPage'));
const FramingPage = lazy(() => import('./FramingPage/FramingPage.jsx'));
const ContactPage = lazy(() => import('./ContactPage/ContactPage'));

const StyledPage = styled.main`
  flex-grow: 1;
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.canvas};
  padding: ${({ theme }) => theme.paddingSmall};
  flex-direction: column;
  display: flex;
`;

const PageContainer = ({ data, actions }) => {

  return (
    <StyledPage>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/collections/MeasureOfDays'/>
          </Route>
          <Route path='/collections' exact>
            <Redirect to='/collections/MeasureOfDays'/>
          </Route>
          <Route path='/collections' component={() => <CollectionsPage data={data} actions={actions} />} />
          <Route path='/framing' component={FramingPage} />
          <Route path='/contact' component={ContactPage} />
          <Route path='*' component={PageNotFoundPage} />
        </Switch>
      </Suspense>
    </StyledPage>
  );
};

export default PageContainer;
