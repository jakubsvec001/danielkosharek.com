import React from 'react';
import styled from 'styled-components';

import ZoomImg from 'react-image-zoom'; 
import ContainerDimensions from 'react-container-dimensions';

import heroImage from './April.9.2011_1000px.jpg';

const StyledZoom = styled.div`
  width: 300;
  height: 300;
`

const Landing_article = () => {
  return (
    <ZoomImg width={300} height={300} zoomWidth={300} img={heroImage} zoomPosition='original' />
  )
};

export default Landing_article