import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { ScreenOrientationProvider } from '@/context/screen-orientation-context';
import { UserView } from '@/components/04/user';

// import { UserView } from '@/components/04/user';

// import { NhomTivi } from '@/components/04/tv-list';

export default function Login() {
  // const insets = useSafeAreaInsets();

  return (
    <ScreenOrientationProvider>
      <SafeAreaView style={styles.container}>
        {/* <Text>aaaaaaaaaaaaaaaaa</Text> */}
        <UserView />
      </SafeAreaView>
    </ScreenOrientationProvider>
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
