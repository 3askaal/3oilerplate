import { parse, parseVariants, type TStyle, type TStyleProps, type TStyleVariants } from '.'
import type * as CSS from 'csstype'

export const merge = (props: TStyleProps, defaults?: TStyle, variants?: TStyleVariants, sref?: string): CSS.Properties[] => {
  const styles = []

  // Apply defaults
  if (defaults) { styles.push(parse(defaults, props)) }

  // Apply variants
  if (variants) { styles.push(parseVariants(variants, props)) }

  // Get component styles from theme
  const themeStyles = (props.theme.components?.[props.sref ?? sref ?? '']) ?? {}

  // Apply defaults from theme
  if (themeStyles.defaults) { styles.push(parse(themeStyles.defaults, props)) }

  // Apply variants from theme
  if (themeStyles.variants) { styles.push(parseVariants(themeStyles.variants, props)) }

  // Apply inline styling
  if (props.s) { styles.push(parse({ '&&&': props.s }, props)) }

  return styles
}
