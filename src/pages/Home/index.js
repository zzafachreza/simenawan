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
import { useIsFocused } from "@react-navigation/native";
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
  const [foto, setfoto] = useState('');
  const isFocused = useIsFocused();

  useEffect(() => {


    if (isFocused) {



      getData('user').then(res => {
        setUser(res);

        if (res.jk == 'L' && res.foto == '') {
          setfoto('https://mpsskj.com/assets/images/foto/no-foto-male.png');
        } else if (res.jk == 'P' && res.foto == '') {
          setfoto('https://mpsskj.com/assets/images/foto/no-foto-female.png');


        } else if (res.foto.toString().substring(0, 10) != 'data:image') {
          setfoto('https://mpsskj.com/assets/images/foto/' + res.foto)

        } else if (res.foto.toString().substring(0, 10) == 'data:image') {
          setfoto(res.foto)
        }

      })
    }

  }, [isFocused])




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

  const GetUmur = (tgl) => {
    var today = new Date();
    var birthday = new Date(tgl);
    var year = 0;
    if (today.getMonth() < birthday.getMonth()) {
      year = 1;
    } else if ((today.getMonth() == birthday.getMonth()) && today.getDate() < birthday.getDate()) {
      year = 1;
    }
    var age = today.getFullYear() - birthday.getFullYear() - year;

    if (age < 0) {
      age = 0;
    }

    return age;
  }

  const GetPensiun = (tgl) => {
    var today = new Date();
    var birthday = new Date(tgl);
    var year = 0;
    if (today.getMonth() < birthday.getMonth()) {
      year = 1;
    } else if ((today.getMonth() == birthday.getMonth()) && today.getDate() < birthday.getDate()) {
      year = 1;
    }
    var age = today.getFullYear() - birthday.getFullYear() - year;
    var pensiun = '';

    if (age < 0) {
      age = 0;
    }


    if (age > 56) {
      pensiun = 'Anda Sudah Pensiun';
    } else {
      pensiun = (56 - age);
    }

    return pensiun;
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
                source={require('../../assets/logo_awal.png')}
                style={{ height: 100, resizeMode: 'contain', aspectRatio: 1 }}
              />

              <Text style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.black,
                marginBottom: 10,
              }}>MPS Sukorejo</Text>
              <Text style={{
                fontFamily: fonts.secondary[400],
                fontSize: windowWidth / 25,
                color: colors.black
              }}>Selamat datang {' '}

                <Text style={{
                  fontFamily: fonts.secondary[600],
                  fontSize: windowWidth / 25,
                  color: colors.black,

                }}>{user.nama}</Text>



              </Text>
            </View>
            <View>
              <Image source={{
                uri: foto
              }}
                style={{ width: 100, borderRadius: 10, resizeMode: 'contain', aspectRatio: 1 }} />

            </View>

          </View>

          {/* section 2 */}

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: windowWidth / 4, backgroundColor: colors.primary }}>
            <TouchableOpacity onPress={() => navigation.navigate('MenuOrangTua')} style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ width: 60, overflow: 'hidden', height: 60, backgroundColor: colors.white, borderRadius: 40, justifyContent: 'center', alignContent: 'center' }}>
                <Image source={require('../../assets/ortu.png')} style={{
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
                <Image source={require('../../assets/pasutri.png')} style={{
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
                <Image source={require('../../assets/Anak.png')} style={{
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
                <Image source={require('../../assets/pendidikan.png')} style={{
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
                <Image source={require('../../assets/pengalaman.png')} style={{
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
                <Image source={require('../../assets/pelatihan.png')} style={{
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

          <MyTable label="Nama" value={user.nama} />
          <View style={{
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: colors.border
          }}>
            <Text style={{
              fontFamily: fonts.secondary[600],
              fontSize: windowWidth / 23,
              color: colors.black
            }}>Foto KTP</Text>
            <Image source={{ uri: user.foto_ktp }} style={{
              width: '100%',
              resizeMode: 'contain',
              // height: 300,
              aspectRatio: 1,
            }} />
          </View>
          <MyTable label="NIK" value={user.nik} />
          <MyTable label="BPJS Ketenagakerjaan" value={user.nokajht} />

          <MyTable label="BPJS Kesehatan" value={user.nokakes} />
          <MyTable label="NPWP" value={user.npwp} />
          <MyTable label="ID Resmi" value={user.idresmi} />
          <MyTable label="Jenis Kelamin" value={user.jk == "P" ? "Perempuan" : "Laki-laki"} />
          <MyTable label="Jabatan" value={user.jab} />
          <MyTable label="Bagian" value={user.dept} />
          <MyTable label="Tempat Tanggal Lahir" value={`${user.tmp_lahir}, ${IndonesiaTgl(user.tgl_lahir)}`} />
          <MyTable label="Umur" value={`${GetUmur(user.tgl_lahir)} Tahun`} />
          <MyTable label="Golongan Darah" value={user.gol_darah} />
          <MyTable label="Agama" value={user.agama} />
          <MyTable label="Status" value={user.status} />
          <MyTable label="No. Telp" value={user.telp} />
          <MyTable label="Email" value={user.email} />

          <MyTable label="Alamat" value={user.alamat} />
          {/* <MyTable label="Upah" value={new Intl.NumberFormat().format(user.gaji)} /> */}
          <MyTable label="Pensiun" value={`Masa Kerja Kurang ${GetPensiun(user.tgl_lahir)} Tahun`} />





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




        <TouchableOpacity onPress={() => navigation.navigate('MenuProfileEdit', user)} style={{ width: 80, justifyContent: 'center', alignItems: 'center' }}>
          <Icon type="ionicon" name="person" color={colors.tertiary} />
          <Text style={{
            fontFamily: fonts.secondary[400],
            fontSize: windowWidth / 35,
            color: colors.black
          }}>Profile</Text>
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
