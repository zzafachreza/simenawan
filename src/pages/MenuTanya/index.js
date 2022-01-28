import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import {fonts, windowWidth, colors} from '../../utils';
import {MyButton, MyGap, MyInput, MyHeader} from '../../components';
import axios from 'axios';

export default function ({navigation}) {
  const [kirim, setKirim] = useState({
    nama_lengkap: '',
    email: '',
    tanya: '',
  });

  const [loading, setLoading] = useState(false);

  const sendServerEmail = () => {
    setLoading(true);
    setTimeout(() => {
      console.log('kirim ke server', kirim);
      axios
        .post('https://zavalabs.com/gobenk/api/pertanyaan.php', kirim)
        .then(res => {
          console.log(res);

          setLoading(false);
          setKirim({
            nama_lengkap: '',
            email: '',
            tanya: '',
          });
          alert('Pertanyaan Berhasil di kirim...');
        });
    }, 1000);
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
            KIRIM PERTANYAAN
          </Text>
        </View>

        <ScrollView style={{padding: 10}}>
          <MyInput
            label="Nama Lengkap"
            value={kirim.nama_lengkap}
            onChangeText={x =>
              setKirim({
                ...kirim,
                nama_lengkap: x,
              })
            }
          />
          <MyGap jarak={10} />
          <MyInput
            label="Email"
            value={kirim.email}
            onChangeText={x =>
              setKirim({
                ...kirim,
                email: x,
              })
            }
          />
          <MyGap jarak={10} />
          <MyInput
            label="Pertanyaan"
            multiline
            value={kirim.tanya}
            onChangeText={x =>
              setKirim({
                ...kirim,
                tanya: x,
              })
            }
          />
          <MyGap jarak={10} />
          <TouchableOpacity
            onPress={sendServerEmail}
            style={{
              flexDirection: 'row',
              backgroundColor: colors.primary,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
            }}>
            <View style={{flex: 1}}>
              <Text
                style={{
                  fontFamily: fonts.secondary[600],
                  fontSize: windowWidth / 25,
                  color: colors.white,
                }}>
                KIRIM EMAIL
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}>
              <Icon
                type="ionicon"
                name="cloud-upload-outline"
                color={colors.white}
                size={windowWidth / 18}
              />
            </View>
          </TouchableOpacity>
          <MyGap jarak={50} />
          {loading && <ActivityIndicator size="large" color={colors.primary} />}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
