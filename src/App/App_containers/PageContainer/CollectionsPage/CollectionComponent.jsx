import React, { useState, useEffect, } from "react";
import ZoomImg from "react-image-zoom";

import CollectionImage from "./CollectionImage";
import {
  measureOfTimeList,
  additionalList,
  landscapeList,
} from "../../utilities/imageCollections";
import artistStatements from "../../../../assets/textContent/artistStatements";
import { StyledArtistStatement, StyledImageZoom, StyledText, StyledCollection, } from "./CollectionsStyles";

const CollectionComponent = ({ collection, actions, data }) => {
  const [imageList, setImageList] = useState([]);
  const [heroComponent, setHeroComponent] = useState([]);
  const [artistStatement, setArtistStatement] = useState([]);

  useEffect(() => {
    let collectionList;
    let heroImageSrc;
    let artistStatement;
    if (data.collection === "aMeasureOfTime") {
      collectionList = measureOfTimeList;
      heroImageSrc = import(
        "../../../../assets/images/measureOfTime/measureOfTime_500px/June.1.2015_500px.jpg"
      );
      setArtistStatement(artistStatements["aMeasureOfTime"]);
    } else if (data.collection === "landscapes") {
      collectionList = landscapeList;
      heroImageSrc = import(
        "../../../../assets/images/landscape/landscape_500px/LaCienega_500px.jpg"
      );
      setArtistStatement(artistStatements["landscape"]);
    } else if (data.collection === "additional") {
      collectionList = additionalList;
      heroImageSrc = import(
        "../../../../assets/images/additional/additional_500px/LesFleursOmises(TheMissingFlowers)_500pxSquare.jpg"
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
      image.src["300"].then((source) => {
        setImageList((prevState) => [
          ...prevState,
          <CollectionImage
            // src={source.default}
            // imageTitle={image.name}
            key={image.name}
            data={{...data, imageTitle: image.name, src: source.default }}
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
