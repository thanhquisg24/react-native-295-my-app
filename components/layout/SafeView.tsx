import { Text, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  children?: React.ReactNode | JSX.Element | JSX.Element[] | string | number | boolean | null | undefined;
};
export default function SafeView(props: Props) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingBottom: insets.bottom,
        paddingRight: insets.right,
      }}
    >
      {/* <Text>aaaaaaaaaaaaaaaaa</Text> */}
      {props.children}
    </View>
  );
}
