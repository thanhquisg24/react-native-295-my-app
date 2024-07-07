import { Text, TextInput, View } from 'react-native';

import { Header } from '../03/header';
import React from 'react';

const isNumeric = (str: string) => /^[+-]?\d+(\.\d+)?$/.test(str);

type Props = {};
type State = {
  num_1: string;
  num_2: string;
  sumResult: number;
};

const defaultState: State = {
  num_1: '',
  num_2: '',
  sumResult: 0,
};
class Sum2Number extends React.Component<Props, State> {
  constructor(props: {}) {
    super(props);
    this.state = defaultState;
  }

  onHandleChangeText = (name: string, value: string) => {
    if (isNumeric(value)) {
      //@ts-ignore
      this.setState({ [name]: Number(value) });
    }
  };

  render() {
    const { num_1, num_2, sumResult } = this.state;
    return (
      <View>
        <Header title={`Result of ${num_1} and ${num_2} is : ${sumResult}`} subtitle='' />
        <View>
          <Text>Number 1</Text>
          <TextInput
            keyboardType='numeric'
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(val: string) => this.onHandleChangeText('num_1', val)}
            value={num_1}
          />
        </View>
        <View>
          <Text>Number 2</Text>
          <TextInput
            keyboardType='numeric'
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(val: string) => this.onHandleChangeText('num_2', val)}
            value={num_1}
          />
        </View>
      </View>
    );
  }
}

export default Sum2Number;
