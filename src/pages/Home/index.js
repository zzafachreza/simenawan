import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Alert,
} from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { fonts, windowWidth, colors } from '../../utils';
import { MyButton, MyGap, MyInput, MyHeader } from '../../components';

import RNExitApp from 'react-native-exit-app';
import { getData, storeData } from '../../utils/localStorage';
import { color } from 'react-native-elements/dist/helpers';
import 'intl';
import 'intl/locale-data/jsonp/en';

const DataKategori = ({ icon, nama, onPress, img = require('../../assets/hospital.png') }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: colors.white,
        padding: 5,
        borderRadius: 20,
        width: windowWidth / 5,
        elevation: 5,
      }}>
      <View style={{ width: windowWidth / 6, overflow: 'hidden', height: 60, backgroundColor: colors.white, borderRadius: 40, justifyContent: 'center', alignContent: 'center' }}>
        <Image source={img} style={{
          width: 40,
          height: 40,
          alignSelf: 'center'
        }} />
      </View>
      <View>
        <Text
          style={{
            fontFamily: fonts.secondary[600],
            color: colors.black,
            fontSize: windowWidth / 42,
            textAlign: 'center',
          }}>
          {nama}
        </Text>
      </View>
    </TouchableOpacity>
  );
};


export default function Home({ navigation }) {

  const [user, setUser] = useState({});



  useEffect(() => {

    getData('user').then(res => {
      setUser(res);
    })

  })




  const IndonesiaTgl = (tgl) => {

    var bulan = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    var _tanggal = new Date(tgl).getDate();
    var _bulan = new Date(tgl).getMonth();
    var _tahun = new Date(tgl).getFullYear();


    return `${_tanggal} ${bulan[_bulan]} ${_tahun}`
  }


  const MyTable = ({ label, value }) => {
    return (
      <View style={{
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.border
      }}>
        <Text style={{
          fontFamily: fonts.secondary[600],
          fontSize: windowWidth / 23,
          color: colors.black
        }}>{label}</Text>
        <Text style={{
          fontFamily: fonts.secondary[400],
          fontSize: windowWidth / 23,
          color: colors.black
        }}>{value}</Text>
      </View>
    )
  }


  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          padding: 10
        }}>
        <ScrollView>
          <View style={{ flexDirection: 'row', padding: 10 }}>
            <View style={{ flex: 1, }}>
              <Image
                source={require('../../assets/logo.png')}
                style={{ width: 60, height: 60 }}
              />
              <Text style={{
                fontFamily: fonts.secondary[800],
                fontSize: windowWidth / 20,
                color: colors.black,
                marginBottom: 10,
              }}>SIMENAWAN</Text>
              <Text style={{
                fontFamily: fonts.secondary[400],
                fontSize: windowWidth / 25,
                color: colors.black
              }}>Selamat datang <Text style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 25,
                color: colors.black
              }}>{user.nama}</Text> </Text>
            </View>
            <View>
              <Image source={{
                uri: 'https://simenawan.mpssukorejo.com/assets/images/foto/' + user.foto
              }}
                style={{ width: 100, borderRadius: 10, resizeMode: 'contain', aspectRatio: 1 }} />
            </View>

          </View>

          {/* section 2 */}

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: windowWidth / 4, backgroundColor: colors.primary }}>
            <TouchableOpacity onPress={() => navigation.navigate('MenuOrangTua')} style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ width: 60, overflow: 'hidden', height: 60, backgroundColor: colors.white, borderRadius: 40, justifyContent: 'center', alignContent: 'center' }}>
                <Image source={require('../../assets/logo.png')} style={{
                  width: 40,
                  height: 40,
                  alignSelf: 'center'
                }} />
              </View>
              <Text style={{
                top: 5,
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 35,
                color: colors.white
              }}>
                Orang Tua
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MenuPasutri')} style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ width: 60, height: 60, overflow: 'hidden', height: 60, backgroundColor: colors.white, borderRadius: 40, justifyContent: 'center', alignContent: 'center' }}>
                <Image source={require('../../assets/logo.png')} style={{
                  width: 40,
                  height: 40,
                  alignSelf: 'center'
                }} />
              </View>
              <Text style={{
                top: 5,
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 35,
                color: colors.white
              }}>
                Suami / Istri
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MenuAnak')} style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ width: 60, height: 60, overflow: 'hidden', height: 60, backgroundColor: colors.white, borderRadius: 40, justifyContent: 'center', alignContent: 'center' }}>
                <Image source={require('../../assets/logo.png')} style={{
                  width: 40,
                  height: 40,
                  alignSelf: 'center'
                }} />
              </View>
              <Text style={{
                top: 5,
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 35,
                color: colors.white
              }}>
                Anak
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: windowWidth / 4, backgroundColor: colors.primary }}>
            <TouchableOpacity onPress={() => navigation.navigate('MenuPendidikan')} style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ width: 60, overflow: 'hidden', height: 60, backgroundColor: colors.white, borderRadius: 40, justifyContent: 'center', alignContent: 'center' }}>
                <Image source={require('../../assets/logo.png')} style={{
                  width: 40,
                  height: 40,
                  alignSelf: 'center'
                }} />
              </View>
              <Text style={{
                top: 5,
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 35,
                color: colors.white
              }}>
                Pendidikan
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MenuPengalaman')} style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ width: 60, height: 60, overflow: 'hidden', height: 60, backgroundColor: colors.white, borderRadius: 40, justifyContent: 'center', alignContent: 'center' }}>
                <Image source={require('../../assets/logo.png')} style={{
                  width: 40,
                  height: 40,
                  alignSelf: 'center'
                }} />
              </View>
              <Text style={{
                top: 5,
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 35,
                color: colors.white
              }}>
                Pengalaman Kerja
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MenuPelatihan')} style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ width: 60, height: 60, overflow: 'hidden', height: 60, backgroundColor: colors.white, borderRadius: 40, justifyContent: 'center', alignContent: 'center' }}>
                <Image source={require('../../assets/logo.png')} style={{
                  width: 40,
                  height: 40,
                  alignSelf: 'center'
                }} />
              </View>
              <Text style={{
                top: 5,
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 35,
                color: colors.white
              }}>
                Pelatihan
              </Text>
            </TouchableOpacity>
          </View>



          {/* menu */}

          <MyTable label="nama" value={user.nama} />
          <MyTable label="NIK" value={user.nik} />
          <MyTable label="Noka JHT" value={user.nokajht} />

          <MyTable label="BP Jamsostek" value={user.nokakes} />
          <MyTable label="NPWP" value={user.npwp} />
          <MyTable label="ID Resmi" value={user.idresmi} />
          <MyTable label="Jenis Kelamin" value={user.jk == "P" ? "Perempuan" : "Laki-laki"} />
          <MyTable label="Jabatan" value={user.jab} />
          <MyTable label="Bagian" value={user.dept} />
          <MyTable label="Tempat Tanggal Lahir" value={`${user.tmp_lahir}, ${IndonesiaTgl(user.tgl_lahir)}`} />
          <MyTable label="Umur" value={user.nik} />
          <MyTable label="Golongan Darah" value={user.gol_darah} />
          <MyTable label="Agama" value={user.agama} />
          <MyTable label="Status" value={user.status} />
          <MyTable label="No. Telp" value={user.telp} />
          <MyTable label="Email" value={user.email} />

          <MyTable label="Alamat" value={user.alamat} />
          <MyTable label="Upah" value={new Intl.NumberFormat().format(user.gaji)} />
          <MyTable label="Pensiun" value={user.nik} />





        </ScrollView>

      </SafeAreaView>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: 60, padding: 10, backgroundColor: colors.white, borderTopWidth: 1, borderTopColor: colors.primary }}>

        <TouchableOpacity style={{ width: 80, justifyContent: 'center', alignItems: 'center' }}>
          <Icon type="ionicon" name="home" color={colors.primary} />
          <Text style={{
            fontFamily: fonts.secondary[400],
            fontSize: windowWidth / 35,
            color: colors.black
          }}>Beranda</Text>
        </TouchableOpacity>




        <TouchableOpacity onPress={() => navigation.navigate('MenuProfileEdit')} style={{ width: 80, justifyContent: 'center', alignItems: 'center' }}>
          <Icon type="ionicon" name="person" color={colors.tertiary} />
          <Text style={{
            fontFamily: fonts.secondary[400],
            fontSize: windowWidth / 35,
            color: colors.black
          }}>Update Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {

          Alert.alert(
            "SIMENAWAN",
            "Apakah Anda yakin akan keluar ?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              {
                text: "OK", onPress: () => {
                  storeData('user', null);

                  navigation.replace('Login');
                }
              }
            ]
          );

        }} style={{ width: 100, justifyContent: 'center', alignItems: 'center' }}>
          <Icon type="ionicon" name="log-out" color={colors.secondary} />
          <Text style={{
            fontFamily: fonts.secondary[400],
            fontSize: windowWidth / 35,
            color: colors.black
          }}>Logout / Keluar</Text>
        </TouchableOpacity>


      </View>
    </>
  );
}



const styles = StyleSheet.create({

})
