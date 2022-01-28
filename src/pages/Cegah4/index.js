import React from 'react'
import { StyleSheet, Text, View,Image, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native'
import { fonts, windowWidth, colors, windowHeight } from '../../utils'
import { Icon } from 'react-native-elements'

export default function ({navigation}) {

    const MYgridList = ({judul,gambar})=>{
        return (
            <View style={{marginVertical:5,flexDirection:'row',padding:10,borderBottomWidth:1,borderBottomColor:'#CDCDCD'}}>
            <View style={{flex:0.3,}}>
             <Image source={{uri:gambar}} style={{width:60,height:60}} />

             </View>
             <View style={{flex:1,justifyContent:'center'}}>
                 <Text  style={{
                         fontFamily:fonts.secondary[600],
                         fontSize:windowWidth/30,
                         color:colors.black
                     }}>{judul}</Text>
                 <View style={{flexDirection:'row'}}>
                 <Text style={{fontFamily:fonts.secondary[600],color:colors.primary,fontSize:windowWidth/35}}>ARTICLE</Text>
                 <Text style={{fontFamily:fonts.secondary[400],left:10,fontSize:windowWidth/35}}>31 Desember 2021</Text>
                 </View>
             </View>
           
         </View>
        )
    }

    return (
        <SafeAreaView style={{backgroundColor:'#FFF'}}>
           <ScrollView>
           <View style={{padding:10,backgroundColor:colors.primary,height:windowHeight/6,borderBottomRightRadius:40,borderBottomLeftRadius:40}}>
                <Text 
                style={{
                    fontFamily:fonts.secondary[600],
                    fontSize:windowWidth/15,
                    color:colors.white,
                    marginTop:30,
                 }}
            >Profile Saya</Text>
             
            </View>
       

            <View style={{padding:10,  top:-30,}}>
    
                
                <View style={{padding:10}}>
              
                    <TouchableOpacity  onPress={()=>{navigation.navigate('Cegah3')}} style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',marginRight:5,padding:10,backgroundColor:colors.white,borderRadius:10,elevation:3}}>
                        <Text  style={{
                          flex:1,
                                fontFamily:fonts.secondary[600],
                                fontSize:windowWidth/25,
                                color:colors.black
                            }}>Masuk Ke MyApps untuk mengakses fitur lainnya !</Text>
                       
                       <Icon type="ionicon" name="chevron-forward" color={colors.primary} size={20} />
                    </TouchableOpacity>

                  
                </View>
                
              
          

                          <View style={{flexDirection:'row',padding:10,height:50,borderBottomWidth:1,borderBottomColor:'#CDCDCD'}}>
                              <View>
                              <Icon type="ionicon" name="document" color={colors.primary} size={20} />
                              </View>
                              <View>
                                <Text style={{left:10,fontFamily:fonts.secondary[400],color:colors.primary,fontSize:windowWidth/25}}>Syarat & Ketentuan</Text>
                              </View>
                          </View>
                          <View style={{flexDirection:'row',padding:10,height:50,borderBottomWidth:1,borderBottomColor:'#CDCDCD'}}>
                              <View>
                              <Icon type="ionicon" name="help-circle" color={colors.primary} size={20} />
                              </View>
                              <View>
                                <Text style={{left:10,fontFamily:fonts.secondary[400],color:colors.primary,fontSize:windowWidth/25}}>Bantuan</Text>
                              </View>
                          </View>


     
      
            </View>
           </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
