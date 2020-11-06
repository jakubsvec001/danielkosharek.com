import React from 'react';
import styled from 'styled-components';

const StyledImageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-basis: 100px;
  cursor: pointer;
  flex-flow: column wrap;
  margin: 2%;
  height: 100%;
  width: 100%;
  transition: 0.25s all ease;
  :hover {
    transform: scale(1.02);
  }
`;

const StyledCollectionsImage = styled.img`
  object-fit: cover;
  min-width: 200px;
  min-height: 200px;
  width: 100%;
  flex: 1;
`;

const StyledImageCaption = styled.figcaption`
  display: flex;
  width: 100%;
  padding: 4px;
`;

const CollectionImage = ({ src }) => {
  return (
    <StyledImageContainer>
      <StyledCollectionsImage src={src} alt="a painting by Daniel Kosharek" />
      <StyledImageCaption>Title of thing and more stuff written here</StyledImageCaption>
    </StyledImageContainer>
  );
};

export default CollectionImage;