import React from 'react';
import styled from 'styled-components';
import ZoomImg from 'react-image-zoom';

import heroImage from './April.9.2011_1000px.jpg';

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


const ArtistStatement_component = () => {
  return (
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
  );
};

export default ArtistStatement_component;
