import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  width: 100%;
  height: 811px;
  background-color: ${({ theme }) => theme.colors.sunYellow};
`;

const TitleWrapper = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: ${({ theme }) => theme.fontWeight.m};
  color: ${({ theme }) => theme.colors.black};
  font-size: 80px;
  line-height: 117%;
  text-align: center;
  font-feature-settings: 'haln' on;
  max-width: 839px;
  margin: 64px 0 40px 0;
`;

const TextWrapper = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.m};
  color: ${({ theme }) => theme.colors.black};
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  max-width: 371px;
  margin: 0 0 56px 0;
`;

const PlayButton = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 210px);
  background: rgba(254, 244, 230, 0.6);
  backdrop-filter: blur(10px);
  z-index: 99;
  width: 130px;
  height: 130px;
  border-radius: 50%;

  img {
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    height: 58px;
    width: 100%;
    cursor: pointer;
  }
`;

const VideoSection = () => {
  return (
    <Background>
      <Wrapper>
        <TitleWrapper>What our community is saying?</TitleWrapper>
        <TextWrapper>
          A mission-driven company that invest in and builds healthier living
        </TextWrapper>
        <PlayButton>
          <img src="/assets/play-button.svg" alt="play button icon" />
        </PlayButton>
        <Image
          src="/assets/woman-yoga.png"
          alt="sun icon"
          width={1240}
          height={603}
          quality={80}
          sizes={[320, 520]}
          layout="fixed"
          style={{ position: 'relative', zIndex: '-1' }}
        />
      </Wrapper>
    </Background>
  );
};

export default VideoSection;
