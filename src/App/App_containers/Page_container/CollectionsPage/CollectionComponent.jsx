import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ZoomImg from "react-image-zoom";
import { useLocation } from "react-router-dom";

import CollectionImage from "./CollectionImage";

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

const landscapeList = [
  {
    name: "Crows In The Orchard",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/landscape/landscape_100px/CrowsInTheOrchard_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/landscape/landscape_300px/_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/landscape/landscape_1000px/_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/landscape/_2000px/landscapes_2000px.jpg"),
    },
  },
  {
    name: "Into Diablo Canyon",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/landscape/landscape_100px/_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/landscape/landscape_300px/_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/landscape/landscape_1000px/_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/landscape/landscape_2000px/_2000px.jpg"),
    },
  },
  {
    name: "La Cienega",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/landscape/landscape_100px/_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/landscape/landscape_300px/_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/landscape/landscape_1000px/_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/landscape/landscape_2000px/_2000px.jpg"),
    },
  },
  {
    name: "Message In The Sky",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/landscape/landscape_100px/_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/landscape/landscape_300px/_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/landscape/landscape_1000px/_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/landscape/landscape_2000px/_2000px.jpg"),
    },
  },
  {
    name: "Road To Roy",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/landscape/landscape_100px/_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/landscape/landscape_300px/_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/landscape/landscape_1000px/_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/landscape/landscape_2000px/_2000px.jpg"),
    },
  },
  {
    name: "Sliver Of River",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/landscape/landscape_100px/_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/landscape/landscape_300px/_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/landscape/landscape_1000px/_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/landscape/landscape_2000px/_2000px.jpg"),
    },
  },
  {
    name: "Storm Over Grand Canyon",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/landscape/landscape_100px/_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/landscape/landscape_300px/_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/landscape/landscape_1000px/_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/landscape/_2000px/landscape_2000px.jpg"),
    },
  },
];

const additionalList = [
  {
    name: "Les Fleurs Omises (The Missing Flowers)",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/additional/additional_100px/LesFleursOmises(TheMissingFlowers)_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/additional/additional_300px/LesFleursOmises(TheMissingFlowers)_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/additional/additional_1000px/LesFleursOmises(TheMissingFlowers)_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/additional/additional_2000px/LesFleursOmises(TheMissingFlowers)_2000px.jpg"),
    },
  },
  {
    name: "Self Portrait",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/additional/additional_100px/SelfPortrait_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/additional/additional_300px/SelfPortrait_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/additional/additional_1000px/SelfPortrait_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/additional/additional_2000px/SelfPortrait_2000px.jpg"),
    },
  },
  {
    name: "Storyboard Page",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/additional/additional_100px/StoryBoardPage_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/additional/additional_300px/StoryBoardPage_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/additional/additional_1000px/StoryBoardPage_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/additional/additional_2000px/StoryBoardPage_2000px.jpg"),
    },
  },
];

