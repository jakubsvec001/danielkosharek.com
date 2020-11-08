import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ZoomImg from "react-image-zoom";
import { useLocation } from "react-router-dom";

import CollectionImage from "./CollectionImage";
import { measureOfTimeList, additionalList, landscapeList } from "../../utilities/imageCollections"
// import generateImageCollection from "../../utilities/generateImageCollection";

import heroImage from "./April.9.2011_1000px.jpg";

const zoomImageDim = 300;

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


const CollectionComponent = () => {
  const location = useLocation();
  const pathName = location.pathname;
  let imageCollectionPromiseList;
  const [imageList, setImageList] = useState([]);
  const [imageComponentList, setImageComponentList] = useState([]);

  useEffect(() => {
    let list;
    if (pathName === "/collections/aMeasureOfTime") {
      list = measureOfTimeList;
    } else if (pathName === "/collections/landscapes") {
      list = landscapeList;
    } else if (pathName === "/collections/additional") {
      list = additionalList;
    }
    list.forEach(((image) => {
      image.src["300"].then((source)=>{
        console.log(source.default)
        setImageList((prevState) => {
          return [...prevState, <CollectionImage src={source.default} key={image.name} />]
        })
      })
    }));
  }, []);

  console.log(imageList)
  // useEffect(() => {
  //   setImageComponentList(() => {
  //     return imageList.map((src, idx) => <CollectionImage image={src} key={src} />)
  //   })
  // }, [imageList]);

  // console.log(imageComponentList);
  // setImageList((prevState) => {
  //   return Promise.all(imageCollectionPromiseList)
  //   .then((collection) => {
  //     console.log(collection);
  //     return collection.map((image, idx) => (
  //       <CollectionImage image={image} key={idx} />
  //     ));
  //   })
  //   .catch((e) => console.error("error fetching images", e));
  // })
  return (
    <>
      <StyledArtistStatement>
        <StyledImageZoom>
          <ZoomImg
            width={zoomImageDim}
            height={zoomImageDim}
            zoomWidth={zoomImageDim}
            img={heroImage}
            zoomPosition="original"
            as="img"
          />
        </StyledImageZoom>
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
