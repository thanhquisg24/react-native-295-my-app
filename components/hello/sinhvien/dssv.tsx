import { Header } from '../03/header';
import { ISV } from './type';
import React from 'react';
import { SinhVienList } from './sv';
import { View } from 'react-native';

type Props = {};
type State = {
  mangSV: ISV[];
};

const defaultState: State = {
  mangSV: [
    { MaSV: 'SV01', TenSV: 'Nguyễn Văn A', Tuoi: 20, class: 'js295' },
    { MaSV: 'SV02', TenSV: 'Nguyễn Văn B', Tuoi: 21, class: 'js295' },
    { MaSV: 'SV03', TenSV: 'Nguyễn Văn C', Tuoi: 22, class: 'js295' },
  ],
};
class DSSV extends React.Component<Props, State> {
  constructor(props: {}) {
    super(props);
    this.state = defaultState;
  }

  render() {
    const svList = this.state.mangSV;
    return (
      <View>
        <Header title={`Danh sách sinh viên (${svList.length})`} subtitle='' />
        <SinhVienList mangSV={svList} />
      </View>
    );
  }
}

export default DSSV;
