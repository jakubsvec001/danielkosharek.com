import React, { useState, useEffect } from "react";
import {
  StyledPage,
  StyledPageHeader,
  StyledPageTitle,
} from  "../PageStyles";

import { StyledText, StyledTextBackground, StyledFrameHero, StyledContainer, StyledTextContainer } from "./ContactStyles";

const contactHeroSrc = import(
  "../../../../assets/images/additional/additional_1000px/SelfPortrait_1000px.jpg"
);

const ContactPage = () => {
  const [heroImageComponent, setHeroImageComponent] = useState();
  const [zoomComponent, setZoomComponent] = useState();

  useEffect(() => {
    contactHeroSrc.then((source) =>
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
        <StyledPageTitle>CONTACT</StyledPageTitle>
      </StyledPageHeader>
      <hr />
      <StyledContainer>
        {heroImageComponent}
        <StyledTextContainer>
          <h2>Daniel Kosharek</h2>
          <StyledText>lives in Santa Fe, NM, where he enjoys baking bread and painting.</StyledText>
          <hr />
          <StyledText>For information about sales, contact Daniel at: </StyledText>
          <br />
          <StyledTextBackground><em>danielkosharek (at) gmail (dot) com</em></StyledTextBackground>
        </StyledTextContainer>
      </StyledContainer>
      <hr />
    </StyledPage>
  );
};

export default ContactPage;
