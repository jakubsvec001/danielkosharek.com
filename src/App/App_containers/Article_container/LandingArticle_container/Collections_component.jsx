import React from 'react';
import styled from 'styled-components';

import CollectionsLink_component from './CollectionLink_component'

import collection1 from '../../../../assets/images/Measure_Of_Time_300px/April.30.2011_300px.jpg';
import collection2 from '../../../../assets/images/Measure_Of_Time_300px/December.17.2016_300px.jpg';
import collection3 from '../../../../assets/images/Measure_Of_Time_300px/July.17.2017_300px.jpg';
import collection4 from '../../../../assets/images/Measure_Of_Time_300px/July.23.2017_300px.jpg';
import collection5 from '../../../../assets/images/Measure_Of_Time_300px/July.9.2011_300px.jpg';
import collection6 from '../../../../assets/images/Measure_Of_Time_300px/June.1.2015_300px.jpg';



const StyledCollections = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const StyledH2 = styled.div`
  padding-left: ${({ theme }) => theme.paddingSmall };

`


const Collections_component = () => {
  return (
    <>
    <StyledH2 as='h2'>Collections</StyledH2>
    <StyledCollections>
      <CollectionsLink_component image={collection1} />
      <CollectionsLink_component image={collection2} />
      <CollectionsLink_component image={collection3} />
      <CollectionsLink_component image={collection4} />
      <CollectionsLink_component image={collection5} />
      <CollectionsLink_component image={collection6} />
    </StyledCollections>
    </>
  )
}

export default Collections_component;