import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';

import { callHello } from '@/utils/libs';

export default class ExampleEvent extends Component {
  constructor(props: {}) {
    super(props);
    console.log('Phương thức khởi tạo');
  }

  XL_Nhan() {
    callHello();
  }

  UNSAFE_componentWillMount() {
    console.log('Phương thức componentWillMount');
  }
  render() {
    return (
      <View style={styles.middle}>
        <TouchableOpacity onPress={() => this.XL_Nhan()}>
          {/* <TouchableOpacity onPress={this.XL_Nhan.bind(this)}> */}
          <Text>Gọi Phương thức nhấn</Text>
        </TouchableOpacity>
        <View style={[styles.box, styles.big_green_box]}>
          <View style={[styles.inner_box, styles.orange_box]}></View>
        </View>
        <Button title='Click me' onPress={this.XL_Nhan} />
      </View>
    );
  }

  componentDidMount() {
    console.log('Phương thức componentDidMount');
  }
  componentWillUnmount() {
    console.log('Phương thức componentWillUnmount');
  }
}

const styles = StyleSheet.create({
  middle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#333',
  },
  big_green_box: {
    backgroundColor: 'green',
  },
  inner_box: {
    width: 20,
    height: 20,
  },
  orange_box: {
    position: 'absolute',
    backgroundColor: 'orange',
    top: 10,
    right: 10,
  },
});
