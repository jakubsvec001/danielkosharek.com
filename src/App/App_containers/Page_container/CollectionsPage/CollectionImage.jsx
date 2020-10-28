import React from 'react';
import styled from 'styled-components';


const StyledCollectionsLink = styled.img`
  min-width: 175px;
  padding: 2%;
  flex-grow: 1;
  transition: 0.5s all ease;
  object-fit: cover;
  vertical-align: bottom;
  :hover {
    transform: scale(1.02);
    filter: blur(50%);
  }
`
const CollectionImage = ({image}) => {
  return (
    <StyledCollectionsLink src={image} alt='an artistic collection by Daniel Kosharek' />
  )
}

export default CollectionImage;