import styled from 'styled-components';

export const StyledText = styled.div`
  display: inline;
  color: ${({ theme }) => theme.primary};
  margin-left: ${({ theme }) => theme.paddingSmall};
  /* padding-right: ${({ theme }) => theme.paddingSmall}; */
  /* margin-bottom: ${({ theme }) => theme.paddingLarge}; */
  text-align: left;
  width: 35vw;
  max-width: 350px;
  /* margin: ${({ theme }) => theme.paddingLarge}; */
`;

export const StyledTextBackground = styled.p`
  /* display: inline; */
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.secondary};
  margin-top: 0;
  margin-left: ${({ theme }) => theme.paddingSmall};
  padding-left: ${({ theme }) => theme.paddingSmall};
  padding-top: ${({ theme }) => theme.paddingSmall};
  padding-bottom: ${({ theme }) => theme.paddingSmall};
  padding-right: ${({ theme }) => theme.paddingSmall};
  text-align: left;
  width: 35vw;
  max-width: 250px;
  /* margin: ${({ theme }) => theme.paddingLarge}; */
`;

export const StyledTextContainer = styled.div` 
  min-width: 200px;
  display: flex;
  margin: 2em 2em 1em 2em;
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
  flex-flow: column nowrap;
  align-items: center;
  @media screen and (min-width: 400px) {
    flex-flow: row nowrap;
  }
`;
