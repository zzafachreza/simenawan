import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {fonts, windowWidth, colors} from '../../utils';
import {MyInput, MyGap, MyButton} from '../../components';

export default function () {
  return (
    <ScrollView style={{padding: 10, flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../assets/logo.png')}
          style={{width: 100, height: 100}}
        />
        <Text
          style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 10,
            color: colors.black,
          }}>
          SIMENAWAN
        </Text>
        <Text
          style={{
            fontFamily: fonts.secondary[400],
            fontSize: windowWidth / 30,
            color: colors.black,
          }}>
          Sistem Informasi Manajemen Karyawan
        </Text>
      </View>
      <MyGap jarak={40} />
      <View style={{padding: 10, marginVertical: 10, flex: 1}}>
        <MyInput label="NIK" iconname="card" placeholder="Masukan NIK Anda" />
        <MyGap jarak={20} />
        <MyInput
          label="Password"
          iconname="key"
          placeholder="Masukan password Anda"
        />
        <MyGap jarak={40} />
        <MyButton
          title="LOGIN SEKARANG"
          warna={colors.primary}
          Icons="log-in-outline"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
