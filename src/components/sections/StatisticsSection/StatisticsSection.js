import React from 'react';

import {
  Background,
  Wrapper,
  StatisticWrapper,
  StatisticsWrapper,
} from './StatisticsSection.styles';

const StatisticsSection = () => {
  return (
    <Background>
      <Wrapper>
        <StatisticsWrapper>
          <StatisticWrapper>
            <h1>230+</h1>
            <p>
              Scientifically <br /> based tests
            </p>
          </StatisticWrapper>
          <StatisticWrapper>
            <h1>10,000+</h1>
            <p>
              Medical <br /> recommendations
            </p>
          </StatisticWrapper>
          <StatisticWrapper>
            <h1>25M+</h1>
            <p>Students learning</p>
          </StatisticWrapper>
        </StatisticsWrapper>
      </Wrapper>
    </Background>
  );
};

export default StatisticsSection;
