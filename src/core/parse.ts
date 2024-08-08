import { get, isArray, isFunction, isObject, merge } from 'lodash'
import { getMutatedValue } from './mutations'
import { SHORTHANDS, VALUES } from './constants'
import type { TStyle, TStyleObject, TStyleProps, TStyleVariants, TTheme } from '.'
import type * as CSS from 'csstype'

export const parse = (style: TStyle, props: TStyleProps): CSS.Properties => {
  // call style function with props if necessary
  const styleObject: TStyleObject = isFunction(style) ? style(props) : style

  return Object.entries(styleObject).reduce((acc, [prop, val]) => {
    // when value is object return recursive parse function
    if (isObject(val) && !isArray(val)) { return merge({}, acc, { [prop]: parse(val, props) }) }

    // assign shorthand props and treat property as array since shorthands can target multiple
    const properties: Array<keyof CSS.Properties> = SHORTHANDS[prop as keyof typeof SHORTHANDS] ?? [prop]

    // treat value as array since responsive values are arrays
    const values: Array<string | null> = isArray(val) ? val : [val]

    // for each property
    return merge({}, acc, properties.reduce((acc, property) => {
      // check if property type targets theme values
      const themeKey = VALUES[property as keyof typeof VALUES] as keyof TTheme ?? null

      // for each value
      return merge({}, acc, values.reduce((acc, value, index) => {
        if (value === null || value === undefined) return acc
        // get value from theme
        const themeValue: string | null = themeKey && props.theme && get(props.theme[themeKey], value)
        // mutate value when format matches
        const mutatedValue = /^\[([^]*?)\]$/.test(value) ? getMutatedValue(value, themeKey, props) : null
        // define media query when index !== 0
        const mediaQuery = (!!index && !!props.theme.breakpoints.length && `@media (min-width: ${props.theme.breakpoints[index - 1]})`) || ''
        // transform number to pixel value if needed
        const pxValue = (themeKey === 'sizes' || themeKey === 'space') && typeof value === 'number' ? `${value}px` : null

        return {
          ...acc,
          // define style at root
          ...(!mediaQuery && { [property]: themeValue ?? mutatedValue ?? pxValue ?? value }),
          // define style in media query
          ...(mediaQuery && { [mediaQuery]: { [property]: themeValue ?? mutatedValue ?? pxValue ?? value } })
        }
      }, {}))
    }, {}))
  }, {})
}

export const parseVariants = (variants: TStyleVariants, props: TStyleProps): CSS.Properties => {
  const variantsObject = isFunction(variants) ? variants(props) : variants
  return Object.entries(variantsObject)
    .filter(([key]) => props[key])
    .reduce((acc, [, value]) => merge(acc, parse(value, props)), {})
}
