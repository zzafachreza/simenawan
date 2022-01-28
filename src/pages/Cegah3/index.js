import React, { useState } from 'react'
import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native'
import { fonts, windowWidth, colors, windowHeight } from '../../utils'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MyInput, MyGap, MyButton } from '../../components'
import {Picker} from '@react-native-picker/picker';

export default function ({navigation}) {

  const [pilih1, setPilih1] = useState();
  const [pilih2, setPilih2] = useState();
  const [pilih3, setPilih3] = useState();
  const [pilih4, setPilih4] = useState();


    return (
        <SafeAreaView>
        
            <View style={{padding:10,backgroundColor:colors.primary,height:windowHeight/4,borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
            <TouchableOpacity
            onPress={()=>navigation.goBack()}
              style={{
              width:80,height:100,
              justifyContent:'flex-start',alignItems:'flex-start'
            }}>
              <Icon type="ionicon" name="close" color={colors.white} size={30}/>
            </TouchableOpacity>
                <Text 
                style={{
                    fontFamily:fonts.secondary[600],
                    fontSize:windowWidth/18,
                    color:colors.white
                 }}
            >MASUK / DAFTAR</Text>
               
            </View>

            <ScrollView style={{padding:10}}>
            <Text>Nomor Ponsel</Text>
                 <View style={{flexDirection:'row'}}>
                          
                    <View style={{width:50,justifyContent:'flex-end',paddingBottom:10}}>
                       <Text style={{
                            fontFamily:fonts.secondary[400],
                            fontSize:windowWidth/20,
                            color:colors.black
                        }}>+62</Text>
                    </View>
                   <View style={{flex:1}}>
                   <MyInput placeholder="Nomor Ponsel Anda" />
                   </View>
                       

                </View>

                

            </ScrollView>
            <View style={{padding:10}}>
        
                <MyGap jarak={10} />
              <MyButton title="KIRIM" warna={colors.border} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
