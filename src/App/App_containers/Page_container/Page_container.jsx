import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';

import Landing_page from './LandingPage/LandingPage';
import PageNotFoundPage from './PageNotFoundPage/PageNotFoundPage';

const StyledPage = styled.main`
  /* border: 1px solid magenta; */
  flex-grow: 1;
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.canvas};
  padding: ${({ theme }) => theme.paddingSmall};
  flex-direction: column;
  display: flex;
  /* border: 1px solid #ff00ff; */
`;

const Page = () => {
  
  return (
    <StyledPage>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/collections'/>
        </Route>
        <Route path='/collections' exact component={Landing_page} />
        <Route path='/framing' exact component={()=><h1>Framing</h1>}/>
        <Route path='/about' exact component={()=><h1>About</h1>}/>
        <Route path='*' component={PageNotFoundPage} />
      </Switch>
    </StyledPage>
  );
};

export default Page;
