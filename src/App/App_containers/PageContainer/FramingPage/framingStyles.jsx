import styled from 'styled-components';

// export const StyledText = styled.div`
//   /* display: inline; */
//   max-width: 100%;
//   padding-left: ${({ theme }) => theme.paddingSmall};
//   padding-right: ${({ theme }) => theme.paddingSmall};
//   margin-bottom: ${({ theme }) => theme.paddingLarge};
//   text-align: center;
//   /* border: 1px solid #ff00ff; */
// `;

export const StyledImageZoom = styled.div`
  margin: ${({ theme }) => theme.paddingSmall};
  cursor: crosshair;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  min-width: 450px;
  align-items: center;
`;

export const StyledText = styled.p`
  /* display: inline; */
  color: ${({ theme }) => theme.primary};
  margin-top: 2em;
  text-align: center; 
  min-width: 220px;
  /* white-space: nowrap; */
  margin-bottom: 2em;
`;

export const StyledBackgroundSpan = styled.span`
  background-color: ${({ theme }) => theme.secondary};
  padding-left: 2em;
  padding-top: ${({ theme }) => theme.paddingSmall};
  padding-bottom: ${({ theme }) => theme.paddingSmall};
  padding-right: 2em;
`;