const measureOfTimeList = [
  {
    name: "April 9th 2011",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_100px/April.9.2011_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_300px/April.9.2011_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_1000px/April.9.2011_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_2000px/April.9.2011_2000px.jpg"),
    },
  },
  {
    name: "April 30th 2011",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_100px/April.30.2011_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_300px/April.30.2011_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_1000px/April.30.2011_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_2000px/April.30.2011_2000px.jpg"),
    },
  },
  {
    name: "May 6th 2011",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_100px/May.6.2011_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_300px/May.6.2011_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_1000px/May.6.2011_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_2000px/May.6.2011_2000px.jpg"),
    },
  },
  {
    name: "May 11th 2011",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_100px/May.11.2011_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_300px/May.11.2011_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_1000px/May.11.2011_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_2000px/May.11.2011_2000px.jpg"),
    },
  },
  {
    name: "May 21st 2011 (1)",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_100px/May.21.2011_1_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_300px/May.21.2011_1_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_1000px/May.21.2011_1_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_2000px/May.21.2011_1_2000px.jpg"),
    },
  },
  {
    name: "May 21st 2011 (2)",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_100px/May.21.2011_2_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_300px/May.21.2011_2_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_1000px/May.21.2011_2_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_2000px/May.21.2011_2_2000px.jpg"),
    },
  },
  {
    name: "May 26th 2011",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_100px/May.26.2011_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_300px/May.26.2011_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_1000px/May.26.2011_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_2000px/May.26.2011_2000px.jpg"),
    },
  },
  {
    name: "June 11th 2011",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_100px/June.11.2011_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_300px/June.11.2011_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_1000px/June.11.2011_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_2000px/June.11.2011_2000px.jpg"),
    },
  },
  {
    name: "June 26th 2011",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_100px/June.26.2011_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_300px/June.26.2011_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_1000px/June.26.2011_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_2000px/June.26.2011_2000px.jpg"),
    },
  },
  {
    name: "July 9th 2011",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_100px/July.9.2011_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_300px/July.9.2011_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_1000px/July.9.2011_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_2000px/July.9.2011_2000px.jpg"),
    },
  },
  {
    name: "October 3rd 2011",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_100px/October.3.2011_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_300px/October.3.2011_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_1000px/October.3.2011_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_2000px/October.3.2011_2000px.jpg"),
    },
  },
  {
    name: "March 3rd 2012",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_100px/March.3.2012_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_300px/March.3.2012_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_1000px/March.3.2012_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_3000px/March.3.2012_2000px.jpg"),
    },
  },
  {
    name: "April 21st 2013",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_100px/April.21.2013_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_300px/April.21.2013_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_1000px/April.21.2013_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_2000px/April.21.2013_2000px.jpg"),
    },
  },
  {
    name: "June 16th 2014",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_100px/June.16.2014_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_300px/June.16.2014_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_1000px/June.16.2014_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_2000px/June.16.2014_2000px.jpg"),
    },
  },
  {
    name: "June 1st 2015",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_100px/June.1.2015_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_300px/June.1.2015_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_1000px/June.1.2015_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_2000px/June.1.2015_2000px.jpg"),
    },
  },
  {
    name: "May 15th 2016",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_100px/May.15.2016_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_300px/May.15.2016_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_1000px/May.15.2016_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_2000px/May.15.2016_2000px.jpg"),
    },
  },
  {
    name: "November 6th 2016",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_100px/November.6.2016_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_300px/November.6.2016_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_1000px/November.6.2016_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_2000px/November.6.2016_2000px.jpg"),
    },
  },
  {
    name: "December 17th 2016",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_100px/December.17.2016_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_300px/December.17.2016_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_1000px/December.17.2016_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_2000px/December.17.2016_2000px.jpg"),
    },
  },
  {
    name: "June 14th 2017",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_100px/June.14.2017_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_300px/June.14.2017_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_1000px/June.14.2017_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_2000px/June.14.2017_2000px.jpg"),
    },
  },
  {
    name: "June 24th 2017",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_100px/June.24.2017_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_300px/June.24.2017_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_1000px/June.24.2017_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_2000px/June.24.2017_2000px.jpg"),
    },
  },
  {
    name: "July 17th 2017",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_100px/July.17.2017_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_300px/July.17.2017_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_1000px/July.17.2017_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_2000px/July.17.2017_2000px.jpg"),
    },
  },
  {
    name: "July 23rd 2017",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_100px/July.23.2017_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_300px/July.23.2017_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_1000px/July.23.2017_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_2000px/July.23.2017_2000px.jpg"),
    },
  },
  {
    name: "May 22nd 2018 (1)",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_100px/May.22.2018_1_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_300px/May.22.2018_1_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_1000px/May.22.2018_1_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_2000px/May.22.2018_1_2000px.jpg"),
    }
  },
  {
    name: "May 22nd 2018 (2)",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_100px/May.22.2018_2_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_300px/May.22.2018_2_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_1000px/May.22.2018_2_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_2000px/May.22.2018_2_2000px.jpg"),
    },
  },
  {
    name: "June 4th 2019",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_100px/June.4.2019_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_300px/June.4.2019_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_1000px/June.4.2019_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_2000px/June.4.2019_2000px.jpg"),
    },
  },
  {
    name: "June 25th 2019",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_100px/June.25.2019_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_300px/June.25.2019_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_1000px/June.25.2019_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_2000px/June.25.2019_2000px.jpg"),
    },
  },
  {
    name: "(Sold)",
    src: {
      100: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_100px/(Sold)_100px.jpg"),
      300: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_300px/(Sold)_300px.jpg"),
      1000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_1000px/(Sold)_1000px.jpg"),
      2000: import(/* webpackMode: lazy-once */ "../../../../assets/images/measureOfTime/measureOfTime_2000px/(Sold)_2000px.jpg"),
    },
  },
];


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
    } else if (collectionName === "landscapes") {
      list = landscapeList;
    } else if (collectionName === "additional") {
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
