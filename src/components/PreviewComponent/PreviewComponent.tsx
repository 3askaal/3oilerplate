import React, { FC, ReactElement, useState } from 'react'
import { Code } from '@components'
import {
  SPreviewComponent,
  SPreviewComponentContent,
} from './PreviewComponent.styled'

export interface PreviewComponentProps {
  children?: any
}

export const PreviewComponent: FC<PreviewComponentProps> = ({
  children,
  ...props
}: PreviewComponentProps): ReactElement => {
  const [dataBinding, setDataBinding] = useState<any>(null)

  function handleOnChange(child: any) {
    const newChild: any = {
      ...child,
      props: {
        ...child.props,
        onChange: (newValue: any) => {
          if (typeof newValue === 'string' || typeof newValue === 'boolean') {
            setDataBinding(newValue)
          }
        },
      },
    }

    return newChild
  }

  return (
    <SPreviewComponent {...props}>
      <SPreviewComponentContent>
        {handleOnChange(children)}
      </SPreviewComponentContent>
      <Code data-testid="preview-component-code">{children}</Code>
      {dataBinding !== null ? (
        <Code
          data-testid="preview-component-code-onchange"
          content={`onChange => ${JSON.stringify(dataBinding)}`}
          s={{ mt: 's' }}
        />
      ) : null}
    </SPreviewComponent>
  )
}
