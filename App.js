import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HabitListScreen from './screens/HabitListScreen';
import AddHabitScreen from './screens/AddHabitScreen';
import HistoryScreen from './screens/HistoryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4F46E5',
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen
          name="Habits"
          component={HabitListScreen}
        />

        <Stack.Screen
          name="AddHabit"
          component={AddHabitScreen}
          options={{ title: 'Add Habit' }}
        />

        <Stack.Screen
          name="History"
          component={HistoryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}