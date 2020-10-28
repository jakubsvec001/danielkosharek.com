import React from 'react';
import styled from 'styled-components';
import ZoomImg from 'react-image-zoom';

import heroImage from './April.9.2011_1000px.jpg';
import collection1 from '../../../../assets/images/Measure_Of_Time/Measure_Of_Time_300px/April.30.2011_300px.jpg';
import collection2 from '../../../../assets/images/Measure_Of_Time/Measure_Of_Time_300px/December.17.2016_300px.jpg';
import collection3 from '../../../../assets/images/Measure_Of_Time/Measure_Of_Time_300px/July.17.2017_300px.jpg';
import collection4 from '../../../../assets/images/Measure_Of_Time/Measure_Of_Time_300px/July.23.2017_300px.jpg';
import collection5 from '../../../../assets/images/Measure_Of_Time/Measure_Of_Time_300px/July.9.2011_300px.jpg';
import collection6 from '../../../../assets/images/Measure_Of_Time/Measure_Of_Time_300px/June.1.2015_300px.jpg';

import CollectionImage from './CollectionImage';

const zoomImageDim = 300;

const StyledPage = styled.div`
  margin: ${({ theme }) => theme.paddingSmall};
`;

const StyledArtistStatement = styled.div`
  display: flex;
  flex-flow: column-reverse nowrap;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 700px) {
    flex-flow: row nowrap;
    align-content: center;
    justify-content: center;
  }
`;

const StyledImageZoom = styled.div`
  margin: ${({ theme }) => theme.paddingSmall}
`;

const StyledText = styled.div`
  display: inline;
  max-width: 450px;
  padding-left: ${({ theme }) => theme.paddingSmall};
  margin-bottom: ${({ theme }) => theme.paddingLarge};
`;

const StyledCollection = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
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
  flex-flow: row wrap;
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
      {/* collections navigator */}
      {/* collections navigator */}
      <hr/>
      <StyledArtistStatement>
        <StyledImageZoom>
          <ZoomImg
            width={zoomImageDim}
            height={zoomImageDim}
            zoomWidth={zoomImageDim}
            img={heroImage}
            zoomPosition="original"
            as="img"
          />
        </StyledImageZoom>
        <StyledText>
          <h2>A Measure of Time</h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit,
          </div>
        </StyledText>
      </StyledArtistStatement>
      <hr/>
      <StyledCollection>
        <CollectionImage image={collection1} />
        <CollectionImage image={collection2} />
        <CollectionImage image={collection3} />
        <CollectionImage image={collection4} />
        <CollectionImage image={collection5} />
        <CollectionImage image={collection6} />
      </StyledCollection>
    </StyledPage>
  );
};

export default CollectionsPage;
