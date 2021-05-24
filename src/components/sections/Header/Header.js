import React from 'react';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import Nav from './Nav/Nav';

import { HeaderWrapper, ItemsWrapper } from './Header.styles';

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
