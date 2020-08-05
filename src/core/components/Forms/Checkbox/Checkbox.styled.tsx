import { styled } from '../../../utils'

export const SCheckbox = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '1.4rem',
  height: '1.4rem',
  flexShrink: 0,
  cursor: 'pointer',
  border: 'thick',
  color: 'primary',
  borderColor: 'currentColor',
  borderRadius: 'm',
  padding: 'xxs',

  // '@media (hover: hover)': {
  //   ':hover': {
  //     '> *': {
  //       opacity: 0.5,
  //       backgroundColor: 'primary',
  //     },
  //   },
  // },
})

export const SCheckboxIndicator = styled.div(
  {
    width: '100%',
    height: '100%',
    borderRadius: '1px',
  },
  {
    isChecked: {
      backgroundColor: 'currentColor',
    },
  },
)

export const SCheckboxInput = styled.input({
  display: 'none',
})

export const SCheckboxLabel = styled.div({
  marginLeft: 's',
})

export const SCheckboxWrapper = styled.label(
  {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  {
    isDisabled: {
      opacity: 0.6,
      pointerEvents: 'none',
    },
  },
)