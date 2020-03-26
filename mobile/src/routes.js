import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';
import { ThemeProvider } from 'styled-components';
import light from './theme/light';
import dark from './theme/dark';

const Stack = createStackNavigator();

export default function Routes(){
  const [checked, setChecked] = useState('');

  return(
    <ThemeProvider theme={checked ? light : dark}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

          
            <Stack.Screen name="Incidents">
              {props => <Incidents setChecked={setChecked} checked={checked} />}
            </Stack.Screen>
            <Stack.Screen name="Detail" component={Detail} />
          
            
          
          
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}