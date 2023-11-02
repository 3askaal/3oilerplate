import React from 'react'
import { s } from '../../../utils'

export const SContainer = s.div({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '1200px',
})

export const Container = (props: any) => {
  return <SContainer sRef="Container" {...props} />
}

Container.displayName = 'Container'
