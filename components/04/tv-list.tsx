import { FlatList, Text, View } from 'react-native';

import { Du_lieu } from './tv.data';

export function NhomTivi() {
  return (
    <View>
      <View>
        <Text>Danh sách Nhóm Tivi</Text>
      </View>
      <View>
        <FlatList
          data={Du_lieu.Danh_sach_Nhom_Tivi}
          keyExtractor={(item) => item.Ma_so}
          renderItem={({ item, index }) => {
            return (
              // <View>
              //     <Text>{item.Ma_so} - {item.Ten}</Text>
              // </View>
              <FlatListItem indexNumber={index} item={item} />
            );
          }}
        />
      </View>
    </View>
  );
}

function FlatListItem(props: { indexNumber: number; item: { Ma_so: string; Ten: string } }) {
  const { indexNumber, item } = props;
  return (
    <View>
      <Text>
        {indexNumber + 1} - {item.Ten}
      </Text>
    </View>
  );
}
