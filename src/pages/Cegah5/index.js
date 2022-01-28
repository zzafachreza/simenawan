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
      <View style={{flexDirection: 'row', padding: 20}}>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 20,
            // backgroundColor: colors.primary,
            borderColor: colors.primary,
            borderWidth: 1,

            padding: 1,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              marginHorizontal: 10,
              fontFamily: fonts.secondary[400],
              fontSize: windowWidth / 30,
              color: colors.primary,
              textAlign: 'center',
            }}>
            {angka}
          </Text>
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
        Janji Temu Saya
      </Text>
      
    </View>

    <View style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      // backgroundColor:'red',
    }}>
        <Icon type="ionicon" name="calendar" color={colors.primary} size={30} />
        <Text  style={{
          fontFamily: fonts.secondary[400],
          maxWidth:windowWidth/1.8,
          fontSize: windowWidth / 30,
          textAlign:'center',
          color: colors.border,
          top:5,
        }}>Anda tidak memiliki janji temu yang akan datang</Text>
        <Text style={{ 
          fontFamily: fonts.secondary[600],
          maxWidth:windowWidth/1.8,
          fontSize: windowWidth / 30,
          textAlign:'center',
          color: colors.primary,
          borderBottomWidth:1,
          borderBottomColor:colors.primary,
          top:10,
          }}>LIHAT HISTORI JANJI TEMU</Text>
    </View>
     
     
    </SafeAreaView>
  );
}
