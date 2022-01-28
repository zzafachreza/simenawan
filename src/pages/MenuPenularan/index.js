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
            Penularan COVID - 19
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
          COVID-19 dapat menyebar melalui percikan cairan dari hidung atau mulut
          (Droplet) orang yang terjangkit COVID-19 baik batuk, bernafas atau
          Bersin.
        </Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../assets/cegah.jpg')}
            style={{resizeMode: 'contain', aspectRatio: 1.2}}
          />
        </View>
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
            onPress={() => navigation.navigate('MenuPencegahan')}
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
