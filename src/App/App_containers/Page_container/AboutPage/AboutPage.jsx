import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ZoomImg from 'react-image-zoom';

import {
  StyledPage,
  StyledPageHeader,
  StyledNavLink,
  StyledPageTitle,
  StyledSelector,
} from "../../styles/pageStyles";

import { StyledText, StyledImageZoom } from "../../styles/framingStyles";

const aboutHeroSrc = import(
  "../../../../assets/images/additional/additional_1000px/SelfPortrait_1000px.jpg"
);

const zoomImgSrc = import(
  "../../../../assets/images/framing/framing_1000px/frame_black_rusty_1000px.jpg"
);

export const StyledFrameHero = styled.img`
  object-fit: cover;
  min-width: 200px;
  min-height: 200px;
  /* width: 100%; */
  flex: 1;
`;

const AboutPage = () => {
  const [heroImageComponent, setHeroImageComponent] = useState();
  const [zoomComponent, setZoomComponent] = useState();

  useEffect(() => {
    aboutHeroSrc.then((source) =>
      setHeroImageComponent(
        <StyledFrameHero
          src={source.default}
          alt="an image of framed paintings"
        />
      )
    );
    aboutHeroSrc.then((source) => {
      return setZoomComponent(() => {
        const zoomImageDim = 300;
        console.log(source.default);
        return (
          <StyledImageZoom>
            <ZoomImg
              width={zoomImageDim}
              height={zoomImageDim * 2}
              zoomWidth={zoomImageDim}
              img={source.default}
              zoomPosition="original"
              as="img"
            />
          </StyledImageZoom>
        );
      });
    });
  }, []);

  return (
    <StyledPage>
      <StyledPageHeader>
        <StyledPageTitle>About</StyledPageTitle>
      </StyledPageHeader>
      <hr />

      {heroImageComponent}
      <hr />
      {zoomComponent}
      <StyledText>Framed in steel, or in the nude</StyledText>
    </StyledPage>
  );
};

export default AboutPage;
