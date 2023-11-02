import React from 'react'
import { s } from '../../../utils'

interface BoxProps {
  [key: string]: any;
}

export const SBox: any = s.div()

// eslint-disable-next-line
const getAttrStyling = ({
  poss,
  posr,
  posa,
  posf,
  r,
  l,
  t,
  b,
  db,
  dib,
  w,
  h,
  w100p,
  h100p,
  mw,
  mh,
  ovh,
  df,
  dif,
  fdr,
  fdc,
  fwnw,
  fww,
  fwwr,
  ai,
  aic,
  aifs,
  aife,
  jcc,
  jcsb,
  jcsa,
  jcfs,
  jcfe,
  asc,
  asfs,
  asfe,
  jsc,
  jsfs,
  jsfe,
  fg,
  fs,
  fb,
  o,
}: BoxProps) => {
  return {
    ...(poss && { position: 'static'}),
    ...(posr && { position: 'relative'}),
    ...(posa && { position: 'absolute'}),
    ...(posf && { position: 'fixed'}),
    ...(r !== undefined && { right: r }),
    ...(l !== undefined && { left: l }),
    ...(t !== undefined && { top: t }),
    ...(b !== undefined && { bottom: b }),
    ...(db && { display: 'block'}),
    ...(dib && { display: 'inline-block'}),
    ...(w !== undefined && { width: w }),
    ...(h !== undefined && { height: h }),
    ...(w100p && { width: '100%'}),
    ...(h100p && { height: '100%'}),
    ...(mw !== undefined && { maxWidth: mw }),
    ...(mh !== undefined && { maxHeight: mh }),
    ...(ovh && { overflow: 'hidden' }),
    ...(df && { display: 'flex'}),
    ...(dif && { display: 'inline-flex'}),
    ...(fdr && { flexDirection: 'row' }),
    ...(fdc && { flexDirection: 'column' }),
    ...(fwnw && { flexWrap: 'nowrap' }),
    ...(fww && { flexWrap: 'wrap' }),
    ...(fwwr && { flexWrap: 'wrap-reverse' }),
    ...(ai && { alignItems: ai }),
    ...(aic && { alignItems: 'center'}),
    ...(aifs && { alignItems: 'flex-start' }),
    ...(aife && { alignItems: 'flex-end' }),
    ...(jcc && { justifyContent: 'center'}),
    ...(jcsb && { justifyContent: 'space-between'}),
    ...(jcsa && { justifyContent: 'space-around'}),
    ...(jcfs && { justifyContent: 'flex-start' }),
    ...(jcfe && { justifyContent: 'flex-end' }),
    ...(asc && { alignSelf: 'center'}),
    ...(asfs && { alignSelf: 'flex-start'}),
    ...(asfe && { alignSelf: 'flex-end'}),
    ...(jsc && { justifySelf: 'center'}),
    ...(jsfs && { justifySelf: 'flex-start'}),
    ...(jsfe && { justifySelf: 'flex-end'}),
    ...(fg && { flexGrow: fg }),
    ...(fs && { flexShrink: fs }),
    ...(fb && { flexBasis: fb }),
    ...(o !== undefined && { order: o }),
  }
}

export const Box = ({ s: sProp, ...props }: any) => {
  return <SBox sRef="Box" {...props} s={{ ...sProp, ...getAttrStyling(props) }} />
}

Box.displayName = 'Box'
