import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ZoomImg from 'react-image-zoom';

import {
  StyledPage,
  StyledPageHeader,
  StyledNavLink,
  StyledPageTitle,
  StyledSelector,
} from  "../pageStyles";

import { StyledText, StyledFrameHero, StyledContainer } from "./AboutStyles";

const aboutHeroSrc = import(
  "../../../../assets/images/additional/additional_1000px/SelfPortrait_1000px.jpg"
);



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
    // aboutHeroSrc.then((source) => {
    //   return setZoomComponent(() => {
    //     const zoomImageDim = 300;
    //     console.log(source.default);
    //     return (
    //       <StyledImageZoom>
    //         <ZoomImg
    //           width={zoomImageDim}
    //           height={zoomImageDim * 2}
    //           zoomWidth={zoomImageDim}
    //           img={source.default}
    //           zoomPosition="original"
    //           as="img"
    //         />
    //       </StyledImageZoom>
    //     );
    //   });
    // });
  }, []);

  return (
    <StyledPage>
      <StyledPageHeader>
        <StyledPageTitle>About</StyledPageTitle>
      </StyledPageHeader>
      <hr />
      <StyledContainer>
        {heroImageComponent}
        <StyledText>Daniel Kosharek lives in Santa Fe, NM, where he enjoys baking bread and staring into the void of time.</StyledText>
      </StyledContainer>
      <hr />
      {/* {zoomComponent} */}
    </StyledPage>
  );
};

export default AboutPage;
