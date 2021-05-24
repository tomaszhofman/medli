import React from 'react';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import Nav from './Nav/Nav';

import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.creamy};
  position: absolute;
  top: 0;
  left: 0;
  overflow-x: hidden;
  z-index: 999;
`;

const ItemsWrapper = styled.div`
  width: 100%;
  padding: 27px 165px;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.device.xl}) {
    padding: 35px 100px;
  }

  @media (max-width: ${({ theme }) => theme.device.s}) {
    padding: 35px 24px;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <ItemsWrapper>
        <Nav />
        <HamburgerMenu />
      </ItemsWrapper>
    </HeaderWrapper>
  );
};

export default Header;
