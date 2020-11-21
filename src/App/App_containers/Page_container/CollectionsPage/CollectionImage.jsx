import React from 'react';
import styled from 'styled-components';
import { StyledImageContainer, StyledCollectionsImage, StyledImageCaption } from './imageStyles';

const CollectionImage = ({ src, title }) => {
  return (
    <StyledImageContainer>
      <StyledCollectionsImage src={src} alt="a painting by Daniel Kosharek" />
      <StyledImageCaption>{title}</StyledImageCaption>
    </StyledImageContainer>
  );
};

export default CollectionImage;