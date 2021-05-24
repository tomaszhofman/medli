import styled from 'styled-components';

import { StyledButton } from '../../../smallComponents/Button/Button';

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledNav = styled.nav`
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

export const StyledNavButton = styled.button`
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

  &:nth-child(1) {
    position: relative;
  }

  &:nth-child(1)::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: #fabd20;
    border-radius: 50%;
    text-align: center;
    bottom: -10px;
    left: 50%;
    display: inline-block;
    transform: translateX(-50%);
  }
`;
