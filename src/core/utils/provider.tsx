import React from 'react'
import { ThemeProvider as OriginalThemeProvider } from 'styled-components'
import deepmerge from 'deepmerge'
import { theme as LOCAL_THEME } from "../style/theme";
import { STheme } from '../types';

export const ThemeProvider = ({ children, theme }: { children: React.ReactNode, theme: STheme }) => {
  const mergedTheme = deepmerge(
    theme,
    LOCAL_THEME,
    { arrayMerge: (srcArray, overrideArray) => overrideArray }
  )

  return (
    <OriginalThemeProvider theme={mergedTheme}>
      { children }
    </OriginalThemeProvider>
  )
}
