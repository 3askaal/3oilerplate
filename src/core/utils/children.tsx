import { isArray } from 'lodash'

function passStylePropsToChildren(child: any, style: any) {
  if (child?.props?.sRef && style && style[child?.props?.sRef]) {
    console.log(child.props.sRef)
    console.log(style[child.props.sRef])

    const newChild = {
      ...child,
      props: {
        ...child.props,
        s: style[child.props.sRef],
      },
    }

    return newChild
  }

  return child
}

export function resolveStylePropOnChildren(children: any, style: any) {
  let newChildren: any

  if (isArray(children)) {
    newChildren = children.map((child: any) => {
      return passStylePropsToChildren(child, style)
    })
  } else {
    newChildren = passStylePropsToChildren(children, style)
  }

  return newChildren
}
