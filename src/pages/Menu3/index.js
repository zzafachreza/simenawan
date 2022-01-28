import React from 'react'
import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native'
import { fonts, windowWidth, colors, windowHeight } from '../../utils'
import { Value } from 'react-native-reanimated'
import { Icon } from 'react-native-elements'
import { MyGap, MyButton } from '../../components'

export default function () {
    return (
        <SafeAreaView style={{backgroundColor: colors.white,flex:1,padding:10}}>
           <ScrollView>
           <Text  
                style={{
                    fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/30,
                    color:colors.black
                 }}>Silahkan pilih group yang cocok untuk anda</Text>
                 
                 <View style={{marginVertical:5,flexDirection:'row',backgroundColor:colors.white,padding:20,borderRadius:10,elevation:3}}>
                   <View style={{flex:0.3,alignItems:'center'}}>
                    <Image source={require('../../assets/vaksin.png')} style={{width:60,height:60}} />
    
                    </View>
                    <View style={{flex:1,justifyContent:'center'}}>
                        <Text  style={{
                                fontFamily:fonts.secondary[600],
                                fontSize:windowWidth/30,
                                color:colors.black
                            }}>Vaksin Program Pemerintah</Text>
                        <Text style={{
                                fontFamily:fonts.secondary[400],
                                fontSize:windowWidth/35,
                                color:colors.black
                            }}>Lansia, Guru, UMKM *Layanan disesuaikan dengan sistem masing-masing</Text>
                    </View>
                  
                </View>


                <View style={{marginVertical:5,flexDirection:'row',backgroundColor:colors.white,padding:20,borderRadius:10,elevation:3}}>
                   <View style={{flex:0.3,alignItems:'center'}}>
                    <Image source={require('../../assets/covid.png')} style={{width:60,height:60}} />
    
                    </View>
                    <View style={{flex:1,justifyContent:'center'}}>
                        <Text  style={{
                                fontFamily:fonts.secondary[600],
                                fontSize:windowWidth/30,
                                color:colors.black
                            }}>Vaksin Gotong Royong</Text>
                               </View>
                  
                </View>

                </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
