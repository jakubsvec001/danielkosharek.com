import styled from 'styled-components';

const StyledModalBackdrop = styled.div`
  position: fixed;
  display: ${({ data }) => (data.isModal ? 'block' : 'none')};
  left: 0px;
  top: 0px;
  z-index: 10000;
  height: 100%;
  width: 100%;
  background-color: #000;
  /* background-color: #f0f; */
  background-color: rgba(0,0,0,.62);
`;

export { StyledModalBackdrop }