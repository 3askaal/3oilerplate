import { isObject, merge } from 'lodash'
import type * as CSS from 'csstype'

export const flatten = (style: CSS.Properties, parentKey?: string): Record<string, Record<string, string>> => {
  return Object.entries(style).reduce((acc, [key, value]) => {
    if (isObject(value)) {
      const isMediaQuery = key.includes('@media')

      if (isMediaQuery) {
        return merge(acc, { [key]: flatten(value, parentKey) })
      }

      const path = parentKey ? `${parentKey} ${key}` : key
      return merge(acc, flatten(value, path))
    }

    return merge(acc, parentKey ? { [parentKey]: { [key]: value } } : { [key]: value })
  }, {})
}

export const stringify = (style: CSS.Properties, depth = 0): string => {
  return Object.entries(style).reduce((acc, [key, value]) => {
    const indent = '  '.repeat(depth)

    if (isObject(value)) {
      const cssSelector = key.replace(/\s&+/, '')
      return acc + `${indent}${cssSelector} {\n` + stringify(value, depth + 1) + `${indent}}\n`
    }

    const cssKey = key.replace(/([A-Z][a-z]+)/g, '-$1').toLowerCase()
    return acc + `${indent}${cssKey}: ${String(value)};\n`
  }, '')
}

export const css = (style: CSS.Properties, id?: string): string => {
  const flattenedStyle = flatten(style, id && `.${id}`)
  const css = stringify(flattenedStyle)
  return css
}
