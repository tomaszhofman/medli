import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { StyledButton } from '../../smallComponents/Button/Button';

const Wrapper = styled.section`
  position: relative;
  top: 200px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.creamy};
  width: 100%;
  height: 60vh;
  min-height: 804px;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 30px;
`;

const TitleWrapper = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: ${({ theme }) => theme.fontWeight.m};
  color: ${({ theme }) => theme.colors.black};
  line-height: 117%;
  font-size: 80px;
  margin: 0 0 16px 0;
`;

const TextWrapper = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.m};
  color: ${({ theme }) => theme.colors.darkGreen};
  line-height: 36px;
  font-size: 24px;
  max-width: 430px;
`;

const StyledButtonHero = styled(StyledButton)`
  width: 255px;
  height: 70px;
  font-size: 25px;
  line-height: 37px;
  padding: 16px 60px;
  margin-top: 36px;
`;

const ImageWrapper = styled.div`
  position: relative;
  top: 46px;
`;

const HeroSection = () => {
  return (
    <Background>
      <Wrapper>
        <GridWrapper>
          <div>
            <TitleWrapper>
              Check y
              <Image
                src="/assets/logo.png"
                alt="sun icon"
                width={43}
                height={32}
                layout="fixed"
              />
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
                layout="fixed"
              />
            </ImageWrapper>
          </div>
        </GridWrapper>
      </Wrapper>
    </Background>
  );
};

export default HeroSection;
