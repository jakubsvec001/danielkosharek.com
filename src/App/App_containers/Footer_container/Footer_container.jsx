import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  flex-shrink: 0;
  border: 1px magenta solid;
  background-color: white;
  min-height: 30px;
`

const Footer_container = () => {
  return (
    <StyledFooter>Footer</StyledFooter>
  )
}

export default Footer_container;