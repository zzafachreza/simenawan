import React from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import {fonts, windowWidth, colors} from '../../utils';
import {MyButton, MyGap, MyInput, MyHeader} from '../../components';

import RNExitApp from 'react-native-exit-app';
import {color} from 'react-native-elements/dist/helpers';

export default function ({navigation}) {
  const MyBullet = ({judul}) => {
    return (
      <View style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 20,
            backgroundColor: colors.primary,
          }}></View>
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
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <MyHeader />
      <View style={{backgroundColor: colors.white, flex: 1}}>
        <View
          style={{
            padding: 10,
            backgroundColor: colors.secondary,
            marginBottom: 10,
          }}>
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              fontSize: windowWidth / 20,
              color: colors.black,
              textAlign: 'center',
            }}>
            Persiapan Sekolah
          </Text>
        </View>

        <Text
          style={{
            margin: 10,
            fontFamily: fonts.secondary[400],
            fontSize: windowWidth / 25,
            color: colors.black,
            textAlign: 'justify',
          }}>
          {'   '}
          Sekolah adalah tempat berkumpul Siswa dari berbagai wilayah yang perlu
          diantaisipasi agar tidak terjadi penularan COVID-19. Beberapa hal yang
          perlu dipersiapkan orang tua ketika putra putrinya akan berangkat
          sekolah adalah sebagai memasatikan Putra putrinya mempersiapkan APD
          Anti Covid seperti :
        </Text>
        <MyBullet judul="Membawa Hand Sanitizer" />
        <MyBullet judul="Menggunakan Masker" />
        <MyBullet judul="Menjaga Jarak 1 – 1,5 Meter" />
        <MyBullet judul="Tidak Bertukar Alat Tulis" />
        <MyBullet judul="Tidak Bertukar Makanan" />
      </View>
      <View style={{flexDirection: 'row', backgroundColor: colors.white}}>
        <View style={{flex: 1, padding: 10}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              flexDirection: 'row',
              backgroundColor: colors.secondary,
              height: 50,
              padding: 10,
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}>
              <Icon
                type="ionicon"
                name="arrow-back-outline"
                color={colors.white}
                size={windowWidth / 18}
              />
            </View>
            <View>
              <Text
                style={{
                  fontFamily: fonts.secondary[600],
                  fontSize: windowWidth / 25,
                  color: colors.white,
                }}>
                Back
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, padding: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Menu')}
            style={{
              flexDirection: 'row',
              backgroundColor: colors.primary,
              height: 50,
              padding: 10,
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}>
              <Text
                style={{
                  fontFamily: fonts.secondary[600],
                  fontSize: windowWidth / 25,
                  color: colors.white,
                }}>
                Menu Utama
              </Text>
            </View>
            <View>
              <Icon
                type="ionicon"
                name="list-outline"
                color={colors.white}
                size={windowWidth / 18}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
