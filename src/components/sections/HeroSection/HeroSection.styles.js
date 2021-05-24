import styled from 'styled-components';

import { StyledButton } from '../../smallComponents/Button/Button';

export const Wrapper = styled.section`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;

  @media (max-width: ${({ theme }) => theme.device.m}) {
    padding: 24px;
  } ;
`;

export const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.creamy};
  width: 100%;
  height: 60vh;
  min-height: 804px;
  padding-top: 230px;

  @media (max-width: ${({ theme }) => theme.device.l}) {
    height: unset;
    padding-top: 0;
  } ;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 10fr 15fr;

  @media (max-width: ${({ theme }) => theme.device.l}) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;

    div {
      padding-bottom: 47.05px;

      @media (max-width: ${({ theme }) => theme.device.l}) {
        padding-bottom: 42px;
      }
    }
  }
`;

export const TitleWrapper = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: ${({ theme }) => theme.fontWeight.m};
  color: ${({ theme }) => theme.colors.black};
  line-height: 117%;
  font-size: 80px;
  margin: 0 0 16px 0;

  @media (max-width: ${({ theme }) => theme.device.s}) {
    font-size: 50px;
  }

  img {
    height: 32px;
    width: 43px;
    @media (max-width: ${({ theme }) => theme.device.l}) {
      height: 20px;
      width: 27px;
    }
  }
`;

export const TextWrapper = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.m};
  color: ${({ theme }) => theme.colors.darkGreen};
  line-height: 36px;
  font-size: 24px;
  max-width: 430px;

  @media (max-width: ${({ theme }) => theme.device.s}) {
    font-size: 20px;
    inline-size: 327px;
  }
`;

export const StyledButtonHero = styled(StyledButton)`
  width: 255px;
  height: 70px;
  font-size: 25px;
  line-height: 37px;
  padding: 16px 60px;
  margin-top: 36px;
  @media (max-width: ${({ theme }) => theme.device.l}) {
    width: 100%;
    display: block;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  top: 46px;
`;
