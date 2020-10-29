import React, { lazy, Suspense }from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';

const CollectionsPage = lazy(() => import('./CollectionsPage/CollectionsPage'));
const PageNotFoundPage = lazy(() => import('./PageNotFoundPage/PageNotFoundPage'));

const StyledPage = styled.main`
  /* border: 1px solid magenta; */
  flex-grow: 1;
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.canvas};
  padding: ${({ theme }) => theme.paddingSmall};
  flex-direction: column;
  display: flex;
  /* border: 1px solid #ff00ff; */
`;

const Page = () => {
  
  return (
    <StyledPage>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/collections'/>
          </Route>
          <Route path='/collections' exact component={CollectionsPage} />
          <Route path='/framing' exact component={()=><h1>Framing</h1>}/>
          <Route path='/about' exact component={()=><h1>About</h1>}/>
          <Route path='*' component={PageNotFoundPage} />
        </Switch>
      </Suspense>
    </StyledPage>
  );
};

export default Page;
