import styled from 'styled-components';
import { CardWrapper } from '../../smallComponents/Card/Card';

export const Background = styled.div`
  width: 100%;
  height: 1200px;
  background-color: ${({ theme }) => theme.colors.creamy};

  @media (max-width: ${({ theme }) => theme.device.l}) {
    height: 100%;
    padding-bottom: 24px;
  }
`;

export const Wrapper = styled.div`
  padding-top: 363px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.device.xl}) {
    padding: 320px 24px 0 24px;
  }

  @media (max-width: ${({ theme }) => theme.device.l}) {
    padding: 250px 24px 0 24px;
  }

  @media (max-width: ${({ theme }) => theme.device.s}) {
    padding: 137px 24px 0 24px;
  }
`;

export const TitleWrapper = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: ${({ theme }) => theme.fontWeight.m};
  color: ${({ theme }) => theme.colors.black};
  font-size: 80px;
  line-height: 117%;
  text-align: left;
  font-feature-settings: 'haln' on;
  max-width: 839px;
  margin: 0 0 40px 0;

  @media (max-width: ${({ theme }) => theme.device.s}) {
    font-size: 50px;
    max-width: 327px;
  }
`;

export const TextWrapper = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.m};
  color: ${({ theme }) => theme.colors.black};
  font-size: 24px;
  line-height: 36px;
  text-align: left;
  max-width: 596px;
  margin: 0 0 56px 0;
  @media (max-width: ${({ theme }) => theme.device.s}) {
    font-size: 20px;
    max-width: 327px;
  }
`;

export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.device.l}) {
    flex-direction: column;
  }

  ${CardWrapper} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 10px;

    @media (max-width: ${({ theme }) => theme.device.s}) {
      width: 327px;
      padding: 45px 72px;
      margin: 20px;
    }

    h2 {
      font-family: ${({ theme }) => theme.fontFamily.primary};
      font-weight: ${({ theme }) => theme.fontWeight.m};
      color: ${({ theme }) => theme.colors.black};
      font-size: 24px;
      line-height: 117%;
      margin: 81px 0 16px 0;

      @media (max-width: ${({ theme }) => theme.device.s}) {
        margin: 0;
      }
    }

    p {
      font-family: ${({ theme }) => theme.fontFamily.secondary};
      font-weight: ${({ theme }) => theme.fontWeight.m};
      color: ${({ theme }) => theme.colors.black};
      font-size: 18px;
      line-height: 117%;
      text-align: center;
    }
  }
`;
