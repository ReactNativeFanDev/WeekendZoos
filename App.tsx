import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigations } from './src/navigation/Navigations';


function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Navigations />
    </NavigationContainer>
  );
}

export default App;