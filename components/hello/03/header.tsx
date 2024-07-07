import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

// Child class component
type Props = { title: string; subtitle: string };
type State = {};
export class Header extends React.Component<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text style={style.header}>{this.props.title}</Text>
        <Text style={style.header}>{this.props.subtitle}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 2,
    color: 'red',
    fontWeight: 'bold',
  },
});
