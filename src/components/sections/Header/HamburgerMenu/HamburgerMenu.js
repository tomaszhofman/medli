import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  position: relative;

  visibility: hidden;

  @media (max-width: ${({ theme }) => theme.device.l}) {
    visibility: visible;
  } ;
`;

const StyledSpan = styled.span`
  span {
    width: 30px;
    height: 3px;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 90px;

    &::before {
      content: '';
      position: absolute;
      top: -7px;
      right: 0;
      width: 30px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.black};
      border-radius: 90px;
    }

    &::after {
      content: '';
      position: absolute;
      top: 7px;
      right: 0;
      width: 30px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.black};
      border-radius: 90px;
    }
  }
`;

const HamburgerMenu = () => {
  return (
    <Wrapper>
      <StyledSpan>
        <span></span>
      </StyledSpan>
    </Wrapper>
  );
};

export default HamburgerMenu;
