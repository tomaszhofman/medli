import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 20px 90px 20px 90px;
  height: 100%;
`;

const Background = styled.div`
  height: 570px;
  background-color: ${({ theme }) => theme.colors.creamy};
`;

const StatisticsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StatisticWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 80px;
    line-height: 117%;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-weight: ${({ theme }) => theme.fontWeight.m};
    color: ${({ theme }) => theme.colors.sunYellow};
  }

  p {
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-weight: ${({ theme }) => theme.fontWeight.m};
    color: ${({ theme }) => theme.colors.blackl};
    max-width: 180px;
  }
`;

const StatisticsSection = () => {
  return (
    <Background>
      <Wrapper>
        <StatisticsWrapper>
          <StatisticWrapper>
            <h1>230+</h1>
            <p>Scientifically based tests</p>
          </StatisticWrapper>
          <StatisticWrapper>
            <h1>10,000+</h1>
            <p>Medical recommendations</p>
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
