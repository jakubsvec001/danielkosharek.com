import React, { useState, useEffect } from "react";
import {
  StyledPage,
  StyledPageHeader,
  StyledPageTitle,
} from  "../PageStyles";

import { StyledText, StyledTextBackground, StyledFrameHero, StyledContainer, StyledTextContainer } from "./ContactStyles";
import statements from "../../../../assets/textContent/artistStatements";

const contactHeroSrc = import(
  "../../../../assets/images/paintingSeries/paintingSeries_1000px/SelfPortrait_1000px.jpg"
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
          <StyledText>{statements.personalStatement.statementPart1}</StyledText><hr />
          <StyledText>{statements.personalStatement.statementPart2}</StyledText><hr />
          <StyledText>{statements.personalStatement.statementPart3}</StyledText><hr />
          <StyledText>{statements.personalStatement.statementPart4}</StyledText><hr />
          <hr />
          <StyledText>For information about sales, contact Daniel at: </StyledText><hr/>
          <br />
          <StyledTextBackground><em>danielkosharek (at) gmail (dot) com</em></StyledTextBackground>
        </StyledTextContainer>
      </StyledContainer>
      <hr />
    </StyledPage>
  );
};

export default ContactPage;
