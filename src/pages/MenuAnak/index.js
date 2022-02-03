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
    const [data, setData] = useState([]);
    const [isData, setIsData] = useState(false);
    const [loading, setLoading] = useState(false);

    const getDataAPI = (x) => {
        setIsData(false);
        getData('user').then(res => {
            setUser(res);

            axios.post('https://simenawan.mpssukorejo.com/api/anak_data.php', {
                id_karyawan: res.id_karyawan
            }).then(r => {

                setIsData(true);
                setData(r.data);
                console.warn('data anak', r.data)
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
                    >Data Anak</Text>

                </View>

                {!isData && (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large" color={colors.primary} />
                    </View>
                )}



                {isData && data.map(item => {
                    return (
                        <View style={{ margin: 5, padding: 10 }}>
                            <View style={{ paddingVertical: 10 }}>
                                <MyButton onPress={() => navigation.navigate('MenuAnakEdit', item)} title="Ubah Data" Icons="create-outline" warna={colors.secondary} />
                            </View>
                            <Text style={{
                                fontFamily: fonts.secondary[600],
                                fontSize: windowWidth / 25,
                                padding: 10,
                                color: colors.black,
                                backgroundColor: colors.tertiary
                            }}>{item.status}</Text>
                            <Text style={{
                                fontFamily: fonts.secondary[600],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>Nama</Text>
                            <Text style={{
                                fontFamily: fonts.secondary[400],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>{item.nama}</Text>

                            <Text style={{
                                fontFamily: fonts.secondary[600],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>Jenis Kelamin</Text>
                            <Text style={{
                                fontFamily: fonts.secondary[400],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>{item.jk}</Text>


                            <Text style={{
                                fontFamily: fonts.secondary[600],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>Tempat dan Tanggal Lahir</Text>
                            <Text style={{
                                fontFamily: fonts.secondary[400],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>{item.tmp_lahir}, {item.tgl_lahir}</Text>
                            <Text style={{
                                fontFamily: fonts.secondary[600],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>Pendidikan</Text>
                            <Text style={{
                                fontFamily: fonts.secondary[400],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>{item.pend}</Text>
                        </View>
                    )
                })}




            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})