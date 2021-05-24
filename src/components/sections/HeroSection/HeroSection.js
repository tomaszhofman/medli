import React from 'react';
import Image from 'next/image';

import {
  Wrapper,
  Background,
  TitleWrapper,
  TextWrapper,
  ImageWrapper,
  GridWrapper,
  StyledButtonHero,
} from './HeroSection.styles';

const HeroSection = () => {
  return (
    <Background>
      <Wrapper>
        <GridWrapper>
          <div>
            <TitleWrapper>
              Check y
              <img src="/assets/logo.png" alt="" />
              ur well-being
            </TitleWrapper>
            <TextWrapper>
              We’re sure that deciding to check on your health is a big step,
              even if it doesn’t bother in any way.
            </TextWrapper>
            <StyledButtonHero>Get Started</StyledButtonHero>
          </div>
          <div>
            <ImageWrapper>
              <Image
                src="/assets/hero-girl.svg"
                alt="Girl reading a book "
                width={677}
                height={400}
                layout="responsive"
              />
            </ImageWrapper>
          </div>
        </GridWrapper>
      </Wrapper>
    </Background>
  );
};

export default HeroSection;
