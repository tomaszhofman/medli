import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.sunYellow};
  padding: 7px 31px;
  border-radius: 8px;
  width: 124px;
  height: 50px;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.m};
  color: ${({ theme }) => theme.colors.black};
  font-size: 24px;

  @media (max-width: ${({ theme }) => theme.device.xl}) {
    font-size: 16px;
  }
`;
