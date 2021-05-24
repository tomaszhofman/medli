import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.device.l}) {
    padding: 24px;
  } ;
`;

export const StyledImage = styled.div`
  width: 100%;
  max-width: 1240px;

  div {
    width: 100%;

    @media (max-width: ${({ theme }) => theme.device.l}) {
      border-radius: 10px;
    }
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 811px;
  background-color: ${({ theme }) => theme.colors.sunYellow};

  @media (max-width: ${({ theme }) => theme.device.l}) {
    height: 497px;
  } ;
`;

export const TitleWrapper = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: ${({ theme }) => theme.fontWeight.m};
  color: ${({ theme }) => theme.colors.black};
  font-size: 80px;
  line-height: 117%;
  text-align: center;
  font-feature-settings: 'haln' on;
  max-width: 839px;
  margin: 64px 0 40px 0;

  @media (max-width: ${({ theme }) => theme.device.l}) {
    font-size: 50px;
    text-align: left;
    max-width: 320px;
  } ;
`;

export const TextWrapper = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.m};
  color: ${({ theme }) => theme.colors.black};
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  max-width: 371px;
  margin: 0 0 56px 0;

  @media (max-width: ${({ theme }) => theme.device.l}) {
    font-size: 20px;
    line-height: 30px;
    text-align: left;
  } ;
`;

export const PlayButton = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 210px);
  background: rgba(254, 244, 230, 0.6);
  backdrop-filter: blur(10px);
  z-index: 99;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.device.s}) {
    width: 78px;
    height: 78px;
  }

  img {
    height: 58px;
    width: 100%;
    cursor: pointer;
    @media (max-width: ${({ theme }) => theme.device.s}) {
      width: 34.8px;
      height: 34.8px;
    }
  }
`;
