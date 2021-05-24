import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import {
  Background,
  TitleWrapper,
  TextWrapper,
  Wrapper,
  PlayButton,
  StyledImage,
} from './VideoSection.styles';

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
        <StyledImage>
          <div>
            <Image
              src="/assets/woman-yoga.png"
              alt="sun icon"
              width={1240}
              height={603}
              quality={80}
              layout="responsive"
              loading="lazy"
            />
          </div>
        </StyledImage>
      </Wrapper>
    </Background>
  );
};

export default VideoSection;
