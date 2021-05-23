import React from 'react';

import Image from 'next/image';
import styled from 'styled-components';
import { StyledButton } from '../../Button/Button';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.h3`
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: ${({ theme }) => theme.fontWeight.m};
  color: ${({ theme }) => theme.colors.black};
  font-size: 40px;
  line-height: 117%;
  margin: 0 0 0 15px;
  position: relative;

  &::before {
    content: '';
    background-color: ${({ theme }) => theme.colors.sunYellow};
    width: 8px;
    height: 8px;
    position: absolute;
    top: 6px;
    right: 3px;
    border-radius: 50%;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  /* grid-template-areas: '. . Home About Courses News Contact LogIn'; */

  @media (max-width: ${({ theme }) => theme.device.l}) {
    display: block;
    position: absolute;
    padding: 30px 40px;
    left: 0;
    top: 0;
    opacity: ${({ openMenu }) => (openMenu ? '1' : 0)};
    transform: ${({ openMenu }) =>
      openMenu ? 'translateY(100px)' : 'translateY(-100px)'};
    height: auto;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    border-radius: 15px;
  } ;
`;

const StyledNavButton = styled.button`
  border: none;
  background-color: transparent;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.m};
  color: ${({ theme }) => theme.colors.black};
  font-size: 24px;
  margin-right: 36px;

  @media (max-width: ${({ theme }) => theme.device.xl}) {
    font-size: 16px;
  }

  /* &:nth-child(1) {
    grid-area: Home;
  }
  &:nth-child(2) {
    grid-area: About;
  }
  &:nth-child(3) {
    grid-area: Courses;
  }
  &:nth-child(4) {
    grid-area: News;
  }
  &:nth-child(5) {
    grid-area: Contact;
  } */
`;

const Nav = () => {
  return (
    <Wrapper>
      <StyledLogo>
        <Image
          src="/assets/logo.png"
          alt="Picture of the author"
          width={56}
          height={42.04}
          layout="fixed"
        />
        <LogoText>Medli</LogoText>
      </StyledLogo>
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
