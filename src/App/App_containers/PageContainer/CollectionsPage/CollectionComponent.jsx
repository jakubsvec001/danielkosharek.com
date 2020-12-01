import React, { useState, useEffect } from "react";
import ZoomImg from "react-image-zoom";

import CollectionImage from "./CollectionImage";
import {
  measureOfTimeList,
  additionalList,
  landscapeList,
} from "../../utilities/imageCollections";
import artistStatements from "../../../../assets/textContent/artistStatements";
import { StyledArtistStatement, StyledImageZoom, StyledText, StyledCollection, } from "./CollectionStyles";

const CollectionComponent = ({ collection, actions, data }) => {
  const [imageList, setImageList] = useState([]);
  const [heroComponent, setHeroComponent] = useState([]);
  const [artistStatement, setArtistStatement] = useState([]);

  useEffect(() => {
    let collectionList;
    let heroImageSrc;
    let artistStatement;
    if (collection === "aMeasureOfTime") {
      collectionList = measureOfTimeList;
      heroImageSrc = import(
        "../../../../assets/images/measureOfTime/measureOfTime_1000px/June.1.2015_1000px.jpg"
      );
      setArtistStatement(artistStatements["aMeasureOfTime"]);
    } else if (collection === "landscapes") {
      collectionList = landscapeList;
      heroImageSrc = import(
        "../../../../assets/images/landscape/landscape_1000px/LaCienega_1000px.jpg"
      );
      setArtistStatement(artistStatements["landscape"]);
    } else if (collection === "additional") {
      collectionList = additionalList;
      heroImageSrc = import(
        "../../../../assets/images/additional/additional_1000px/LesFleursOmises(TheMissingFlowers)_1000pxSquare.jpg"
      );
      setArtistStatement(artistStatements["additional"]);
    }

    heroImageSrc
      .then((source) => {
        const zoomImageDim = 300;
        setHeroComponent(() => (
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
      .catch((e) => console.error(e));
    collectionList.forEach((image) => {
      image.src["1000"].then((source) => {
        setImageList((prevState) => [
          ...prevState,
          <CollectionImage
            src={source.default}
            title={image.name}
            key={image.name}
            data={data}
            actions={actions}
          />,
        ]);
      });
    });
  }, []);

  return (
    <>
      <StyledArtistStatement>
        {heroComponent}
        <StyledText>
          <h2>{artistStatement.title}</h2>
          <h3>{artistStatement.statement}</h3>
        </StyledText>
      </StyledArtistStatement>
      <hr />
      <StyledCollection>{imageList}</StyledCollection>
    </>
  );
};

export default CollectionComponent;
