import React from 'react';

import { StyledModalContainer } from './ModalStyle';

const ModalContainer = ({ actions }) => (
  <StyledModalContainer onClick={ actions.handleModalToggle }>
    <div> Modal</div>
  </StyledModalContainer>
);

export default ModalContainer;
