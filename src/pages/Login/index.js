import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { fonts, windowWidth, colors } from '../../utils';
import { MyInput, MyGap, MyButton } from '../../components';
import axios from 'axios';


export default function () {

  const [kirim, setKirim] = useState({});

  const masuk = () => {

    console.log(kirim);

    axios.post('https://simenawan.mpssukorejo.com/api/login.php', kirim).then(res => {
      console.log(res.data);
    })

  }

  return (
    <ScrollView style={{ padding: 10, flex: 1 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../../assets/logo.png')}
          style={{ width: 100, height: 100 }}
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
      <View style={{ padding: 10, marginVertical: 10, flex: 1 }}>
        <MyInput label="NIK" onChangeText={val => setKirim({
          ...kirim,
          nik: val
        })}


          iconname="card" placeholder="Masukan NIK Anda" />
        <MyGap jarak={20} />
        <MyInput
          onChangeText={val => setKirim({
            ...kirim,
            password: val
          })}
          label="Password"
          iconname="key"
          placeholder="Masukan password Anda"
        />
        <MyGap jarak={40} />
        <MyButton
          onPress={masuk}
          title="LOGIN SEKARANG"
          warna={colors.primary}
          Icons="log-in-outline"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
