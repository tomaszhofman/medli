import styled from 'styled-components';
import StyledInput from '../../smallComponents/Input/Input';

import Logo from '../../smallComponents/Logo/Logo';

export const Background = styled.div`
  height: 494px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.device.l}) {
    height: 938px;
  }
`;

export const Wrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: 89px;

  @media (max-width: ${({ theme }) => theme.device.l}) {
    padding: 64px 24px 0 24px;
  }
`;

export const FooterMenuGrid = styled.div`
  display: grid;
  grid-template-areas: 'product company . help';
  width: 100%;
  align-content: center;
  margin-right: 268px;
  align-content: center;

  @media (max-width: ${({ theme }) => theme.device.l}) {
    display: flex;
    flex-direction: column;
    margin-right: unset;
  }
`;

export const FooterMenuGridColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: center;
  margin-bottom: 31px;

  div {
    color: ${({ theme }) => theme.colors.lightGrey};
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-size: 18px;
    line-height: 27px;
  }

  &:nth-child(1) {
    grid-area: product;
  }
  &:nth-child(2) {
    grid-area: company;
  }
  &:nth-child(3) {
    grid-area: help;
  }
`;

export const FooterMenuItems = styled.ul`
  padding: 0;

  margin: 19px 0 0 0;

  li {
    list-style: none;
    color: ${({ theme }) => theme.colors.silverWhite};
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-size: 18px;
    line-height: 27px;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  margin-top: 51px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.device.l}) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const FooterLine = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 80px;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0.2;
  @media (max-width: ${({ theme }) => theme.device.l}) {
    display: none;
  }
`;

export const LegalText = styled.a`
  font-size: 10px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.silverWhite};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  text-decoration: none;
  padding: 16px 0 10px 0;
  text-align: right;
  width: 100%;
  opacity: 0.5;

  @media (max-width: ${({ theme }) => theme.device.l}) {
    display: none;
  }
`;
