import React from 'react';
import styled from 'styled-components';

const StyledImageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-basis: 100px;
  cursor: pointer;
  flex-flow: column wrap;
  margin: 2%;
  /* border: 1px solid #f0f; */
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
  /* background-color: ${({ theme }) => theme.secondary}; */
  display: flex;
  width: 100%;
  padding: 4px;
`;

const CollectionImage = ({ image }) => {
  return (
    <StyledImageContainer>
      <StyledCollectionsImage src={image} alt='a painting by Daniel Kosharek' />
      <StyledImageCaption>Title of thing and more stuff written here</StyledImageCaption>
    </StyledImageContainer>
  );
};

export default CollectionImage;