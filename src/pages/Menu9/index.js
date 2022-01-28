import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { SafeAreaView } from 'react-native'
import { fonts, windowWidth, colors, windowHeight } from '../../utils'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MyButton } from '../../components'
import { Icon } from 'react-native-elements'

export default function Menu9() {

const MyRumahSakit = ({nama,alamat})=>{
    return (
        <View style={{marginVertical:5,flexDirection:'row',backgroundColor:colors.white,padding:15,borderRadius:10,elevation:3}}>
                    <View style={{flex:1,justifyContent:'center'}}>
                        <Text  style={{
                                fontFamily:fonts.secondary[600],
                                fontSize:windowWidth/22,
                                color:colors.black
                        }}>{nama}</Text>
                        <Text>{alamat}</Text>
                        <View style={{
                            flexDirection:'row',
                            marginTop:5,
                            borderTopWidth:1,
                            paddingTop:5,
                            borderTopColor:'#CDCDCD',
                            justifyContent:'flex-end'
                        }}>
                             
                        <Text style={{
                            fontFamily:fonts.secondary[400],
                            fontSize:windowWidth/35,
                            color:colors.primary,
                            right:5,
                        }}>Petunjuk Arah</Text>
                        <Icon type="ionicon" name="navigate-circle" color={colors.black} size={15}/>
                        </View>
                    </View>
                  
                </View>
    )
}


    return (
        <SafeAreaView>
            <View style={{padding:10,backgroundColor:colors.primary,height:windowHeight/7,borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
                <Text 
                style={{
                    fontFamily:fonts.secondary[600],
                    fontSize:windowWidth/18,
                    color:colors.white
                 }}
            >Gawat Darurat</Text>
                <Text  
                style={{
                    fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/28,
                    color:colors.white
                 }}>Dapatkan bantuan gawat darurat medis dari MyApp Hospital</Text>
            </View>

            <View style={{padding:10}}>
                
 


                <View style={{marginVertical:5,flexDirection:'row',backgroundColor:colors.white,padding:10,borderRadius:10,elevation:3}}>
                   <View style={{flex:0.3,alignItems:'center'}}>
                    <Image source={{uri:'https://awsafe.net/wp-content/uploads/2019/07/icon-emergency-services-2-300x300.png'}} style={{width:50,height:50}} />
    
                    </View>
                    <View style={{justifyContent:'center',flex:1,paddingLeft:10,}}>
                        <Text  style={{
                                fontFamily:fonts.secondary[600],
                                fontSize:windowWidth/22,
                                color:colors.black
                            }}>Hubungi Kami</Text>
                        <Text>1-500-911</Text>
                    </View>
                    <View >
                       <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',padding:10,borderRadius:20,backgroundColor:colors.primary,width:120}}>
                         <Icon type="ionicon" name="call" color={colors.white} size={15}/>
                         
                           <Text style={{
                               left:5,
                                fontFamily:fonts.secondary[600],
                                fontSize:windowWidth/30,
                                color:colors.white
                            }}>HUBUNGI</Text>
                       </TouchableOpacity>
                    </View>
                  
                </View>

                <Text>Rumah Sakit Terdekat</Text>

                <MyRumahSakit nama="InClinic Purwakarta" alamat="Jl. Bungursari No.1 Purwakarta , Jawa Barat"/>
                <MyRumahSakit nama="InClinic Lippo Cikarang" alamat="Jl. MH. Thamrin Kav. 105 Lippo Cikarang, Bekasi"/>
                <MyRumahSakit nama="InClinic Bogor" alamat="Jl. Pajajaran No.27, Bogor"/>
                

                

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
