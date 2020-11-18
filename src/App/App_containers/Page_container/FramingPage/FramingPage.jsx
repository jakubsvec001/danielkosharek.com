import React, { useState, useEffect } from "react";

import styled from "styled-components";

import {
  StyledPage,
  StyledPageHeader,
  StyledNavLink,
  StyledPageTitle,
  StyledSelector,
} from "../../styles/pageStyles";
import { StyledText, StyledImageZoom } from "../../styles/framingStyles";
import ZoomImg from "react-image-zoom";

const framingHeroSrc = import(
  "../../../../assets/images/framing/framing_1000px/gallery_angledLeft_1000px.jpg"
);
const zoomImgSrc = import(
  "../../../../assets/images/framing/framing_1000px/frame_black_rusty_1000px.jpg"
);

export const StyledFrameHero = styled.img`
  object-fit: cover;
  min-width: 200px;
  min-height: 200px;
  width: 100%;
  flex: 1;
`;

const FramingPage = () => {
  const [heroImageComponent, setHeroImageComponent] = useState();
  const [zoomComponent, setZoomComponent] = useState();

  useEffect(() => {
    framingHeroSrc.then((source) =>
      setHeroImageComponent(
        <StyledFrameHero
          src={source.default}
          alt="an image of framed paintings"
        />
      )
    );
  }, []);

  return (
    <StyledPage>
      <StyledPageHeader>
        <StyledPageTitle>Framing</StyledPageTitle>
      </StyledPageHeader>
      <hr />

      {heroImageComponent}
      <hr />
      <StyledText>Framed in steel, or in the nude</StyledText>
      {zoomComponent}
    </StyledPage>
  );
};

export default FramingPage;
