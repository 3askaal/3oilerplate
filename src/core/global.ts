import { useContext } from 'react'
import { ThemeContext } from './provider'
import { parse, css, inject } from './'
import type { TStyle } from './types'

export const createGlobalStyle = (style: TStyle) => {
  return (props) => {
    const { theme } = useContext(ThemeContext)
    const parsedStyle = parse(style, { ...props, theme })
    const cssString = css(parsedStyle)

    inject(cssString)

    return null
  }
}
