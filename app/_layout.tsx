import React from 'react';
import { Stack } from 'expo-router';
import { TaskProvider } from '../context/Context';
import { Provider as PaperProvider } from 'react-native-paper';

export default function RootLayout() {
  return (
    <PaperProvider>
      <TaskProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index"  options={{ title: 'Task List' }} />
          <Stack.Screen name="add-task" options={{ title: 'Add Task' }} />
        </Stack>
      </TaskProvider>
    </PaperProvider>
  );
}
