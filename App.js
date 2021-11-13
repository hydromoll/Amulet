import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MainPage} from './page/MainPage';
import CategoryScreen from './page/CategoryScreen';
import AmuletPage from './page/AmuletPage';
import PolicyPage from './page/PolicyPage';
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="App"
        screenOptions={{
          headerShown: false,
        }}
        options={{
          animationEnabled: true,
        }}>
        <Stack.Screen name="FirstPage" component={MainPage} />
        <Stack.Screen name="SecondPage" component={CategoryScreen} />
        <Stack.Screen name="ThirdPage" component={AmuletPage} />
        <Stack.Screen name="Policy" component={PolicyPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
