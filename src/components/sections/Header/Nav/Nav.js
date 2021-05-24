import React from 'react';

import { StyledButton } from '../../../smallComponents/Button/Button';
import Logo from '../../../smallComponents/Logo/Logo';
import { StyledNav, StyledNavButton, Wrapper } from './Nav.styles';

const Nav = () => {
  return (
    <Wrapper>
      <Logo />
      <StyledNav>
        <StyledNavButton>Home</StyledNavButton>
        <StyledNavButton>About</StyledNavButton>
        <StyledNavButton>Courses</StyledNavButton>
        <StyledNavButton>News</StyledNavButton>
        <StyledNavButton>Contact</StyledNavButton>
        <StyledButton>Log in</StyledButton>
      </StyledNav>
    </Wrapper>
  );
};

export default Nav;
