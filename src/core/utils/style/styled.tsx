import styledComponents, { StyledComponent } from 'styled-components'
import { css, CssFunctionReturnType, SystemStyleObject, Theme } from '@styled-system/css'
import { forOwn, get, mapValues, wrap } from 'lodash'
import deepmerge from 'deepmerge'

export type SStyles<P extends object> = SystemStyleObject | ((params: { theme: STheme } & P) => SystemStyleObject)
export type SVariants<P> = { [variantKey: string]: SStyles<P> }
export type SComponents = { [componentKey: string]: { default?: SStyles<any>, variants?: SVariants<any> } }
export type STheme = Theme & { components: SComponents }

export interface SProps {
  sRef: string;
  children: React.ReactNode;
  s: SystemStyleObject;
  theme: STheme;
  [key: string]: any;
}

// type SDeclParams = (SStyles | SVariants | string)

// Resolves either style functions or style objects
const parseStyles = (styles: SystemStyleObject, props: SProps) => {
  return (typeof styles === 'function') ? css(styles(props)) : css(styles);
}

// Resolves all styles with Styled System's CSS helper
export const mergeStyles = (props: SProps, defaultStyles: SStyles, variantStyles?: SVariants, sRef?: string): CssFunctionReturnType[] => {
  const styleFunctions: CssFunctionReturnType[] = []

  // // TODO: Define types in order in declParams rest param
  // const defaultStyles = declParams[0] as SStyles | undefined
  // const variantStyles = declParams[1] as SVariants | undefined
  // const sRef = declParams[2] as string | undefined

  // Declare inline styles
  const inlineStyles = props.s

  // Declare component styles defined in theme
  const themeComponentStyles = get(props?.theme?.components, sRef || props.sRef)

  // Apply default styles
  if (defaultStyles) {
    styleFunctions.push(parseStyles(defaultStyles, props))
  }

  // Apply defaullt styles defined in theme
  if (themeComponentStyles?.default) {
    styleFunctions.push(parseStyles(themeComponentStyles.default, props))
  }

  // Apply variants styling
  if (variantStyles || themeComponentStyles?.variants) {
    // Merge variants defined in component and in theme
    const mergedVariants = deepmerge(variantStyles || {}, themeComponentStyles?.variants || {})

    forOwn(mergedVariants, (variantStyle, variantKey: string) => {
      if (props[variantKey]) {
        styleFunctions.push(parseStyles(variantStyle, props))
      }
    })
  }

  // Apply inline styling
  if (inlineStyles) {
    styleFunctions.push(parseStyles({ '&&&': inlineStyles }, props))
  }

  // TODO: Fix this feature
  // if (newProps.children) {
  //   newProps.children = resolveStylePropOnChildren(
  //     newProps.children,
  //     newProps.s,
  //   )
  // }

  return styleFunctions
}

// interface SWrapperCallback { (props: SProps): any; }
// type SWrapper = (cb: SWrapperCallback) => SReturnType;
// type SReturnType = StyledComponent<(IntrinsicElementsKeys | React.ComponentType<any>), Theme>;
// type SWrapper<P> = (defaultStyles: SStyles<P>, variantStyles?: SVariants<P>, key?: string) => StyledComponent<(IntrinsicElementsKeys | React.ComponentType<any>), Theme>

type S = {
  [TTag in keyof JSX.IntrinsicElements]: <P>(defaultStyles: SStyles<P>, variantStyles?: SVariants<P>, key?: string) => StyledComponent<TTag, STheme>
};

export const s: S = mapValues(
  styledComponents,
  (value) => {
    return wrap(value, (func, ...declParams: any[]): any => {
      return func((props) => {
        return mergeStyles(props, ...declParams)
      })
    })
  },
)
