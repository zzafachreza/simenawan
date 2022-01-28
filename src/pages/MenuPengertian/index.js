import React from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import {fonts, windowWidth, colors} from '../../utils';
import {MyButton, MyGap, MyInput, MyHeader} from '../../components';

import RNExitApp from 'react-native-exit-app';

export default function ({navigation}) {
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
            Pengertian COVID - 19
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
          Coronavirus adalah suatu kelompok virus yang dapat menyebabkan
          penyakit pada hewan atau manusia. Beberapa jenis coronavirus diketahui
          menyebabkan infeksi saluran nafas pada manusia mulai dari batuk pilek
          hingga yang lebih serius seperti Middle East Respiratory Syndrome
          (MERS) dan Severe Acute Respiratory Syndrome (SARS). Coronavirus jenis
          baru yang ditemukan menyebabkan penyakit COVID-19.
        </Text>
        <Text
          style={{
            margin: 10,
            fontFamily: fonts.secondary[400],
            fontSize: windowWidth / 25,
            color: colors.black,
            textAlign: 'justify',
          }}>
          {'   '}
          COVID-19 adalah penyakit menular yang disebabkan oleh jenis
          coronavirus yang baru ditemukan. Ini merupakan virus baru dan penyakit
          yang sebelumnya tidak dikenal sebelum terjadi wabah di Wuhan,
          Tiongkok, bulan Desember 2019
        </Text>
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
            onPress={() => navigation.navigate('MenuGejala')}
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
                Next
              </Text>
            </View>
            <View>
              <Icon
                type="ionicon"
                name="arrow-forward-outline"
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
