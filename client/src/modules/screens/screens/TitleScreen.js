import React from 'react'
import { Screen } from '../components'
import { Title, LayoutWrapper, Button } from '../../shared'

export const TitleScreen = ({goToLobby, goToOptions, goToAbout}) => 
  <Screen>
    <LayoutWrapper weight={1} align='start'>
      <Title shadow={true} size='enormous'>IRONGUNZ</Title>
    </LayoutWrapper>
    <LayoutWrapper weight={1} direction='horizontal' align='end' justify='end'>
      <Button onClick={goToLobby}> Start </Button>
      <Button onClick={goToOptions}> Options </Button>
      <Button onClick={goToAbout}> About </Button>
    </LayoutWrapper>
  </Screen>