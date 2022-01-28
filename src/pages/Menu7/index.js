import React from 'react'
import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native'
import { fonts, windowWidth, colors, windowHeight } from '../../utils'
import { Value } from 'react-native-reanimated'
import { Icon } from 'react-native-elements'
import { MyGap, MyButton } from '../../components'
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox'

export default function () {
    return (
        <SafeAreaView style={{backgroundColor: colors.white,flex:1,padding:10}}>
           <ScrollView>

               <View style={{justifyContent:'center',alignItems:'center'}}>
                   <Image style={{
                       width:200,
                        height:100
                   }} source={{uri:'https://artikel.triasse.com/wp-content/uploads/2020/07/Logo-Prixa.png'}} />
               </View>
               <View style={{padding:10}}>
                <Text  style={{
                        fontFamily:fonts.secondary[600],
                        fontSize:windowWidth/25,
                        color:colors.black
                    }}>
                    Pengelolaan Kesehatan di ujung jari Anda
                </Text>

                <Text  style={{
                        fontFamily:fonts.secondary[400],
                        fontSize:windowWidth/25,
                        marginTop:10,
                        color:colors.black
                    }}>
                   Didukung oleh data-data Medis dari dokter & pasien
                    Indonesia, InClinic dengan Prixa sebagai partner kami,
                    menawarkan informasi meds relevan untuk pengecekan
                    gejala Anda yang bisa digunakan untuk membuat
                    keputusan kesehatan yang lebih baik.
                    Perlu diingat bahwa fitur ini bukanlah pengganti
                    diagnosa medis Dokter. Cara yang tepat untuk
                    mengetahui gejala Anda & apa yang harus dilakukan
                    adalah dengan langsung mengunjungi Dokter Anda.
                </Text>

                <View style={{flexDirection:'row',marginTop:10,}}>
                    <View>
                    <CheckBox/>
                    </View>
                    <View style={{flex:1,justifyContent:'center'}}>
                    <Text  style={{
                        fontFamily:fonts.secondary[400],
                        fontSize:windowWidth/30,
                
                        color:colors.black
                    }}>Saya telah membaca dan menyetujui Ketentuan Layanan.</Text>
                    </View>
                </View>

                <Text  style={{
                    marginTop:10,
                        fontFamily:fonts.secondary[400],
                        fontSize:windowWidth/35,
                       textAlign:'right',
                        color:colors.black
                    }}>Didukung Oleh Prixa ©</Text>
                
               </View>
            
           </ScrollView>
           <MyButton title="MULAI" warna={colors.primary} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
