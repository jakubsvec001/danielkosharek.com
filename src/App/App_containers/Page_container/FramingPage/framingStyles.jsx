import styled from 'styled-components';

export const StyledText = styled.div`
  /* display: inline; */
  max-width: 100%;
  padding-left: ${({ theme }) => theme.paddingSmall};
  padding-right: ${({ theme }) => theme.paddingSmall};
  margin-bottom: ${({ theme }) => theme.paddingLarge};
  text-align: center;
  /* border: 1px solid #ff00ff; */
`;

export const StyledImageZoom = styled.div`
  margin: ${({ theme }) => theme.paddingSmall};
  cursor: crosshair;
`

export const StyledContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;;