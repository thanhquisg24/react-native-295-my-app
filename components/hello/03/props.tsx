import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "./header";
import Content from "./contents"
import Footer from "./footer";

export default class Props extends Component {
    
    constructor(props){
        super(props)
        this.nv={
            "hoten":"Nguyen Anh Tai",
            "phai": true
        }
    }
    
    render() {
        
        return (
            
            <View style={styles.container}>
                <Header title={'Trung Tâm Tin Học - ĐHKHTN'} subtitle={'Bài 3 - Chức năng Xem Thông tin'} />
                <Content noi_dung={'Minh họa Props'} nhanvien={this.nv}  />
                <Footer tieu_de={'React Native 295'} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        justifyContent:"space-between",
        flexDirection:"column"
    }
    

});