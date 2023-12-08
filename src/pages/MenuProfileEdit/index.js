import { View, Text, ScrollView, ActivityIndicator, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { MyButton, MyInput } from '../../components';
import DatePicker from 'react-native-date-picker';
import { colors, fonts, windowWidth } from '../../utils';
import axios from 'axios';
import { getData, storeData } from '../../utils/localStorage';
import { Picker } from '@react-native-picker/picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function ({ navigation, route }) {


    const options = {
        includeBase64: true,
        quality: 0.5,
        maxWidth: 1000,
        maxHeight: 1000,
    };

    const getCamera = xyz => {
        launchCamera(options, response => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image Picker Error: ', response.error);
            } else {
                let source = { uri: response.uri };
                switch (xyz) {
                    case 1:
                        setKirim({
                            ...kirim,
                            newfoto: `data:${response.type};base64, ${response.base64}`,
                        });
                        setfoto(`data:${response.type};base64, ${response.base64}`);
                        break;
                }
            }
        });
    };


    const getCamera2 = xyz => {
        launchCamera(options, response => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image Picker Error: ', response.error);
            } else {
                let source = { uri: response.uri };
                switch (xyz) {
                    case 1:
                        setKirim({
                            ...kirim,
                            foto_ktp: `data:${response.type};base64, ${response.base64}`,
                        });
                        break;
                }
            }
        });
    };

    const getGallery = xyz => {
        launchImageLibrary(options, response => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image Picker Error: ', response.error);
            } else {
                let source = { uri: response.uri };
                switch (xyz) {
                    case 1:
                        setKirim({
                            ...kirim,
                            newfoto: `data:${response.type};base64, ${response.base64}`,
                        });
                        setfoto(`data:${response.type};base64, ${response.base64}`);
                        break;
                }
            }
        });
    };


    const getGallery2 = xyz => {
        launchImageLibrary(options, response => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image Picker Error: ', response.error);
            } else {
                let source = { uri: response.uri };
                switch (xyz) {
                    case 1:
                        setKirim({
                            ...kirim,
                            foto_ktp: `data:${response.type};base64, ${response.base64}`,
                        });

                        break;
                }
            }
        });
    };

    const UploadFoto = ({ onPress1, onPress2, label, foto }) => {
        return (
            <View
                style={{
                    padding: 10,
                    backgroundColor: colors.white,
                    marginVertical: 10,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: colors.border,
                    elevation: 2,
                }}>
                <Text
                    style={{
                        fontFamily: fonts.secondary[600],
                        color: colors.black,
                    }}>
                    {label}
                </Text>
                <Image
                    source={{
                        uri: foto,
                    }}
                    style={{
                        width: '100%',
                        aspectRatio: 2,
                        resizeMode: 'contain',
                    }}
                />
                <View
                    style={{
                        flexDirection: 'row',
                    }}>
                    <View
                        style={{
                            flex: 1,
                            paddingRight: 5,
                        }}>
                        <MyButton
                            onPress={onPress1}
                            colorText={colors.white}
                            title="KAMERA"
                            warna={colors.primary}
                        />
                    </View>
                    <View
                        style={{
                            flex: 1,
                            paddingLeft: 5,
                        }}>
                        <MyButton
                            onPress={onPress2}
                            title="GALLERY"
                            colorText={colors.white}
                            warna={colors.secondary}
                        />
                    </View>
                </View>
            </View>
        );
    };




    const [kirim, setKirim] = useState(route.params);
    const [loading, setLoading] = useState(false);


    const _kirimAPI = () => {

        setLoading(true);
        console.error(kirim);

        axios.post('https://mpsskj.com/api/profile_update.php', kirim).then(res => {
            setLoading(false);

            console.warn(res.data);

            storeData('user', res.data);

            navigation.replace('Home');
        })
    }


    useEffect(() => {

        if (route.params.jk == 'L' && route.params.foto == '') {
            setfoto('https://mpsskj.com/assets/images/foto/no-foto-male.png');
        } else if (route.params.jk == 'P' && route.params.foto == '') {
            setfoto('https://mpsskj.com/assets/images/foto/no-foto-famale.png');


        } else if (route.params.foto.toString().substring(0, 10) != 'data:image') {
            setfoto('https://mpsskj.com/assets/images/foto/' + route.params.foto)

        } else if (route.params.foto.toString().substring(0, 10) == 'data:image') {
            setfoto(route.params.foto)
        }
    }, []);




    const [foto, setfoto] = useState('');


    return (
        <ScrollView>
            <View style={{
                padding: 10
            }}>

                <UploadFoto
                    onPress1={() => getCamera(1)}
                    onPress2={() => getGallery(1)}
                    label="Upload Foto Profile"
                    foto={foto}
                />


                <MyInput label="Nama" value={kirim.nama} onChangeText={val => setKirim({
                    ...kirim,
                    nama: val
                })} />

                <MyInput disable label="idresmi" value={kirim.idresmi} onChangeText={val => setKirim({
                    ...kirim,
                    idresmi: val
                })} />

                <MyInput disable label="BPJS Ketenagakerjaan" value={kirim.nokajht} onChangeText={val => setKirim({
                    ...kirim,
                    nokajht: val
                })} />

                <MyInput disable label="BPJS Kesehatan" value={kirim.nokakes} onChangeText={val => setKirim({
                    ...kirim,
                    nokakes: val
                })} />

                <MyInput disable label="nik" value={kirim.nik} onChangeText={val => setKirim({
                    ...kirim,
                    nik: val
                })} />

                <UploadFoto
                    onPress1={() => getCamera2(1)}
                    onPress2={() => getGallery2(1)}
                    label="Upload Foto KTP"
                    foto={kirim.foto_ktp}
                />

                <MyInput disable label="npwp" value={kirim.npwp} onChangeText={val => setKirim({
                    ...kirim,
                    npwp: val
                })} />






                <Text style={{
                    marginTop: 10,
                    left: 10,
                    fontFamily: fonts.secondary[600],
                    color: colors.primary,
                    fontSize: 16,

                }}>Jenis Kelamin</Text>
                <Picker
                    selectedValue={kirim.jk}
                    onValueChange={(itemValue, itemIndex) =>
                        setKirim({ ...kirim, jk: itemValue })
                    }>
                    <Picker.Item label="Laki-Laki" value="L" />
                    <Picker.Item label="Perempuan" value="P" />
                </Picker>


                <MyInput label="Jabatan" value={kirim.jab} onChangeText={val => setKirim({
                    ...kirim,
                    jab: val
                })} />

                <MyInput label="dept" value={kirim.dept} onChangeText={val => setKirim({
                    ...kirim,
                    dept: val
                })} />

                <MyInput label="Tempat Lahir" value={kirim.tmp_lahir} onChangeText={val => setKirim({
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


                <Text style={{
                    marginTop: 10,
                    left: 10,
                    fontFamily: fonts.secondary[600],
                    color: colors.primary,
                    fontSize: 16,

                }}>Golongan Darah</Text>
                <Picker
                    selectedValue={kirim.gol_darah}
                    onValueChange={(itemValue, itemIndex) =>
                        setKirim({ ...kirim, gol_darah: itemValue })
                    }>
                    <Picker.Item label="A" value="A" />
                    <Picker.Item label="AB" value="AB" />
                    <Picker.Item label="B" value="B" />
                    <Picker.Item label="O" value="O" />
                </Picker>



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
                    <Picker.Item label="K0_Belum Menikah" value="K0" />
                    <Picker.Item label="K1_Menikah dan memiliki anak 1" value="K1" />
                    <Picker.Item label="K2_Menikah dan memiliki anak 2" value="K2" />
                    <Picker.Item label="K3_Menikah dan memiliki anak 3" value="K3" />
                    <Picker.Item label="K4_Lainnya" value="K4" />
                </Picker>


                <MyInput label="Telepon" keyboardType='phone-pad' value={kirim.telp} onChangeText={val => setKirim({
                    ...kirim,
                    telp: val
                })} />

                <MyInput label="Email" value={kirim.email} onChangeText={val => setKirim({
                    ...kirim,
                    email: val
                })} />

                <MyInput label="alamat" value={kirim.alamat} onChangeText={val => setKirim({
                    ...kirim,
                    alamat: val
                })} />
                {/* 
                <MyInput label="Gaji" value={kirim.gaji} onChangeText={val => setKirim({
                    ...kirim,
                    gaji: val
                })} /> */}

                <MyInput label="Password Jika Akan diganti" value={kirim.newpassword} onChangeText={val => setKirim({
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

            <View style={{ padding: 10 }}>

                <Text style={{
                    fontFamily: fonts.secondary[400],
                    fontSize: windowWidth / 25,
                    color: colors.black,

                }}>Dengan ini kami menyatakan dengan sesungguhnya bahwa semua informasi yang disampaikan dalam seluruh dokumen serta lampiran-lampirannya ini adalah benar dan kesatuan yang tidak dapat dipisahkan. Dan saya bersangkutan memberikan persetujuan pemberian data untuk KUD Suber Rejo</Text>
            </View>
        </ScrollView >
    );
}
