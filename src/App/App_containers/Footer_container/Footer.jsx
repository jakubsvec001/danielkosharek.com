import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  flex-shrink: 0;
  /* border: 1px magenta solid; */
  background-color: ${({ theme }) => theme.canvas};
  min-height: 30px;
  padding: ${({ theme }) => theme.paddingSmall};
  padding-left: ${({ theme }) => theme.paddingLarge};
  position: sticky;
  bottom: 0;
  margin-bottom: 0;
`;

const FooterContainer = () => {
  return (
    <StyledFooter as="h6">
      © Daniel Kosharek {new Date().getFullYear()}   |    photography by Mark Roth
    </StyledFooter>
  );
};

export default FooterContainer;
