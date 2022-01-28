import React from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import {fonts, windowWidth, colors, windowHeight} from '../../utils';
import {MyButton, MyGap, MyInput, MyHeader} from '../../components';

import RNExitApp from 'react-native-exit-app';
import {color} from 'react-native-elements/dist/helpers';

export default function ({navigation}) {
  const MyBullet = ({angka, judul}) => {
    return (
      <View style={{flexDirection: 'row', padding: 10}}>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <Icon type="ionicon" name="checkmark" color={colors.primary} />
        </View>
        <Text
          style={{
            marginHorizontal: 10,
            fontFamily: fonts.secondary[400],
            fontSize: windowWidth / 25,
            color: colors.black,
            textAlign: 'justify',
          }}>
          {judul}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex:1}}>
       <ScrollView>
       <View
      style={{
        justifyContent: 'center',
        // alignItems: 'center',
        padding:20,
        backgroundColor: colors.primary,
        height:windowHeight/5 ,
        borderBottomLeftRadius: windowWidth / 10,
        borderBottomRightRadius: windowWidth / 10,
      }}>
      <Text
        style={{
          fontFamily: fonts.secondary[600],
          fontSize: windowWidth / 15,
          color: colors.white,
        }}>
       Portal Pasien
      </Text>
      
    </View>

    <View style={{
      flex:1,
     
      // backgroundColor:'red',
    }}>
      <MyBullet  judul="Akses data medis pribadi Anda sejak 2019." />
      <MyBullet  judul="Pantau jumlah tagihan berjalan & proses pemulangan selama rawat inap." />
      <MyBullet  judul="Akses hasil Laboratorium dan radiologi." />
      <MyBullet  judul="Obat-obatan yang diresepkan dokter." />

       <View style={{padding:10,}}>
       <Text  style={{
          fontFamily: fonts.secondary[400],
          fontSize: windowWidth / 25,
          color: colors.black,
        }}>
        Untuk mengakses fitur ini, mohon melakukan aktivasi
dengan klik tombol di bawah in atau hubungi petugas
kami pada InClinic berikut:
        </Text>
       </View>
       <View style={{padding:10}}>
           <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/25,
                    color:colors.black}} ><Icon type="ionicon" name="ellipse" size={10} /> InClinic Kebon Jeruk</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/25,
                    color:colors.black}} ><Icon type="ionicon" name="ellipse" size={10} /> InClinic Lippo Village</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/25,
                    color:colors.black}} ><Icon type="ionicon" name="ellipse" size={10} /> InClinic TB Simatupang</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/25,
                    color:colors.black}} ><Icon type="ionicon" name="ellipse" size={10} /> InClinic Semanggi</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/25,
                    color:colors.black}} ><Icon type="ionicon" name="ellipse" size={10} /> InClinic Banjarmasin</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/25,
                    color:colors.black}} ><Icon type="ionicon" name="ellipse" size={10} /> InClinic Surabaya</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/25,
                    color:colors.black}} ><Icon type="ionicon" name="ellipse" size={10} /> InClinic Sriwijaya</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/25,
                    color:colors.black}} ><Icon type="ionicon" name="ellipse" size={10} /> InClinic Manado</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/25,
                    color:colors.black}} ><Icon type="ionicon" name="ellipse" size={10} /> InClinic Lippo Cikarang</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/25,
                    color:colors.black}} ><Icon type="ionicon" name="ellipse" size={10} /> InClinic Balikpapan</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/25,
                    color:colors.black}} ><Icon type="ionicon" name="ellipse" size={10} /> InClinic Kupang</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/25,
                    color:colors.black}} ><Icon type="ionicon" name="ellipse" size={10} /> InClinic Purwakarta</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/25,
                    color:colors.black}} ><Icon type="ionicon" name="ellipse" size={10} /> InClinic Makassar</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/25,
                    color:colors.black}} ><Icon type="ionicon" name="ellipse" size={10} /> InClinic Denpasar</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/25,
                    color:colors.black}} ><Icon type="ionicon" name="ellipse" size={10} /> InClinic Medan</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/25,
                    color:colors.black}} ><Icon type="ionicon" name="ellipse" size={10} /> InClinic Ambon</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/25,
                    color:colors.black}} ><Icon type="ionicon" name="ellipse" size={10} /> InClinic Palangkaraya</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/25,
                    color:colors.black}} ><Icon type="ionicon" name="ellipse" size={10} /> InClinic Labuan Bajo</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/25,
                    color:colors.black}} ><Icon type="ionicon" name="ellipse" size={10} /> InClinic Bogor</Text>
           </View>

    </View>
       </ScrollView>
     
    <View style={{padding:10}}>
    <MyButton title="AKTIFKAN PORTAL PASIEN" warna={colors.primary} onPress={()=>navigation.navigate('Menu10')} />
    </View>
    </SafeAreaView>
  );
}
