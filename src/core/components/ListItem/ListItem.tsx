import React, { ReactElement, FC } from 'react'
import { s } from '../../utils'

export const SListItem = s.div(
  {
    padding: 's',

    '+ *': {
      borderTop: 'main',
      borderColor: 'primary',
    },
  }
)

export const ListItem: FC<any> = ({
  href,
  children,
  options,
  ...props
}: any): ReactElement => {
  return (
    <SListItem sRef="ListItem" as={href ? 'a' : 'div'} href={href} {...props}>
      {children}
    </SListItem>
  )
}

ListItem.displayName = 'ListItem'
