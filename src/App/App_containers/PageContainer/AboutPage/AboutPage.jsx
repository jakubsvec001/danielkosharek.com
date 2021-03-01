import React, { useState, useEffect } from "react";
import {
  StyledPage,
  StyledPageHeader,
  StyledPageTitle,
} from  "../PageStyles";

import { StyledText, StyledTextBackground, StyledFrameHero, StyledContainer, StyledTextContainer } from "./AboutStyles";
import statements from "../../../../assets/textContent/artistStatements";

const aboutHeroSrc = import(
  "../../../../assets/images/paintingSeries/paintingSeries_1000px/SelfPortrait_1000px.jpg"
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
  }, []);

  return (
    <StyledPage>
      <StyledPageHeader>
        <StyledPageTitle>ABOUT</StyledPageTitle>
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
        </StyledTextContainer>
      </StyledContainer>
      <hr />
    </StyledPage>
  );
};

export default AboutPage;
