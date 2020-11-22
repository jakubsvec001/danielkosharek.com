import React from 'react';
import styled from 'styled-components';
import { StyledImageContainer, StyledCollectionsImage, StyledImageCaption } from './imageStyles';

const CollectionImage = ({ src, title, data, actions }) => {
  return (
    <StyledImageContainer>
      <StyledCollectionsImage src={src} alt="a painting by Daniel Kosharek" onClick={actions.handleModalToggle} />
      <StyledImageCaption>{title}</StyledImageCaption>
    </StyledImageContainer>
  );
};

export default CollectionImage;