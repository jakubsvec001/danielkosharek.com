import styled from 'styled-components';

export const StyledImageContainer = styled.div`
flex: 1;
display: flex;
flex-basis: 100px;
cursor: pointer;
max-width: 300px;
flex-flow: column wrap;
margin: 2%;
height: 100%;
width: 100%;
transition: 0.25s all ease;
:hover {
  transform: scale(1.02);
}
`;

export const StyledCollectionsImage = styled.img`
object-fit: cover;
min-width: 200px;
min-height: 200px;
width: 100%;
flex: 1;
`;

export const StyledImageCaption = styled.figcaption`
display: flex;
width: 100%;
padding: 4px;
`;

export const StyledInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4px;
  align-items: center;
`;