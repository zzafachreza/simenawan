import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import { fonts, windowWidth, colors } from '../../utils';
import { MyInput, MyGap, MyButton } from '../../components';
import axios from 'axios';
import { storeData } from '../../utils/localStorage';


export default function ({ navigation }) {

  const [kirim, setKirim] = useState({
    nik: null,
    password: null
  });
  const [loading, setLoading] = useState(false);



  const masuk = () => {


    if (kirim.nik == null && kirim.password == null) {
      alert('NIK dan Passwoord tidak boleh kosong !');
    } else if (kirim.nik == null) {
      alert('NIK tidak boleh kosong !');
    } else if (kirim.password == null) {
      alert('Passwoord tidak boleh kosong !');
    } else {


      // post API

      setLoading(true);

      console.log(kirim);

      axios.post('https://mpsskj.com/api/login.php', kirim).then(res => {
        console.log(res.data);

        if (res.data.kode === 50) {

          setTimeout(() => {
            setLoading(false);
            alert(res.data.msg);
          }, 1200)



        } else {
          // alert('success');
          storeData('user', res.data);

          setTimeout(() => {
            navigation.replace('Home')
          }, 800)

        }

      })

    }




  }

  return (
    <ScrollView style={{ padding: 10, flex: 1 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../../assets/logo_awal.png')}
          style={{ aspectRatio: 1, resizeMode: 'contain', height: 250 }}
        />

      </View>
      <MyGap jarak={40} />
      <View style={{ padding: 10, marginVertical: 10, flex: 1 }}>
        <MyInput keyboardType='number-pad' label="NIK" onChangeText={val => setKirim({
          ...kirim,
          nik: val
        })}


          iconname="card" placeholder="Masukan NIK Anda" maxLength={16} />
        <MyGap jarak={20} />
        <MyInput
          onChangeText={val => setKirim({
            ...kirim,
            password: val
          })}
          secureTextEntry={true}
          label="Password"
          iconname="key"
          placeholder="Masukan password Anda"
        />
        <MyGap jarak={40} />
        {!loading && <MyButton
          onPress={masuk}
          title="LOGIN SEKARANG"
          warna={colors.primary}
          Icons="log-in-outline"
        />}
      </View>
      {loading && <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ActivityIndicator color={colors.primary} size="large" />
      </View>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
