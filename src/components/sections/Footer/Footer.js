import React from 'react';
import styled from 'styled-components';
import StyledInput from '../../smallComponents/Input/Input';

import Logo from '../../smallComponents/Logo/Logo';

import {
  Background,
  Wrapper,
  FooterMenuGrid,
  FooterMenuGridColumn,
  FooterMenuItems,
  FooterLine,
  Container,
  LegalText,
} from './Footer.styles';

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
