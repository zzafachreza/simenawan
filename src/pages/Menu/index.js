import React from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import {fonts, windowWidth, colors} from '../../utils';
import {MyButton, MyGap, MyInput, MyHeader} from '../../components';

import RNExitApp from 'react-native-exit-app';

export default function ({navigation}) {
  const MyList = ({onPress, judul}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
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
            {judul}
          </Text>
        </View>
        <View>
          <Icon
            type="ionicon"
            name="chevron-forward-circle-outline"
            color={colors.white}
            size={windowWidth / 15}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <MyHeader />
      <View style={{padding: 10, backgroundColor: colors.white, flex: 1}}>
        <Text
          style={{
            fontFamily: fonts.secondary[400],
            fontSize: windowWidth / 26,
            color: colors.black,
            textAlign: 'justify',
          }}>
          {'   '}
          Hingga akhir tahun 2021 tidak kurang dari 253 Juta kasus COVID-19
          menjangkit manusia di seluruh dunia dan telah merenggut 5 juta lebih
          nyawa manusia tanpa memandang usia, baik usia muda, usia tua maupun
          usia anak-anak. Selalu ingatkan keluarga dan anak-anak untuk selalu
          waspada Covid-19 terutama ketika anak akan melakukan pembelajaran
          Offline dan berangkat ke sekolah.
        </Text>
        <MyGap jarak={2} />
        <MyList
          judul="Pengertian COVID"
          onPress={() => navigation.navigate('MenuPengertian')}
        />
        <MyGap jarak={2} />
        <MyList
          judul="Gejala COVID"
          onPress={() => navigation.navigate('MenuGejala')}
        />
        <MyGap jarak={2} />
        <MyList
          judul="Penularan COVID"
          onPress={() => navigation.navigate('MenuPenularan')}
        />
        <MyGap jarak={2} />
        <MyList
          judul="Pencegahan COVID"
          onPress={() => navigation.navigate('MenuPencegahan')}
        />
        <MyGap jarak={2} />
        <MyList
          judul="Persiapan Sekolah"
          onPress={() => navigation.navigate('MenuPerisapan')}
        />
        <MyGap jarak={2} />
        <MyList
          judul="Kirim Pertanyaan"
          onPress={() => navigation.navigate('MenuTanya')}
        />
        <MyGap jarak={2} />
        <MyList
          judul="Terima kasih"
          onPress={() => navigation.navigate('MenuNuhun')}
        />
        <MyGap jarak={2} />
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
            onPress={() => RNExitApp.exitApp()}
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
