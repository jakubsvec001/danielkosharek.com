import React from 'react';
import styled from 'styled-components';
import ZoomImg from 'react-image-zoom';

import heroImage from './April.9.2011_1000px.jpg';
import collection1 from '../../../../assets/images/Measure_Of_Time_300px/April.30.2011_300px.jpg';
import collection2 from '../../../../assets/images/Measure_Of_Time_300px/December.17.2016_300px.jpg';
import collection3 from '../../../../assets/images/Measure_Of_Time_300px/July.17.2017_300px.jpg';
import collection4 from '../../../../assets/images/Measure_Of_Time_300px/July.23.2017_300px.jpg';
import collection5 from '../../../../assets/images/Measure_Of_Time_300px/July.9.2011_300px.jpg';
import collection6 from '../../../../assets/images/Measure_Of_Time_300px/June.1.2015_300px.jpg';

import CollectionsLink_component from './CollectionLink_component'

const zoomImageDim = 350;

const StyledArtistStatement = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: center;
  padding: ${({ theme }) => theme.paddingSmall};
  @media screen and (min-width: 550px) {
    flex-flow: row nowrap;
  }
`;

const StyledText = styled.div`
  display: inline;
  padding-left: ${({ theme }) => theme.paddingSmall};
`;

const StyledCollections = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const StyledH2 = styled.div`
  padding-left: ${({ theme }) => theme.paddingSmall };

`

const Landing_page = () => {
  return (
    <>
      <StyledArtistStatement>
      <ZoomImg
        width={zoomImageDim}
        height={zoomImageDim}
        zoomWidth={zoomImageDim}
        img={heroImage}
        zoomPosition="original"
        as="img"
      />
      <StyledText>
        <h3>A passion for the passage of time</h3>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit,
        </div>
      </StyledText>
      </StyledArtistStatement>
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
  );
};

export default Landing_page;
