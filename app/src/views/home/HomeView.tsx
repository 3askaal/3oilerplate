import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Spacer, Title, Text, Button } from '../../../../src'
import { Logo, Bricks } from '../../components'
import { SHome } from './Home.styled'

export const HomeView = () => {
  return (
    <SHome>
      <Bricks />
      <Container s={{ justifyContent: 'center', maxWidth: 'auto', paddingX: 'm' }}>
        <Spacer size="l">
          <Spacer size="m" s={{ alignItems: 'center' }}>
            <Logo />
            <Spacer size="xs" s={{ textAlign: 'center' }}>
              <Title as="h4" s={{ color: 'grey[80]' }}>
                Personal component library and toolkit for React
              </Title>
            </Spacer>
          </Spacer>
          <Spacer s={{ flexDirection: 'row', justifyContent: 'center' }}>
            <NavLink to="/docs">
              <Button rounded>Docs</Button>
            </NavLink>
            <NavLink to="/components">
              <Button rounded secondary>Components</Button>
            </NavLink>
          </Spacer>
        </Spacer>
      </Container>
    </SHome>
  )
}
