import styled from 'styled-components';

export const StyledArtistStatement = styled.div`
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

export const StyledImageZoom = styled.div`
  margin: ${({ theme }) => theme.paddingSmall};
  display: none;
  cursor: crosshair;
  @media screen and (min-width: 700px) {
    display: inline-block;
  }
`;

export const StyledText = styled.div`
  display: inline;
  max-width: 450px;
  padding-left: ${({ theme }) => theme.paddingSmall};
  padding-right: ${({ theme }) => theme.paddingSmall};
  margin-bottom: ${({ theme }) => theme.paddingLarge};
  text-align: center;
  @media screen and (min-width: 700px) {
    text-align: justify;
  }
`;

export const StyledCollection = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const StyledBackgroundSpan = styled.span`
  background-color: ${({ theme }) => theme.primary};
  padding-left: 2em;
  padding-top: ${({ theme }) => theme.paddingSmall};
  padding-bottom: ${({ theme }) => theme.paddingSmall};
  padding-right: 2em;
`;
