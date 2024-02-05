import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Rate from './pages/rate';
import Chatting from './pages/chatting';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="rate" component={Rate} /> */}
        <Stack.Screen name="chatting" component={Chatting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
