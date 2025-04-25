import React from 'react';
import { StatusBar, View } from 'react-native';

import {
  useFonts,
  Karla_300Light,
  Karla_400Regular,
  Karla_700Bold
} from '@expo-google-fonts/karla';

import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from './config/gluestack-ui.config';

import { Loading } from './src/components/Loading';
import { SignIn } from './src/screens/SignIn';
import { SignUp } from '@screens/SignUp';


export default function App() {
  const [fontsLoaded] = useFonts({ Karla_300Light, Karla_400Regular, Karla_700Bold })

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <SignUp /> : <Loading />}
    </GluestackUIProvider>
  )
}
