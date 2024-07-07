import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import { ScreenOrientationProvider } from '@/context/screen-orientation-context';
import { UserView } from '@/components/04/user';

// import { UserView } from '@/components/04/user';

// import { NhomTivi } from '@/components/04/tv-list';

// export default function Login() {
//   // const insets = useSafeAreaInsets();

//   return (
//     <ScreenOrientationProvider>
//       <SafeAreaView style={styles.container}>
//         {/* <Text>aaaaaaaaaaaaaaaaa</Text> */}
//         <UserView />
//       </SafeAreaView>
//     </ScreenOrientationProvider>
//   );
// }

export default function Login() {
  // const insets = useSafeAreaInsets();

  return (
    <View className='flex-1 items-center justify-center bg-orange-600'>
      <Text className='text-white font-bold text-4xl'>Open up App.js to start working on your app!</Text>
      <StatusBar  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
