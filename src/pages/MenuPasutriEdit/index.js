import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { MyButton, MyInput } from '../../components';
import DatePicker from 'react-native-date-picker';
import { colors, fonts } from '../../utils';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';

export default function ({ navigation, route }) {

    const [kirim, setKirim] = useState(route.params);
    const [loading, setLoading] = useState(false);


    const _kirimAPI = () => {

        setLoading(true)
        console.error(kirim);

        axios.post('https://simenawan.mpssukorejo.com/api/pasutri_update.php', kirim).then(res => {
            setLoading(false);

            console.warn(res.data);

            navigation.goBack();
        })
    }

    return (
        <ScrollView>
            <View style={{
                padding: 10
            }}>
                <MyInput label="Nama" value={kirim.nama} onChangeText={val => setKirim({
                    ...kirim,
                    nama: val
                })} />
                <MyInput label="Tempat Lahir dan Tanggal Lahir" value={kirim.tmp_lahir} onChangeText={val => setKirim({
                    ...kirim,
                    tmp_lahir: val
                })} />
                <DatePicker title="Tanggal Lahir" mode="date" date={new Date(kirim.tgl_lahir)} onDateChange={val => setKirim({
                    ...kirim,
                    tgl_lahir: val
                })} />
                <MyInput label="Pendidikan" value={kirim.pend} onChangeText={val => setKirim({
                    ...kirim,
                    pend: val
                })} />



                <Text style={{
                    marginTop: 10,
                    left: 10,
                    fontFamily: fonts.secondary[600],
                    color: colors.primary,
                    fontSize: 16,

                }}>Status</Text>
                <Picker
                    selectedValue={kirim.status}
                    onValueChange={(itemValue, itemIndex) =>
                        setKirim({ ...kirim, status: itemValue })
                    }>
                    <Picker.Item label="Suami" value="Suami" />
                    <Picker.Item label="Istri" value="Istri" />

                </Picker>

            </View>




            {!loading && (

                <View style={{ padding: 10 }}>
                    <MyButton onPress={_kirimAPI} title="SIMPAN" warna={colors.secondary} />
                </View>
            )}

            {loading && (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color={colors.primary} />
                </View>
            )}
        </ScrollView >
    );
}
