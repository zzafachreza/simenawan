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
    <ScrollView
      style={{
        flex: 1,
      }}>
      <MyHeader />
      <View style={{padding: 10, backgroundColor: colors.white, flex: 1}}>
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
            Pencegahan COVID - 19
          </Text>
        </View>
        <Text
          style={{
            fontFamily: fonts.secondary[400],
            fontSize: windowWidth / 25,
            color: colors.black,
            textAlign: 'justify',
          }}>
          {'   '}
          Tidak ada jaminan Lingkungan sekitar kita bersih dari Droplet pembawa
          Virus COVID-19. Demikian pula diyakini bahwa Imun tubuh yang baik akan
          dapat melawan Virus COVID-19 untuk itu berikut adalah 5 cara
          pencegahan COVID-19 yang perlu dilakukan :
        </Text>

        <MyGap jarak={10} />

        <MyList
          judul="Mencuci tangan dengan benar"
          onPress={() => navigation.navigate('Cegah1')}
        />
        <MyGap jarak={10} />
        <MyList
          judul="Etika saat batuk dan Bersin"
          onPress={() => navigation.navigate('Cegah2')}
        />
        <MyGap jarak={10} />
        <MyList
          judul="Protokol Kesekolah selama Pandemi"
          onPress={() => navigation.navigate('Cegah3')}
        />
        <MyGap jarak={10} />
        <MyList
          judul="Menggunakan Masker dengan benar"
          onPress={() => navigation.navigate('Cegah4')}
        />
        <MyGap jarak={10} />
        <MyList
          judul="Makanan Bergizi untuk Anak"
          onPress={() => navigation.navigate('Cegah5')}
        />
        <MyGap jarak={10} />
        <MyList
          judul="Rutin melakukan Olahraga"
          onPress={() => navigation.navigate('Cegah6')}
        />
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
            onPress={() => navigation.navigate('MenuPerisapan')}
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
    </ScrollView>
  );
}
