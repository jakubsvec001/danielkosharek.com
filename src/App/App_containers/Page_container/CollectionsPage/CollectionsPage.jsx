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

import CollectionImage from './CollectionImage';

const zoomImageDim = 300;

const StyledPage = styled.div`
  padding: ${({ theme }) => theme.paddingSmall};
`;

const StyledArtistStatement = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: center;
  @media screen and (min-width: 550px) {
    flex-flow: row nowrap;
  }
`;

const StyledText = styled.div`
  display: inline;
  padding-left: ${({ theme }) => theme.paddingSmall};
`;

const StyledCollection = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const StyledH2 = styled.div`
  padding-left: ${({ theme }) => theme.paddingSmall};
`;

const StyledSelector = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

const StyledButton = styled.div`
  background-color: ${({ theme }) => theme.canvas};

`;

const CollectionSelector = () => {
  return (
    <StyledSelector>
      <StyledButton>button1</StyledButton>
      <StyledButton>button2</StyledButton>
      <StyledButton>button2</StyledButton>
      <StyledButton>button2</StyledButton>
    </StyledSelector>
  );
};

const CollectionsPage = () => {
  return (
    <StyledPage>
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit,
          </div>
        </StyledText>
      </StyledArtistStatement>
      <StyledH2 as="h2">Collections</StyledH2>
      {/* collections navigator */}
      <CollectionSelector />
      {/* collections navigator */}
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
