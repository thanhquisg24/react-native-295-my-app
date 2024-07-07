import { Dimensions, FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native';

import { Du_lieu } from './tv.data';
import { useScreenOrientation } from '@/context/useScreenOrientation';
import { useState } from 'react';

const { width, height } = Dimensions.get('window');

const screenWidth = width < height ? width : height;
const numColumns = 2;
const gap = 5;

const availableSpace = screenWidth - (numColumns - 1) * gap;
const itemSize = availableSpace / numColumns;

const URL_POINT = 'http://192.168.2.9:8081/assets/images/';

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'row',
    width: itemSize,
    minHeight: itemSize,
  },
  border: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
  },
  itemText: {
    color: '#000000',
    padding: 5,
    fontSize: 14,
  },
  inputContainer: {
    borderColor: '#b9b7b7',
    backgroundColor: '#4387fd',
    borderBottomWidth: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
  },
  inputs: {
    height: 40,
    marginRight: 5,
    borderBottomColor: '#FFFFFF',
    flex: 1,
    color: '#ffffff',
  },
  inputIcon: {
    width: 26,
    height: 26,
    tintColor: '#ffffff',
    marginRight: 5,
    justifyContent: 'center',
  },
  tieude: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    backgroundColor: 'teal',
    padding: 10,
  },
});

function UserItem(props: { item: { Ma_so: string; Ten: string; Don_gia: number }; index: number }) {
  const { item } = props;
  // console.log('🚀 ~ file: user.tsx:63 ~ UserItem ~ item:', item);
  return (
    <View style={[styles.box, styles.border]}>
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
        {/* <Text>HHHHHHHH</Text> */}
        <Image
          style={{ height: 80, width: itemSize - 8, margin: 5 }}
          source={{ uri: `${URL_POINT}/${item.Ma_so}.png` }}
        ></Image>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={[styles.itemText, { color: 'teal', fontSize: 16 }]}>{item.Ten}</Text>
          <Text style={[styles.itemText, { color: 'red' }]}>
            Đơn giá: {Number(item.Don_gia).toLocaleString() + ' VNĐ'}
          </Text>
        </View>
      </View>
      <View style={{ height: 1, backgroundColor: '#e6e5e5' }}></View>
    </View>
  );
}
const initDsTv = Du_lieu.Danh_sach_Tivi;
export function UserView() {
  const { config } = useScreenOrientation();
  const [listTv, setListTv] = useState(initDsTv);
  const [searchString, setSearchString] = useState('');
  const onHandleChangeText = (val: string) => {
    setSearchString(val);
  };
  const onEndText = () => {
    if (searchString.length === 0) {
      setListTv(initDsTv);
      return;
    }
    const newList = initDsTv.filter((item) => item.Ten.toLowerCase().includes(searchString.toLowerCase()));
    setListTv(newList);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.inputContainer}>
        {/* <Text style={styles.tieude}>Danh sách User</Text> */}
        {/* <TextInput placeholder='jjjj' style={styles.inputs} /> */}
        <TextInput
          style={styles.inputs}
          onEndEditing={onEndText}
          onChangeText={(val: string) => onHandleChangeText(val)}
          value={searchString}
        />
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          numColumns={config.flatList.numColumns}
          key={config.flatList.numColumns}
          contentContainerStyle={{ gap: config.flatList.gap, paddingBottom: config.flatList.gap }}
          columnWrapperStyle={{ gap: config.flatList.gap }}
          data={listTv}
          keyExtractor={(item) => item.Ma_so}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return <UserItem item={item} index={index}></UserItem>;
          }}
        ></FlatList>
      </View>
    </View>
  );
}
