import React, { FC, ReactElement } from 'react'
import { s } from '../../utils'

export const ButtonReset: any = {
  backgroundColor: 'transparent',
  border: 0,
  outline: 0,
  cursor: 'pointer',
}

export const SButton: any = s.button(
  {
    ...ButtonReset,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 's',
    paddingX: 'm',
    paddingY: 's',
    color: 'white',
    backgroundColor: 'primary',
    border: 'main',
    borderColor: 'primary',

    '@media (hover: hover)': {
      ':hover': {
        backgroundColor: 'primaryDark',
        borderColor: 'primaryDark',
      },
    },

    '> * + *': {
      marginLeft: 'xxs',
    },
  },
  {
    isSecondary: {
      backgroundColor: 'secondary',
      borderColor: 'secondary',

      '@media (hover: hover)': {
        ':hover': {
          backgroundColor: 'secondaryDark',
          borderColor: 'secondaryDark',
        },
      },
    },
    isOutline: {
      backgroundColor: 'transparent',
      border: 'main',
      borderColor: 'primary',
      color: 'primary',

      '@media (hover: hover)': {
        ':hover': {
          backgroundColor: 'primaryDark',
          borderColor: 'primaryDark',
          color: 'white',
        },
      },
    },
    isDisabled: {
      opacity: 0.6,
      pointerEvents: 'none',
    },
    isBlock: {
      width: '100%',
    },
    isPositive: {
      borderColor: 'positive',
      backgroundColor: 'positive',
    },
    isNegative: {
      borderColor: 'positive',
      backgroundColor: 'positive',
    },
  },
)

export const Button: FC<any> = ({ ...props }: any): ReactElement => {
  return <SButton sRef="Button" {...props} />
}

Button.displayName = 'Button'
