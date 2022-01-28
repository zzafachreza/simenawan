import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { SafeAreaView } from 'react-native'
import { fonts, windowWidth, colors, windowHeight } from '../../utils'

export default function Menu1() {
    return (
        <SafeAreaView>
            <View style={{padding:10,backgroundColor:colors.primary,height:windowHeight/6,borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
                <Text 
                style={{
                    fontFamily:fonts.secondary[600],
                    fontSize:windowWidth/18,
                    color:colors.white
                 }}
            >Informasi Klinik</Text>
                <Text  
                style={{
                    fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/28,
                    color:colors.white
                 }}>30+ klinik, 40+  spesialisasi, 2000+ dokter spesialis, 6000+ fasilitas tempat tidur</Text>
            </View>

            <View style={{padding:10}}>
                
                <View style={{marginVertical:5,flexDirection:'row',backgroundColor:colors.white,padding:20,borderRadius:10,elevation:3}}>
                   <View style={{flex:0.3,alignItems:'center'}}>
                    <Image source={require('../../assets/hospital.png')} style={{width:60,height:60}} />
    
                    </View>
                    <View style={{flex:1,justifyContent:'center'}}>
                        <Text  style={{
                                fontFamily:fonts.secondary[600],
                                fontSize:windowWidth/22,
                                color:colors.black
                            }}>Klinik Kami</Text>
                        <Text>Lihat daftar jumlah Klinik kami di seluruh negri</Text>
                    </View>
                  
                </View>


                <View style={{marginVertical:5,flexDirection:'row',backgroundColor:colors.white,padding:20,borderRadius:10,elevation:3}}>
                   <View style={{flex:0.3,alignItems:'center'}}>
                    <Image source={require('../../assets/paru.png')} style={{width:60,height:60}} />
    
                    </View>
                    <View style={{flex:1,justifyContent:'center'}}>
                        <Text  style={{
                                fontFamily:fonts.secondary[600],
                                fontSize:windowWidth/22,
                                color:colors.black
                            }}>Spesialis Kami</Text>
                        <Text>Lihat daftar spesialis kami</Text>
                    </View>
                  
                </View>

                <View style={{marginVertical:5,flexDirection:'row',backgroundColor:colors.white,padding:20,borderRadius:10,elevation:3}}>
                   <View style={{flex:0.3,alignItems:'center'}}>
                    <Image source={require('../../assets/alat.png')} style={{width:60,height:60}} />
    
                    </View>
                    <View style={{flex:1,justifyContent:'center'}}>
                        <Text  style={{
                                fontFamily:fonts.secondary[600],
                                fontSize:windowWidth/22,
                                color:colors.black
                            }}>Dokter Kami</Text>
                        <Text>Kenalin dokter - dokter kami</Text>
                    </View>
                  
                </View>

                

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
