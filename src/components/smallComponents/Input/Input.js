import styled from 'styled-components';

import React from 'react';
import { StyledButton } from '../Button/Button';

const StyledInputWrapper = styled.div`
  position: relative;
  label {
    font-size: 18px;
    line-height: 27px;
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  div {
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.device.l}) {
      flex-direction: column;
    }
  }

  ${StyledButton} {
    position: absolute;
    right: 8px;
    width: 113px;
    height: 34px;
    border-radius: 4px;
    font-size: 18px;
    padding: 4px 16px;

    @media (max-width: ${({ theme }) => theme.device.l}) {
      width: 500px;
      height: 62px;
      width: 100%;
      display: block;
      position: unset;
      margin-bottom: 63px;
    }

    @media (max-width: ${({ theme }) => theme.device.s}) {
      width: 326px;
      height: 62px;
    }
  }
`;

export const Input = styled.input`
  width: 350px;
  height: 50px;
  border: 1px solid #7c8176;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: transparent;
  font-family: ${({ theme }) => theme.fontFamily.secondary};

  &::placeholder {
    text-transform: capitalize;
    padding: 9px 11px;
  }

  :focus {
    color: ${({ theme }) => theme.colors.lightGrey};
    outline: none;
  }

  @media (max-width: ${({ theme }) => theme.device.l}) {
    width: 500px;
    height: 62px;
    margin-bottom: 16px;
  }

  @media (max-width: ${({ theme }) => theme.device.s}) {
    width: 326px;
    height: 62px;
  }
`;

const StyledInput = ({ label, placeholder, type }) => {
  return (
    <StyledInputWrapper>
      <label>{label}</label>
      <div>
        <Input type={type} placeholder={placeholder}></Input>
        <StyledButton>Get started</StyledButton>
      </div>
    </StyledInputWrapper>
  );
};

export default StyledInput;
