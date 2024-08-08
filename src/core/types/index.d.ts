import type { PropsWithChildren } from 'react'
import type { SHORTHANDS, TAGS } from '../constants'
import type { colors } from '../../style'
import type * as CSS from 'csstype'

export type TThemeColors = typeof colors;

export type TThemeComponents = Record<string, { defaults?: TStyle, variants?: TStyleVariants }>;

export interface TTheme {
  breakpoints: Array<string | number>
  rootFontSizes: Array<string | number>
  fontSizes: Record<string, string | number>
  fonts: Record<string, string>
  colors: TThemeColors
  space: Record<string, string | number>
  sizes: Record<string, number>
  borders: Record<string, string>
  radii: Record<string, string | number>
  durations: Record<string, string | number>
  components?: TThemeComponents
}

export type TStyleObjectKeys = keyof CSS.Properties | keyof CSS.Pseudos | keyof typeof SHORTHANDS
export type TStyleObjectValues<key> = CSS.Properties[key] | [CSS.Properties[key], ...Array<CSS.Properties[key]>]
export type TStyleObject = Partial<{ [key in TStyleObjectKeys]: TStyleObjectValues<key> }>
export type TStyleFunction = (props: TStyleProps) => TStyleObject
export type TStyle = TStyleObject | TStyleFunction
export type TStyleVariants = Record<string, TStyle> | ((props: TStyleProps) => Record<string, TStyle>)
export type TStyleProps = { theme: TTheme, s?: TStyle, sref?: string, [key: string]: any } & PropsWithChildren

export type TKeyframesKeys = 'from' | 'to' | '1%' | '2%' | '3%' | '4%' | '5%' | '6%' | '7%' | '8%' | '9%' | '10%' | '11%' | '12%' | '13%' | '14%' | '15%' | '16%' | '17%' | '18%' | '19%' | '20%' | '21%' | '22%' | '23%' | '24%' | '25%' | '26%' | '27%' | '28%' | '29%' | '30%' | '31%' | '32%' | '33%' | '34%' | '35%' | '36%' | '37%' | '38%' | '39%' | '40%' | '41%' | '42%' | '43%' | '44%' | '45%' | '46%' | '47%' | '48%' | '49%' | '50%' | '51%' | '52%' | '53%' | '54%' | '55%' | '56%' | '57%' | '58%' | '59%' | '60%' | '61%' | '62%' | '63%' | '64%' | '65%' | '66%' | '67%' | '68%' | '69%' | '70%' | '71%' | '72%' | '73%' | '74%' | '75%' | '76%' | '77%' | '78%' | '79%' | '80%' | '81%' | '82%' | '83%' | '84%' | '85%' | '86%' | '87%' | '88%' | '89%' | '90%' | '91%' | '92%' | '93%' | '94%' | '95%' | '96%' | '97%' | '98%' | '99%' | '100%'
export type TKeyframesObject = Partial<Record<TKeyframesKeys, TStyleObject>>

export type TSWrapper = {
  [key in typeof TAGS]: (defaults: TStyle, variants?: TStyle, id?: string) => any
}
