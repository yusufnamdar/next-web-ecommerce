import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { theme } from 'styled-tools'

type UnaryOperatorStyledProps = ButtonHTMLAttributes<HTMLButtonElement>

export const UnaryOperatorStyled = styled.button<UnaryOperatorStyledProps>`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 20px;
  width: 24px;
  height: 100%;
  border: none;
  cursor: pointer;
  color: ${theme('colors.primary.400')};
  background-color: ${theme('colors.gray.100')};

  &:enabled:hover {
    background-color: ${theme('colors.gray.200')};
  }

  :disabled {
    color: ${theme('colors.gray.300')};
    cursor: not-allowed;
  }
`

export const InputStyled = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  width: 42px;
  padding: 0 10px;
  font-size: 14px;
  margin: 0 auto;
  height: 100%;
  border: none;
  text-align: center;
  color: ${theme('colors.gray.400')};
  background-color: ${theme('colors.white')};

  //Hide arrows for input[type=number]
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`
export const BorderAnimationStyled = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid ${theme('colors.rose.300')};
    transition: all 0.5s;
    animation: clippath 3s infinite linear;
  }

  @keyframes clippath {
    0%,
    100% {
      clip-path: inset(0 0 95% 0);
    }
    25% {
      clip-path: inset(0 0 0 95%);
    }
    50% {
      clip-path: inset(95% 0 0 0);
    }
    75% {
      clip-path: inset(0 95% 0 0);
    }
  }
`
