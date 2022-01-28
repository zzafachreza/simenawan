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
            TERIMA KASIH
          </Text>
        </View>

        <Text
          style={{
            marginVertical: 5,
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 25,
            color: colors.black,
            textAlign: 'center',
          }}>
          Ns. Hendri Heriyanto, S.Kep.,M.Kep
        </Text>
        <Text
          style={{
            marginVertical: 5,
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 25,
            color: colors.black,
            textAlign: 'center',
          }}>
          Dahrizal, S.Kp.,MPH
        </Text>
        <Text
          style={{
            marginVertical: 5,
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 25,
            color: colors.black,
            textAlign: 'center',
          }}>
          Ns. Hermansyah, S.Kep.,M.Kep
        </Text>
        <Text
          style={{
            marginVertical: 5,
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 25,
            color: colors.black,
            textAlign: 'center',
          }}>
          Ns. Rahma Annisa, S.Kep.,M.Kep
        </Text>
        <Text
          style={{
            marginVertical: 5,
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 25,
            color: colors.black,
            textAlign: 'center',
          }}>
          Ns. Andra Saferi Wijaya, S.Kep.,M.Kep
        </Text>
        <Text
          style={{
            marginVertical: 5,
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 25,
            color: colors.black,
            textAlign: 'center',
          }}>
          Sarkawi, S.Kom.,M.Kom
        </Text>

        <Text
          style={{
            marginTop: 50,
            fontFamily: fonts.secondary[800],
            fontSize: windowWidth / 15,
            color: colors.black,
            textAlign: 'center',
          }}>
          POLTEKKES KEMENKES BENGKULU
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
        <View style={{flex: 1, padding: 10}}></View>
      </View>
    </SafeAreaView>
  );
}
