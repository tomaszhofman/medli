import React from 'react';
import styled from 'styled-components';
import StyledInput from '../../smallComponents/Input/Input';

import Logo from '../../smallComponents/Logo/Logo';

const Background = styled.div`
  height: 469px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
`;

const Wrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: 89px;
`;

const FooterMenuGrid = styled.div`
  display: grid;
  grid-template-areas: 'product company . help';
  width: 100%;
  align-content: center;
  margin-right: 268px;
  align-content: center;
`;

const FooterMenuGridColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: center;

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

const FooterMenuItems = styled.ul`
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

const Container = styled.div`
  margin-top: 51px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const FooterLine = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 80px;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0.2;
`;

const LegalText = styled.a`
  font-size: 10px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.silverWhite};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  text-decoration: none;
  padding-top: 16px;
  text-align: right;
  width: 100%;
  opacity: 0.5;
`;

const Footer = () => {
  return (
    <Background>
      <Wrapper>
        <Logo white />
        <Container>
          <FooterMenuGrid>
            <FooterMenuGridColumn>
              <div>Product</div>
              <FooterMenuItems>
                <li>Updates</li>
                <li>Security</li>
                <li>Chrome Extension</li>
              </FooterMenuItems>
            </FooterMenuGridColumn>
            <FooterMenuGridColumn>
              <div>Company</div>
              <FooterMenuItems>
                <li>About</li>
                <li>Blog</li>
                <li>Join Us</li>
              </FooterMenuItems>
            </FooterMenuGridColumn>
            <FooterMenuGridColumn>
              <div>Help</div>
              <FooterMenuItems>
                <li>Talk to Support</li>
                <li>Support Docs</li>
                <li>API </li>
                <li>System Status</li>
              </FooterMenuItems>
            </FooterMenuGridColumn>
          </FooterMenuGrid>
          <StyledInput
            type="text"
            placeholder="Enter your email"
            label="Try Medli for free"
          />
        </Container>
        <FooterLine />
        <LegalText href="#">Terms & Conditions</LegalText>
      </Wrapper>
    </Background>
  );
};

export default Footer;
