import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { MyButton, MyInput } from '../../components';
import DatePicker from 'react-native-date-picker';
import { colors, fonts } from '../../utils';
import axios from 'axios';
import { getData, storeData } from '../../utils/localStorage';

export default function ({ navigation, route }) {





    const [kirim, setKirim] = useState(route.params);
    const [loading, setLoading] = useState(false);


    const _kirimAPI = () => {

        setLoading(true)
        console.error(kirim);

        axios.post('https://simenawan.mpssukorejo.com/api/profile_update.php', kirim).then(res => {
            setLoading(false);

            console.warn(res.data);

            storeData('user', res.data);

            navigation.replace('Home');
        })
    }


    // useEffect(() => {

    //     getData('user').then(res => {
    //         setKirim(res);
    //     })

    // }, [])




    return (
        <ScrollView>
            <View style={{
                padding: 10
            }}>
                <MyInput label="nama" value={kirim.nama} onChangeText={val => setKirim({
                    ...kirim,
                    nama: val
                })} />

                <MyInput label="idresmi" value={kirim.idresmi} onChangeText={val => setKirim({
                    ...kirim,
                    idresmi: val
                })} />

                <MyInput label="nokajht" value={kirim.nokajht} onChangeText={val => setKirim({
                    ...kirim,
                    nokajht: val
                })} />

                <MyInput label="nokakes" value={kirim.nokakes} onChangeText={val => setKirim({
                    ...kirim,
                    nokakes: val
                })} />

                <MyInput label="nik" value={kirim.nik} onChangeText={val => setKirim({
                    ...kirim,
                    nik: val
                })} />

                <MyInput label="npwp" value={kirim.npwp} onChangeText={val => setKirim({
                    ...kirim,
                    npwp: val
                })} />

                <MyInput label="jk" value={kirim.jk} onChangeText={val => setKirim({
                    ...kirim,
                    jk: val
                })} />

                <MyInput label="jab" value={kirim.jab} onChangeText={val => setKirim({
                    ...kirim,
                    jab: val
                })} />

                <MyInput label="dept" value={kirim.dept} onChangeText={val => setKirim({
                    ...kirim,
                    dept: val
                })} />

                <MyInput label="tmp_lahir" value={kirim.tmp_lahir} onChangeText={val => setKirim({
                    ...kirim,
                    tmp_lahir: val
                })} />
                <Text style={{
                    marginVertical: 5,
                    fontFamily: fonts.secondary[600],
                    color: colors.primary,
                    fontSize: 16,

                }}>Tanggal Lahir</Text>
                <DatePicker title="tgl_lahir" mode="date" date={new Date(kirim.tgl_lahir)} onDateChange={val => setKirim({
                    ...kirim,
                    tgl_lahir: val
                })} />

                <MyInput label="gol_darah" value={kirim.gol_darah} onChangeText={val => setKirim({
                    ...kirim,
                    gol_darah: val
                })} />

                <MyInput label="status" value={kirim.status} onChangeText={val => setKirim({
                    ...kirim,
                    status: val
                })} />


                <MyInput label="telp" value={kirim.telp} onChangeText={val => setKirim({
                    ...kirim,
                    telp: val
                })} />

                <MyInput label="email" value={kirim.email} onChangeText={val => setKirim({
                    ...kirim,
                    email: val
                })} />

                <MyInput label="alamat" value={kirim.alamat} onChangeText={val => setKirim({
                    ...kirim,
                    alamat: val
                })} />

                <MyInput label="gaji" value={kirim.gaji} onChangeText={val => setKirim({
                    ...kirim,
                    gaji: val
                })} />

                <MyInput label="newpassword" value={kirim.newpassword} onChangeText={val => setKirim({
                    ...kirim,
                    newpassword: val
                })} />









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
