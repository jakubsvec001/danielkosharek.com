import React, { useLocation } from 'react';
import styled from 'styled-components';
import ZoomImg from 'react-image-zoom';
import CollectionImage from './CollectionImage';


import heroImage from './April.9.2011_1000px.jpg';


const dates = [
'(Sold)'
'April.9.2011',
'April.21.2013',
'April.30.2011',
'December.17.2016',
'July.9.2011',
'July.17.2017',
'July.23.2017',
'June.1.2015',
'June.4.2019',
'June.11.2011',
'June.14.2017',
'June.16.2014',
'June.24.2017',
'June.25.2019',
'June.26.2011',
'March.3.2012',
'May.6.2011',
'May.11.2011',
'May.15.2016',
'May.21.2011_1',
'May.21.2011_2',
'May.22.2018_1',
'May.22.2018_2',
'May.26.2011',
'November.6.2016',
'October.3.2011',
];


const MeasureOfTime = {
  'April.30.2011': {
    url: '../../../../assets/images/Measure_Of_Time/Measure_Of_Time_300px/April.30.2011_300px.jpg',
    date: new Date(2011,4,30),
    title: ${this.date.
  },
  ''
import MeasureOfTime2 from '../../../../assets/images/Measure_Of_Time/Measure_Of_Time_300px/December.17.2016_300px.jpg';
import MeasureOfTime3 from '../../../../assets/images/Measure_Of_Time/Measure_Of_Time_300px/July.17.2017_300px.jpg';
import MeasureOfTime4 from '../../../../assets/images/Measure_Of_Time/Measure_Of_Time_300px/July.23.2017_300px.jpg';
import MeasureOfTime5 from '../../../../assets/images/Measure_Of_Time/Measure_Of_Time_300px/July.9.2011_300px.jpg';
import MeasureOfTime6 from '../../../../assets/images/Measure_Of_Time/Measure_Of_Time_300px/June.1.2015_300px.jpg';
  
}

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
  /* justify-content: stretch; */
  /* align-items: stretch; */
`;

const CollectionComponent = () => {
  const location = useLocation();
  
  if (location.pathname === 'aMeasureOfTime') {
    images = 
  }

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
          <h2>A Measure of Time</h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit,
          </div>
        </StyledText>
      </StyledArtistStatement>
      <hr/>
      <StyledCollection>
        <CollectionImage image={MeasureOfTime1} />
        <CollectionImage image={MeasureOfTime2} />
        <CollectionImage image={MeasureOfTime3} />
        <CollectionImage image={MeasureOfTime4} />
        <CollectionImage image={MeasureOfTime5} />
        <CollectionImage image={MeasureOfTime6} />
      </StyledCollection>
    </>
  );
};

export default CollectionComponent;