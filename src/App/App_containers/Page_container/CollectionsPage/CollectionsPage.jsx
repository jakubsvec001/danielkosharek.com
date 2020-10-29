import React from 'react';
import styled from 'styled-components';
import CollectionComponent from './CollectionComponent';


import collection1 from '../../../../assets/images/Measure_Of_Time/Measure_Of_Time_300px/April.30.2011_300px.jpg';
import collection2 from '../../../../assets/images/Measure_Of_Time/Measure_Of_Time_300px/December.17.2016_300px.jpg';
import collection3 from '../../../../assets/images/Measure_Of_Time/Measure_Of_Time_300px/July.17.2017_300px.jpg';
import collection4 from '../../../../assets/images/Measure_Of_Time/Measure_Of_Time_300px/July.23.2017_300px.jpg';
import collection5 from '../../../../assets/images/Measure_Of_Time/Measure_Of_Time_300px/July.9.2011_300px.jpg';
import collection6 from '../../../../assets/images/Measure_Of_Time/Measure_Of_Time_300px/June.1.2015_300px.jpg';

import CollectionImage from './CollectionImage';


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

const StyledButton = styled.a`
  background-color: ${({ theme }) => theme.canvas};
  margin-right: ${({ theme }) => theme.paddingLarge};
`;

const CollectionSelector = () => {
  return (
    <StyledSelector>
      <StyledButton>Measure of Time</StyledButton>
      <StyledButton>Landscapes</StyledButton>
      <StyledButton>Additional</StyledButton>
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
