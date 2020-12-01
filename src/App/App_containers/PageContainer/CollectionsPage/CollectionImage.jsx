import React from 'react';
import { StyledImageContainer, StyledCollectionsImage, StyledImageCaption } from './imageStyles';

const CollectionImage = ({ src, title, actions }) => {
  actions.handleModalToggle = () => {}; // delete to implement modal controls onClick

  return (
    <StyledImageContainer>
      <StyledCollectionsImage src={src} alt="a painting by Daniel Kosharek" onClick={actions.handleModalToggle} />
      <StyledImageCaption>{title}</StyledImageCaption>
    </StyledImageContainer>
  );
};

export default CollectionImage;