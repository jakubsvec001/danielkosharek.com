import React, { useState, useEffect, } from "react";
import ZoomImg from "react-image-zoom";

import CollectionImage from "./CollectionImage";
import {
  measureOfDaysList,
  paintingSeriesList,
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
    if (data.collection === "MeasureOfDays") {
      collectionList = measureOfDaysList
      heroImageSrc = import(
        "../../../../assets/images/measureOfDays/measureOfDays_500px/June.1.2015_500px.jpg"
      );
      setArtistStatement(artistStatements["MeasureOfDays"]);
    } else if (data.collection === "landscapes") {
      collectionList = landscapeList;
      heroImageSrc = import(
        "../../../../assets/images/landscape/landscape_500px/LaCienega_500px.jpg"
      );
      setArtistStatement(artistStatements["landscape"]);
    } else if (data.collection === "paintingSeries") {
      collectionList = paintingSeriesList;
      heroImageSrc = import(
        "../../../../assets/images/paintingSeries/paintingSeries_500px/LesFleursOmises(TheMissingFlowers)_500pxSquare.jpg"
      );
      setArtistStatement(artistStatements["paintingSeries"]);
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
    if (data.collection === "MeasureOfDays") {
      const sortedList = collectionList.slice();
      console.log(sortedList)
      sortedList.sort((a,b) => {
        let result;
        if (a.date < b.date) {
          result = -1;
        } else {
          result = 1;
        }
        return result;
      })
      console.log(collectionList)
      sortedList.forEach((image) => {
        image.src["300"].then((source) => {
          setImageList((prevState) => [
            ...prevState,
            <CollectionImage
              key={image.name}
              data={{...data, collectionList, imageTitle: image.name, src: source.default }}
              actions={actions}
            />,
          ]);
        });
      })
    } else {
      collectionList.forEach((image) => {
        image.src["300"].then((source) => {
          console.log(data)
          setImageList((prevState) => [
            ...prevState,
            <CollectionImage
              key={image.name}
              data={{...data, collectionList, imageTitle: image.name, src: source.default }}
              actions={actions}
            />,
          ]);
        });
      })
      
    }
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
