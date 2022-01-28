import React from 'react'
import { StyleSheet, Text, View,Image, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native'
import { fonts, windowWidth, colors, windowHeight } from '../../utils'

export default function () {

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
                    marginBottom:10,
                 }}
            >Tips Kesehatan</Text>
                <Text  
                style={{
                    fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/28,
   
                    color:colors.white
                 }}>BERITA KESEHATAN</Text>
            </View>
            <View style={{
                top:-30,
                marginVertical:10,
                // marginLeft:10,
            }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={{
              marginRight:10,
              width:windowWidth-75,
              paddingLeft:10,
            }}>
              <Image source={require('../../assets/slide1.jpeg')} style={{
                      width:windowWidth-75,
                      height:200,
                      borderRadius:10,
                      alignSelf:'center'
                    }} />
                <View style={{
                  padding:5,

                }}>
                  <Text style={{ 
                    fontFamily:fonts.secondary[600],
                     fontSize:windowWidth/30,
                     color:colors.black
            }} >Masih Ada Kesempatan Dapatkan Spesial PAket MCU #25 Tahun</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{
              marginRight:10,
              width:windowWidth-75,
            }}>
              <Image source={require('../../assets/slide2.jpeg')} style={{
                      width:windowWidth-75,
                      height:200,
                      borderRadius:10,
                      alignSelf:'center'
                    }} />
                <View style={{
                  padding:5,

                }}>
                  <Text style={{ 
                    fontFamily:fonts.secondary[600],
                     fontSize:windowWidth/30,
                     color:colors.black
            }} >Harga Baru PCS per 01 Januari 2022</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity style={{
              marginRight:10,
              width:windowWidth-75,
            }}>
              <Image source={require('../../assets/slide3.jpeg')} style={{
                      width:windowWidth-75,
                      height:200,
                      borderRadius:10,
                      alignSelf:'center'
                    }} />
                <View style={{
                  padding:5,

                }}>
                  <Text style={{ 
                    fontFamily:fonts.secondary[600],
                     fontSize:windowWidth/30,
                     color:colors.black
            }} >Jangan Terlambat Deteksi Kanker ! Dapatkan Harga Khusus Cek</Text>
                </View>
            </TouchableOpacity>
          </ScrollView>
       </View>

            <View style={{padding:10,  top:-30,}}>
                <Text>INFORAMSI UMUM</Text>
                
                <View style={{flexDirection:'row',padding:10}}>
              
                    <View style={{flex:1,marginRight:5,padding:10,backgroundColor:colors.white,borderRadius:10,elevation:3}}>
                        <Text  style={{
                                fontFamily:fonts.secondary[600],
                                fontSize:windowWidth/25,
                                color:colors.black
                            }}>Harga Baru PCR Swab Per 29...</Text>
                        <Text  style={{
                                fontFamily:fonts.secondary[400],
                                fontSize:windowWidth/35,
                                color:colors.black
                            }}>Lorem Ipsum is simply dummy text printing </Text>
                    </View>

                    <View style={{flex:1,marginLeft:5,padding:10,backgroundColor:colors.white,borderRadius:10,elevation:3}}>
                        <Text  style={{
                                fontFamily:fonts.secondary[600],
                                fontSize:windowWidth/25,
                                color:colors.black
                            }}>Harga Baru PCR Swab Per 29...</Text>
                        <Text  style={{
                                fontFamily:fonts.secondary[400],
                                fontSize:windowWidth/35,
                                color:colors.black
                            }}>Lorem Ipsum is simply dummy text printing </Text>
                    </View>
                    
                  
                </View>
                <View style={{flexDirection:'row',padding:10}}>
              
              <View style={{flex:1,marginRight:5,padding:10,backgroundColor:colors.white,borderRadius:10,elevation:3}}>
                  <Text  style={{
                          fontFamily:fonts.secondary[600],
                          fontSize:windowWidth/25,
                          color:colors.black
                      }}>Harga Baru PCR Swab Per 29...</Text>
                  <Text  style={{
                          fontFamily:fonts.secondary[400],
                          fontSize:windowWidth/35,
                          color:colors.black
                      }}>Lorem Ipsum is simply dummy text printing </Text>
              </View>

              <View style={{flex:1,marginLeft:5,padding:10,backgroundColor:colors.white,borderRadius:10,elevation:3}}>
                  <Text  style={{
                          fontFamily:fonts.secondary[600],
                          fontSize:windowWidth/25,
                          color:colors.black
                      }}>Harga Baru PCR Swab Per 29...</Text>
                  <Text  style={{
                          fontFamily:fonts.secondary[400],
                          fontSize:windowWidth/35,
                          color:colors.black
                      }}>Lorem Ipsum is simply dummy text printing </Text>
              </View>
              
            
          </View>

           <Text>BERITA & PROMOSI</Text>

                    <MYgridList judul="Waspada ! Resiko Dan Bahaya Bronkiolitis Pada Anak"  gambar="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvc3BpdGFsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
                    <MYgridList judul="Waspada ! Resiko Dan Bahaya Bronkiolitis Pada Anak"  gambar="https://images.unsplash.com/photo-1546659934-038aab8f3f3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9zcGl0YWx8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
                    <MYgridList judul="Waspada ! Resiko Dan Bahaya Bronkiolitis Pada Anak"  gambar="https://images.unsplash.com/photo-1584362917137-56406a73241c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhhcm1hY3l8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
                    <MYgridList judul="Waspada ! Resiko Dan Bahaya Bronkiolitis Pada Anak"  gambar="https://images.unsplash.com/photo-1622230208995-0f26eba75875?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhhcm1hY3l8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
                    <MYgridList judul="Waspada ! Resiko Dan Bahaya Bronkiolitis Pada Anak"  gambar="https://images.unsplash.com/photo-1611764461465-09162da6465a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWNhbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"/>
                    <MYgridList judul="Waspada ! Resiko Dan Bahaya Bronkiolitis Pada Anak"  gambar="https://images.unsplash.com/photo-1555633514-abcee6ab92e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVkaWNhbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"/>
                    <MYgridList judul="Waspada ! Resiko Dan Bahaya Bronkiolitis Pada Anak"  gambar="https://images.unsplash.com/photo-1551601651-05a4836d25c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1lZGljYWx8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
                    <MYgridList judul="Waspada ! Resiko Dan Bahaya Bronkiolitis Pada Anak"  gambar="https://images.unsplash.com/photo-1551601651-09492b5468b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG1lZGljYWx8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
   




     
      
            </View>
           </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
