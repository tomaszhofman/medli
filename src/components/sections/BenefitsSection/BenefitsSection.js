import Image from 'next/image';
import React from 'react';

import styled from 'styled-components';
import { CardWrapper } from '../../smallComponents/Card/Card';

const Background = styled.div`
  width: 100%;
  height: 1200px;
  background-color: ${({ theme }) => theme.colors.creamy};
`;

const Wrapper = styled.div`
  padding-top: 363px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const TitleWrapper = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: ${({ theme }) => theme.fontWeight.m};
  color: ${({ theme }) => theme.colors.black};
  font-size: 80px;
  line-height: 117%;
  text-align: left;
  font-feature-settings: 'haln' on;
  max-width: 839px;
  margin: 0 0 40px 0;
`;

const TextWrapper = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.m};
  color: ${({ theme }) => theme.colors.black};
  font-size: 24px;
  line-height: 36px;
  text-align: left;
  max-width: 596px;
  margin: 0 0 56px 0;
`;

const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${CardWrapper} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 10px;

    h2 {
      font-family: ${({ theme }) => theme.fontFamily.primary};
      font-weight: ${({ theme }) => theme.fontWeight.m};
      color: ${({ theme }) => theme.colors.black};
      font-size: 24px;
      line-height: 117%;
      margin: 81px 0 16px 0;
    }

    p {
      font-family: ${({ theme }) => theme.fontFamily.secondary};
      font-weight: ${({ theme }) => theme.fontWeight.m};
      color: ${({ theme }) => theme.colors.black};
      font-size: 18px;
      line-height: 117%;
      text-align: center;
    }

    /* div {
      color: ${({ theme }) => theme.colors.grey};
      font-size: 18px;
    }

    h1 {
      font-size: 60px;
      font-weight: ${({ theme }) => theme.fontWeight.l};
      margin: 0;

      span {
        font-size: 18px;
      }

      @media (max-width: ${({ theme }) => theme.device.m}) {
        font-size: 40px;
      }
    } */
  }
`;
const BenefitsSection = () => {
  return (
    <Background>
      <Wrapper>
        <TitleWrapper>What you’re getting?</TitleWrapper>
        <TextWrapper>
          We bring you personalized development programs that are backed by
          research and crafted from the years of experience
        </TextWrapper>
        <CardsWrapper>
          <CardWrapper>
            <Image
              src="/assets/girl-on-sofa.svg"
              alt="sun icon"
              width={227}
              height={173}
              layout="fixed"
            />
            <h2>1 FREE chat session</h2>
            <p>Start with a free text based chat session online</p>
          </CardWrapper>
          <CardWrapper>
            <Image
              src="/assets/men-with-flowers.svg"
              alt="sun icon"
              width={227}
              height={173}
              layout="fixed"
            />
            <h2>Personal Coach</h2>
            <p>A dedicated coach to help you through your journey</p>
          </CardWrapper>
          <CardWrapper>
            <Image
              src="/assets/men-with-laptop.svg"
              alt="sun icon"
              width={227}
              height={173}
              layout="fixed"
            />
            <h2>Text chat session</h2>
            <p>An excellent way of preaparing a projects wireframe</p>
          </CardWrapper>
        </CardsWrapper>
      </Wrapper>
    </Background>
  );
};

export default BenefitsSection;
