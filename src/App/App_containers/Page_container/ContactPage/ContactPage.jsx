import React, { useState, useEffect } from "react";
import {
  StyledPage,
  StyledPageHeader,
  StyledNavLink,
  StyledPageTitle,
  StyledSelector,
} from  "../pageStyles";
import { StyledText, StyledFrameHero, StyledContainer, StyledTextContainer } from "./ContactStyles";

const aboutHeroSrc = import(
  "../../../../assets/images/additional/additional_1000px/SelfPortrait_1000px.jpg"
);



const ContactPage = () => {
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
  }, []);

  return (
    <StyledPage>
      <StyledPageHeader>
        <StyledPageTitle>About</StyledPageTitle>
      </StyledPageHeader>
      <hr />
      <StyledContainer>
        {heroImageComponent}
        <StyledTextContainer>
          <StyledText><strong>Daniel Kosharek lives in Santa Fe, NM, where he enjoys baking bread and painting.</strong></StyledText>
          <StyledText>For information about sales, contact daniel at: <em>danielkosharek(at)gmail(dot)com</em></StyledText>
        </StyledTextContainer>
      </StyledContainer>
      <hr />
    </StyledPage>
  );
};

export default ContactPage;
