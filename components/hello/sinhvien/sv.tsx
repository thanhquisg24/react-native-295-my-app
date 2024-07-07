import { Alert, Text, TouchableOpacity } from 'react-native';

import { ISV } from './type';

interface IProps {
  itemIndex: number;
  svItem: ISV;
}
function buildSvText(svItem: ISV, itemIndex: number) {
  return `${itemIndex + 1}/ ${svItem.MaSV} - ${svItem.TenSV} - ${svItem.Tuoi} - ${svItem.class}`;
}
function SinhVienItem(props: IProps) {
  const { svItem, itemIndex } = props;

  const opressSv = (sv: ISV) => {
    Alert.alert('Thông báo', `Bạn chọn sinh viên ${sv.TenSV}`);
  };

  return (
    <TouchableOpacity onPress={() => opressSv(svItem)}>
      <Text style={{ color: 'green', fontWeight: 'bold' }}>{buildSvText(svItem, itemIndex)}</Text>
    </TouchableOpacity>
  );
}
export function SinhVienList(props: { mangSV: ISV[] }) {
  const { mangSV } = props;
  return mangSV.map((svItem, index) => <SinhVienItem key={svItem.MaSV} itemIndex={index} svItem={svItem} />);
}
