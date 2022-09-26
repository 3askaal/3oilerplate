import React from 'react'
import styled from 'styled-components'
import { s } from '../../../utils'

const SColTest = styled.div(({ theme }) => {

})

export const SCol = s.div<{ width: number }>(({ width }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: width !== undefined ? 0 : 1,

  ...(width && {
    flexBasis: width,
    minWidth: width,
    flexShrink: 0,
  }),
}))

export const Col = (props: any) => {
  return <SCol sRef="Col" {...props} />
}

Col.displayName = 'Col'
