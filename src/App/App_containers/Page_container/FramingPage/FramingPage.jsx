import React, { useState, useEffect } from "react";

import styled from "styled-components";

import {
  StyledPage,
  StyledPageHeader,
  StyledNavLink,
  StyledPageTitle,
  StyledSelector,
} from "../pageStyles";
import { StyledText, StyledImageZoom } from "./framingStyles";
import ZoomImg from "react-image-zoom";

const framingHeroSrc = import(
  "../../../../assets/images/framing/framing_1000px/gallery_angledLeft_1000px.jpg"
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
    <StyledText>Paintings are available in <em>nude</em>, or framed in <em>raw steel</em></StyledText>
    <hr />
    </StyledPage>
  );
};

export default FramingPage;
