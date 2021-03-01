import React, { useState, useEffect } from "react";
import {
  StyledPage,
  StyledPageHeader,
  StyledPageTitle,
} from  "../PageStyles";

import { StyledText, StyledTextBackground, StyledFrameHero, StyledContainer, StyledTextContainer } from "./ContactStyles";
import statements from "../../../../assets/textContent/artistStatements";

const contactHeroSrc = import(
  "../../../../assets/images/landscape/landscape_750px/RoadToRoy_750px.jpg"
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
        <StyledTextContainer>
          <StyledText>For information about sales, contact Daniel at: </StyledText><hr/>
          <br />
          <StyledTextBackground><em>danielkosharek (at) gmail (dot) com</em></StyledTextBackground>
        </StyledTextContainer>
        {heroImageComponent}
      </StyledContainer>
      <hr />
    </StyledPage>
  );
};

export default ContactPage;
