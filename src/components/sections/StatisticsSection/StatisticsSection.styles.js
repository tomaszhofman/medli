import styled from 'styled-components';

export const Wrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 20px 90px 20px 90px;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.device.l}) {
    padding: 20px 24px 64px 24px;
  } ;
`;

export const Background = styled.div`
  height: 520px;
  background-color: ${({ theme }) => theme.colors.creamy};

  @media (max-width: ${({ theme }) => theme.device.l}) {
    height: 100%;
  } ;
`;

export const StatisticsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.device.l}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  } ;
`;

export const StatisticWrapper = styled.div`
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
    margin-bottom: 19px;
  }

  p {
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-weight: ${({ theme }) => theme.fontWeight.m};
    color: ${({ theme }) => theme.colors.blackl};
  }
`;
