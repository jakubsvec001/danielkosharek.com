import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  font-size: 28px;
`

const Title = () => {
  return (
    <StyledTitle as='h1'>Daniel Kosharek</StyledTitle>
  )
}

export default Title;