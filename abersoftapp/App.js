import { StatusBar } from 'expo-status-bar';
import React from 'react';

// State Management Imports
import { Provider } from 'react-redux';
import store from './store'

// Navigation Imports
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Page Imports
import Start from './pages/Start'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'

export default function App() {

  const Stack = createStackNavigator()

  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Start' component={Start} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Home' component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
