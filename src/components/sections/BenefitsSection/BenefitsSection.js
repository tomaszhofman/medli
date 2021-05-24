import Image from 'next/image';
import React from 'react';

import {
  Background,
  Wrapper,
  TitleWrapper,
  TextWrapper,
  CardsWrapper,
} from './BenefitsSection.styles';
import { CardWrapper } from '../../smallComponents/Card/Card';

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
