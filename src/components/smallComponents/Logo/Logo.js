import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.h3`
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: ${({ theme }) => theme.fontWeight.m};
  color: ${({ theme, white }) =>
    white ? theme.colors.white : theme.colors.black};
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
    right: 2%;
    border-radius: 50%;
  }
`;

const Logo = ({ white }) => {
  return (
    <StyledLogo>
      <Image
        src="/assets/logo.png"
        alt="Picture of the author"
        width={56}
        height={42.04}
        layout="fixed"
      />
      <LogoText white={white}>Medli</LogoText>
    </StyledLogo>
  );
};

export default Logo;
