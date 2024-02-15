import { s } from '../../../utils'
import { FormElementReset } from '../reset'

export const SInput = s.input(
  {
    ...FormElementReset,
    display: 'flex',
    padding: 's',
    width: 'auto',
    color: 'primary',
    backgroundColor: 'transparent',
    border: 'thick',
    borderColor: 'primary',
    borderRadius: 'm',

    ':focus': {
      outline: 0,
    },

    outline: 'none',
    '-webkit-box-shadow': 'none',
    '-moz-box-shadow': 'none',
    'box-shadow': 'none',
    resize: 'none',
  },
  {
    isBlock: {
      width: '100%',
    },
    isNegative: {
      borderColor: 'negative',
      color: 'negative',
    },
    isPositive: {
      borderColor: 'positive',
      color: 'positive',
    },
  },
)
