import { lazy } from 'react';

const sizes = {
  300: '_300px',
  1000: '_1000px',
  2000: '_2000px'
}

export const generateMeasureOfTimeCollection = (size) => {
  const MeasureOfTimeDates = [
    'April.9.2011',
    'April.30.2011',
    'May.6.2011',
    'May.21.2011_1',
    'May.21.2011_2',
    'May.26.2011',
    'May.11.2011',
    'June.11.2011',
    'June.26.2011',
    'July.9.2011',
    'October.3.2011',
    'March.3.2012',
    'April.21.2013',
    'June.16.2014',
    'June.1.2015',
    'May.15.2016',
    'November.6.2016',
    'December.17.2016',
    'June.14.2017',
    'June.24.2017',
    'July.17.2017',
    'July.23.2017',
    'May.22.2018_1',
    'May.22.2018_2',
    'June.4.2019',
    'June.25.2019',
    '(Sold)',
  ];

  const fileLocation = '../../../../assets/images/measureOfTime/measureOfTime'

  const collectionList = MeasureOfTimeDates.map((date) => {
    /*eslint no-restricted-imports: ["error", "fs"]*/
    return lazy(() => import(`${fileLocation + sizes[size]}px/${date + sizes[size]}px.jpg`));
  })
};


export const generateLandscapeCollection = (size) => {
  const landscapeNames = [
    'CrowsInTheOrchard',
    'IntoDiabloCanyon',
    'LaCienega',
    'MessageInTheSky',
    'RoadToRoy',
    'SliverOfRiver',
    'StormOverGrandCanyon',
  ];

  const fileLocation = '../../../../assets/images/landscapes/landscapes'

  const collectionList = landscapeNames.map((name) => {
    return lazy(() => import(`${fileLocation + sizes[size]}px/${name + sizes[size]}px.jpg`));
  });

  return collectionList;
}

export const generateAdditionalCollection = (size) => {
  const additionalNames = [
    'LesFleursOmises(TheMissingFlowers)',
    'SelfPortrait',
    'StoryBoardPage',
  ];

  const fileLocation = '../../../../assets/images/additional/additional';
  
  const collectionList = additionalNames.map((name) => {
    return lazy(() => import(`${fileLocation + sizes[size]}px/${name + sizes[size]}px.jpg`));
  })

  return collectionList;
}
