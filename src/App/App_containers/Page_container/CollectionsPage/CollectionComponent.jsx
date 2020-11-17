import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ZoomImg from "react-image-zoom";

import CollectionImage from "./CollectionImage";
import { measureOfTimeList, additionalList, landscapeList } from "../../utilities/imageCollections"


const StyledArtistStatement = styled.div`
  display: flex;
  flex-flow: column-reverse nowrap;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 700px) {
    flex-flow: row nowrap;
    align-content: center;
    justify-content: center;
  }
`;

const StyledImageZoom = styled.div`
  margin: ${({ theme }) => theme.paddingSmall};
  display: none;
  cursor: crosshair;
  @media screen and (min-width: 700px) {
    display: inline-block;
  }
`;

const StyledText = styled.div`
  display: inline;
  max-width: 450px;
  padding-left: ${({ theme }) => theme.paddingSmall};
  padding-right: ${({ theme }) => theme.paddingSmall};
  margin-bottom: ${({ theme }) => theme.paddingLarge};
  text-align: justify;
`;

const StyledCollection = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const CollectionComponent = ({ collection }) => {
  const [imageList, setImageList] = useState([]);
  const [heroComponent, setHeroComponent] = useState([]);

  useEffect(() => {
    let collectionList;
    let heroImageSrc;
    if (collection === "aMeasureOfTime") {
      collectionList = measureOfTimeList;
      heroImageSrc = import('../../../../assets/images/measureOfTime/measureOfTime_1000px/June.1.2015_1000px.jpg');
    } else if (collection === "landscapes") {
      collectionList = landscapeList;
      heroImageSrc = import('../../../../assets/images/landscape/landscape_1000px/LaCienega_1000px.jpg');
    } else if (collection === "additional") {
      collectionList = additionalList;
      heroImageSrc = import('../../../../assets/images/additional/additional_1000px/LesFleursOmises(TheMissingFlowers)_1000pxSquare.jpg');
    }
    heroImageSrc
      .then((source) => {
        const zoomImageDim = 300;
        console.log(source)
        setHeroComponent(()=>(
          <StyledImageZoom>
            <ZoomImg
              width={zoomImageDim}
              height={zoomImageDim}
              zoomWidth={zoomImageDim}
              img={source.default}
              zoomPosition="original"
              as="img"
            />
          </StyledImageZoom>
        ));
      })
      .catch((e) => console.error(e))
    collectionList.forEach(((image) => {
      image.src['1000'].then((source) => {
        setImageList((prevState) => [...prevState, <CollectionImage src={source.default} title={image.name} key={image.name} />]);
      });
    }));
  }, []);

  return (
    <>
      <StyledArtistStatement>
        {heroComponent}
        <StyledText>
          <h2>a measure of time</h2>
          <div>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. duis aute irure dolor in
            reprehenderit in voluptate velit,
          </div>
        </StyledText>
      </StyledArtistStatement>
      <hr />
      <StyledCollection>
        {imageList}
      </StyledCollection>
    </>
  );
};

export default CollectionComponent;
