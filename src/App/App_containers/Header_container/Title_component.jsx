import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 28px;
`

const Title = () => {
  return (
    <StyledTitle as='div'>Daniel Kosharek</StyledTitle>
  )
}

export default Title;