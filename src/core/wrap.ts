import { createElement, forwardRef, useContext, useMemo } from 'react'
import ShortUniqueId from 'short-unique-id'
import { inject } from './inject'
import { TAGS } from './constants'
import { css, apply, type TSWrapper, type TStyle, type TStyleVariants, ThemeContext } from '.'

export const s = TAGS.reduce((acc, key) => ({
  ...acc,
  [key]: (defaults?: TStyle, variants?: TStyleVariants, sref?: string) => {
    return forwardRef((props, ref) => {
      const id = useMemo(() => new ShortUniqueId({ length: 20, dictionary: 'alpha' }).rnd(), [])
      const { theme } = useContext(ThemeContext)
      const style = apply({ ...props, theme }, defaults, variants, sref)
      const cssString = css(style, id)

      inject(cssString)

      return createElement(key, { ...props, ref, className: id })
    })
  }
}), {} as TSWrapper)
