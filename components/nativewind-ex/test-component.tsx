import { Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

export function TextWind() {
  return (
    <View className='flex-1 items-center justify-center bg-orange-600'>
      <Text className='text-red-900 font-bold'>Open up App.js to start working on your app!</Text>
      <StatusBar style='auto' />
    </View>
  );
}
