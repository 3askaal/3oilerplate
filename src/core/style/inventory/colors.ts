import { mix } from 'chroma-js'
import { darken, brighten, rgba } from '../utils'

interface Colors {
  [variant: string]: string | Colors
}

const white: string = darken('white', 0.4)
const black: string = brighten('black', 1.4)

const primary: string = '#3e64ff'
const primaryDark: string = darken(primary, 0.4)

const secondary: string = '#7c73e6'
const secondaryDark: string = darken(secondary, 0.4)

const greys: any = {
  10: darken('white', 0.5),
  20: darken('white', 1),
  30: darken('white', 1.5),
  40: darken('white', 2),
  50: darken('white', 2.5),
  60: darken('white', 3),
  70: darken('white', 3.5),
  80: darken('white', 4),
  90: darken('white', 4.5),
}

export const colors: Colors = {
  white,
  black,
  greys,
  primary,
  primaryDark,
  secondary,
  secondaryDark,
  code: 'rgb(42, 39, 52)',
  positive: mix('green', primary, 0.1),
  negative: mix('red', primary, 0.1),
  misc: {
    overlay: rgba('black', .25)
  },
  element: {
    background: 'black',
    color: 'white'
  }
}
