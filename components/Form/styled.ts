import styled, { css } from 'styled-components'
import { layout, LayoutProps } from 'styled-system'
import { ifNotProp, ifProp, prop, switchProp, theme } from 'styled-tools'

export interface InputStyledProps {
  variant?: 'primary' | 'danger'
  pr?: number
}

export const WrapperStyled = styled.div<LayoutProps>`
  position: relative;
  border-radius: ${theme('radii.regular')};
  ${layout}
`

export const InputStyled = styled.input<InputStyledProps>`
  //todo:refactor may be needed
  width: 100%;
  height: 100%;
  font-size: 15px;
  padding-left: 16px;
  padding-right: ${prop('pr')}px;
  font-family: ${theme('fonts.ibm')};
  border-radius: ${theme('radii.regular')};
  border: none;

  ::placeholder {
    color: ${theme('colors.gray.400')};
  }

  :enabled:focus {
    ::placeholder {
      font-weight: ${theme('fontWeights.semi-bold')};
    }
  }

  ${switchProp('variant', {
    primary: css`
      :enabled:focus,
      :enabled:active {
        box-shadow: 0px 0px 0px 3px ${theme(`colors.primary.400`)};
      }
    `,
    danger: css`
      box-shadow: 0px 0px 0px 3px ${theme(`colors.danger.400`)};
    `,
  })}

  :disabled {
    background-color: ${theme('colors.gray.300')};
    opacity: 0.9;
  }
`
export const IconContainerStyled = styled.span<{
  variant?: string
  isIconBg?: boolean
  disabled?: boolean
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 45px;
  top: 0;
  right: 0;
  bottom: 0;
  border-top-right-radius: ${theme('radii.regular')};
  border-bottom-right-radius: ${theme('radii.regular')};
  cursor: ${ifNotProp('disabled', 'pointer', 'inherit')};
  ${ifProp(
    'isIconBg',
    css`
      ${switchProp('variant', {
        primary: css`
          background-color: ${theme('colors.primary.400')};
          :hover,
          :active {
            background-color: ${theme('colors.primary.300')};
          }
        `,
        danger: css`
          background-color: ${theme('colors.danger.400')};
          :hover,
          :active {
            background-color: ${theme('colors.danger.300')};
          }
        `,
      })}
    `
  )}
`
