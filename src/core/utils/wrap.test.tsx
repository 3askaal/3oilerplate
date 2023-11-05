import React from 'react'
import { s } from '@core'
import { render } from '@tests'

describe('styled', () => {
  it('with default styles', () => {
    const StyledEl = s.button({
      color: 'red',
    })

    const { queryByTestId } = render(<StyledEl data-testid="styled" />)
    const style = getComputedStyle(queryByTestId('styled'))
    expect(style.color).toBe('red')
  })

  it('with variant styles', () => {
    const StyledEl = s.div(
      {
        color: 'red',
      },
      { isBlue: { color: 'blue' } },
    )

    const { queryByTestId } = render(<StyledEl isBlue data-testid="styled" />)
    const style = getComputedStyle(queryByTestId('styled'))
    expect(style.color).toBe('blue')
  })

  it('overriding styles inline', () => {
    const StyledEl = s.button({
      color: 'red',
    })

    const { queryByTestId } = render(
      <StyledEl data-testid="styled" s={{ color: 'green' }} />,
    )

    const style = getComputedStyle(queryByTestId('styled'))
    expect(style.color).toBe('green')
  })

  it('overriding default s from theme', () => {
    const StyledEl = s.button(
      {
        color: 'red',
      },
      {},
      'Button',
    )

    const { queryByTestId } = render(<StyledEl data-testid="styled" />, {
      theme: {
        components: {
          Button: {
            default: {
              color: 'magenta',
            },
          },
        },
      },
    })

    const style = getComputedStyle(queryByTestId('styled'))
    expect(style.color).toBe('magenta')
  })

  it('adding and applying variants from the theme', () => {
    const StyledEl = s.button(
      {
        color: 'red',
      },
      {},
      'Button',
    )

    const { queryByTestId } = render(<StyledEl data-testid="styled" isCyan />, {
      theme: {
        components: {
          Button: {
            variants: {
              isCyan: {
                color: 'cyan',
              },
            },
          },
        },
      },
    })

    const style = getComputedStyle(queryByTestId('styled'))
    expect(style.color).toBe('cyan')
  })

  test.skip('overriding styles of children', () => {
    const StyledChild = s.button(
      {
        color: 'red',
      },
      {},
      '_child',
    )

    const StyledParent = s.div({
      bg: 'blue',
    })

    const WrappedEl: any = () => (
      <StyledParent>
        <StyledChild data-testid="styled" />
      </StyledParent>
    )

    const { queryByTestId } = render(
      <WrappedEl s={{ _child: { color: 'green' } }} />,
    )

    const style = getComputedStyle(queryByTestId('styled'))
    expect(style.color).toBe('green')
  })
})
