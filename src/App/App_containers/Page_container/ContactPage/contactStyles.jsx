import styled from 'styled-components';

export const StyledText = styled.div`
  display: inline;
  padding-left: ${({ theme }) => theme.paddingSmall};
  padding-right: ${({ theme }) => theme.paddingSmall};
  margin-bottom: ${({ theme }) => theme.paddingLarge};
  text-align: left;
  width: 35vw;
  max-width: 350px;
  margin: ${({ theme }) => theme.paddingLarge};
`;

export const StyledTextContainer = styled.div` 
  display: flex;
  flex-flow: column nowrap;
`;

export const StyledFrameHero = styled.img`
  object-fit: cover;
  min-width: 200px;
  max-height: 50vh;
  display: inline;
  /* width: 100%; */
  flex: 1;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;