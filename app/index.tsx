import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import SafeView from '@/components/layout/SafeView';
import { ScreenOrientationProvider } from '@/context/screen-orientation-context';
import { TextWind } from '@/components/nativewind-ex/test-component';
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
    // <TextWind />
    <SafeView>
      {/* <Text> aaaaaaaaa</Text> */}
      <TextWind />
    </SafeView>
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
