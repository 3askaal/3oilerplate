import ShortUniqueId from 'short-unique-id'
import { stringify, inject } from './'
import type { TKeyframesObject } from './types'

export const keyframes = (keyframes: TKeyframesObject): string => {
  const id = new ShortUniqueId({ length: 20, dictionary: 'alpha' }).rnd()
  const css = `@keyframes ${id} {\n${stringify(keyframes, 1)}}\n`

  inject(id, css)

  return id
}
