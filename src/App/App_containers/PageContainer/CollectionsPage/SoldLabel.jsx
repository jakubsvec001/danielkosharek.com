import React, { useState } from 'react';
import Styled from 'styled-components';


const StyledSoldLabel = Styled.div`
  color: #e66969;
  font-size: 12px;
`

const SoldLabel = () => {
  
  return (
    <StyledSoldLabel>
      SOLD
    </StyledSoldLabel>
  )
}

export default SoldLabel;