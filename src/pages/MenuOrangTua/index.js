import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native'
import { MyButton } from '../../components';
import { fonts, windowWidth, colors, windowHeight } from '../../utils'
import { getData } from '../../utils/localStorage';
import { useIsFocused } from "@react-navigation/native";


export default function ({ navigation }) {


    const isFocused = useIsFocused();
    const [user, setUser] = useState({});
    const [data, setData] = useState({});
    const [isData, setIsData] = useState(false);
    const [loading, setLoading] = useState(false);

    const getDataAPI = (x) => {
        setIsData(false);
        getData('user').then(res => {
            setUser(res);

            axios.post('https://simenawan.mpssukorejo.com/api/orang_tua_data.php', {
                id_karyawan: res.id_karyawan
            }).then(r => {

                setIsData(true);
                setData(r.data);
                console.warn('data orang tua', r.data)
            })

        })
    }



    useEffect(() => {

        if (isFocused) {
            getDataAPI();
        }

    }, [isFocused])


    const IndonesiaTgl = (tgl) => {

        var bulan = [
            "Januari", "Februari", "Maret", "April", "Mei", "Juni",
            "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ];

        var _tanggal = new Date(tgl).getDate();
        var _bulan = new Date(tgl).getMonth();
        var _tahun = new Date(tgl).getFullYear();


        return `${_tanggal} ${bulan[_bulan]} ${_tahun}`
    }


    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ padding: 10, backgroundColor: colors.primary }}>
                    <Text
                        style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 15,
                            color: colors.white,
                            marginBottom: 10,
                        }}
                    >Data Orang Tua</Text>

                </View>

                {!isData && (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large" color={colors.primary} />
                    </View>
                )}

                {isData && (

                    <>
                        <View style={{
                            padding: 10,
                            marginVertical: 5,
                            elevation: 2,
                            backgroundColor: colors.white
                        }}>
                            <Text style={{
                                fontFamily: fonts.secondary[600],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>
                                Nama Ayah
                            </Text>
                            <Text style={{
                                fontFamily: fonts.secondary[400],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>
                                {data.ayah}
                            </Text>

                            <Text style={{

                                fontFamily: fonts.secondary[600],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>
                                Tempat dan Tanggal Lahir Ayah
                            </Text>
                            <Text style={{
                                fontFamily: fonts.secondary[400],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>
                                {data.tmp_lahirayah},  {IndonesiaTgl(data.tgl_lahirayah)}
                            </Text>

                            <Text style={{

                                fontFamily: fonts.secondary[600],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>
                                Pendidikan Ayah
                            </Text>
                            <Text style={{
                                fontFamily: fonts.secondary[400],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>
                                {data.pend_ayah}
                            </Text>


                        </View>

                        <View style={{
                            padding: 10,
                            marginVertical: 5,
                            elevation: 2,
                            backgroundColor: colors.white
                        }}>
                            <Text style={{
                                fontFamily: fonts.secondary[600],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>
                                Nama Ibu
                            </Text>
                            <Text style={{
                                fontFamily: fonts.secondary[400],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>
                                {data.ibu}
                            </Text>

                            <Text style={{

                                fontFamily: fonts.secondary[600],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>
                                Tempat dan Tanggal Lahir Ayah
                            </Text>
                            <Text style={{
                                fontFamily: fonts.secondary[400],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>
                                {data.tmp_lahiribu},  {IndonesiaTgl(data.tgl_lahiribu)}
                            </Text>

                            <Text style={{

                                fontFamily: fonts.secondary[600],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>
                                Pendidikan Ayah
                            </Text>
                            <Text style={{
                                fontFamily: fonts.secondary[400],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>
                                {data.pend_ibu}
                            </Text>


                        </View>
                        <MyButton onPress={() => navigation.navigate('MenuOrangTuaEdit', data)} title="EDIT DATA" warna={colors.secondary} Icons="create-outline" />
                    </>

                )}


            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
