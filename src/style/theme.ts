/* eslint sort-keys-custom-order/object-keys: off */

import { colors } from '.'
import type { TTheme } from '../core'

export const theme: TTheme = {
  breakpoints: ['320px', '480px', '768px', '1024px', '1200px'],
  rootFontSizes: ['12px', '14px', '16px'],
  fontSizes: {
    s: '0.9em',
    m: '1em',
    l: '1.1em'
  },
  fonts: {
    base: "'Roboto', Helvetica, Arial, sans-serif",
    title: "'Roboto', Helvetica, Arial, sans-serif",
    code: 'Monaco, monospace, Arial, sans-serif'
  },
  colors,
  space: { // when fontSize === 16px
    xxxxs: '0.125rem', // 2px
    xxxs: '0.25rem', // 4px
    xxs: '0.375rem', // 6px
    xs: '0.5rem', // 8px
    s: '0.75rem', // 12px
    m: '1rem', // 16px
    l: '1.25rem', // 20px
    xl: '1.5rem', // 24px
    xxl: '2rem', // 32px
    xxxl: '2.5rem' // 40px
  },
  sizes: {},
  borders: {
    main: '1px solid',
    thick: '2px solid'
  },
  radii: {
    xs: '0.075rem',
    s: '0.125rem',
    m: '0.25rem',
    l: '0.5rem',
    xl: '1rem'
  },
  durations: {
    s: '0.25s',
    m: '0.50s',
    l: '0.75s'
  }
}
