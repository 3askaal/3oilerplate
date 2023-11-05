import React from 'react'
import { ThemeProvider as OriginalThemeProvider } from 'styled-components'
import deepmerge from 'deepmerge'
import { theme as DEFAULT_THEME } from "../style/theme";
import { STheme } from '../types';

export const ThemeProvider = ({ children, theme }: { children: React.ReactNode, theme: STheme }) => {
  const mergedTheme = deepmerge(
    DEFAULT_THEME,
    theme,
    { arrayMerge: (srcArray, overrideArray) => overrideArray }
  )

  return (
    <OriginalThemeProvider theme={mergedTheme}>
      { children }
    </OriginalThemeProvider>
  )
}
