import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  flex-shrink: 0;
  /* border: 1px magenta solid; */
  background-color: ${ ({theme}) => theme.canvas};
  min-height: 30px;
  padding: ${({theme}) => theme.paddingSmall};
  padding-left: ${({ theme }) => theme.paddingLarge};

`;

const Footer_container = () => {
  return (
    <StyledFooter as='h3'>©Daniel Kosharek {new Date().getFullYear()}</StyledFooter>
  )
}

export default Footer_container;