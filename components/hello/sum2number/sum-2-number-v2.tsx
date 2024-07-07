import React, { useEffect } from 'react';
import { Text, TextInput, View } from 'react-native';

import { Header } from '../03/header';

const isNumeric = (str: string) => /^[+-]?\d+(\.\d+)?$/.test(str);

type Props = {};
type IState = {
  num_1: string;
  num_2: string;
};

const defaultState: IState = {
  num_1: '',
  num_2: '',
};
function Sum2NumberV2() {
  const [state, setState] = React.useState<IState>(defaultState);
  const [sumResult, setSumResult] = React.useState<number>(0);

  useEffect(() => {
    if (isNumeric(state.num_1) && isNumeric(state.num_2)) {
      const result = Number(state.num_1) + Number(state.num_2);
      setSumResult(result);
    }
    return () => {
      setSumResult(0);
    };
  }, [state.num_1, state.num_2]);

  const onHandleChangeText = (name: string, value: string) => {
    if (isNumeric(value)) {
      //@ts-ignore
      setState({ ...state, [name]: Number(value) });
    }
  };

  const { num_1, num_2 } = state;

  return (
    <View>
      <Header title={`Result of ${num_1} and ${num_2} is : ${sumResult}`} subtitle='' />
      <View>
        <Text>Number 1</Text>
        <TextInput
          keyboardType='numeric'
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(val: string) => onHandleChangeText('num_1', val)}
          value={num_1}
        />
      </View>
      <View>
        <Text>Number 2</Text>
        <TextInput
          keyboardType='numeric'
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(val: string) => onHandleChangeText('num_2', val)}
          value={num_1}
        />
      </View>
    </View>
  );
}

export default Sum2NumberV2;
