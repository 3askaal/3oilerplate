import React, { ReactElement, FC } from 'react'
import { styled } from '../../utils'

export const SCard = styled.div({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  border: 'main',
  borderColor: 'primary',
  borderRadius: 'm',
})

export const SCardHeader = styled.div({
  fontWeight: 'bold',
  padding: 's',
  borderBottom: 'main',
  borderColor: 'primary',
  backgroundColor: 'primary',
  color: 'white',
})

export const SCardContent = styled.div({
  padding: 'm',
})

export const Card: FC<any> = ({
  header,
  children,
  ...props
}: any): ReactElement => {
  return (
    <SCard sRef="Card" {...props}>
      {header && <SCardHeader sRef="Card_Header">{header}</SCardHeader>}
      <SCardContent sRef="Card_Content">{children}</SCardContent>
    </SCard>
  )
}
