import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Alert,
} from 'react-native';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import {fonts, windowWidth, colors} from '../../utils';
import {MyButton, MyGap, MyInput, MyHeader} from '../../components';

import RNExitApp from 'react-native-exit-app';

const DataKategori = ({icon, nama, onPress,img=require('../../assets/hospital.png')}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: colors.white,
        padding: 5,
        borderRadius: 20,
        width: windowWidth / 5,
        elevation: 5,
      }}>
       <View style={{width:windowWidth / 6,overflow:'hidden',height:60,backgroundColor:colors.white,borderRadius:40,justifyContent:'center',alignContent:'center'}}>
        <Image source={img} style={{
            width:40,
            height:40,
            alignSelf:'center'
          }} />
        </View>
      <View>
        <Text
          style={{
            fontFamily: fonts.secondary[600],
            color: colors.black,
            fontSize: windowWidth / 42,
            textAlign: 'center',
          }}>
          {nama}
        </Text>
      </View>
    </TouchableOpacity>
  );
};


export default function Home({navigation}) {
  return (
   <>
 <SafeAreaView
      style={{
        flex: 1,
        padding:10
      }}>
       <ScrollView>
       <View style={{flexDirection:'row'}}>
       <View style={{flex:1,}}>
          <Text style={{
            fontFamily:fonts.secondary[800],
            fontSize:windowWidth/15,
            color:colors.black,
            marginBottom:10,
          }}>InClinic</Text>
          <Text  style={{
              fontFamily:fonts.secondary[600],
              fontSize:windowWidth/25,
              color:colors.black
          }}>Selamat datang ! </Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style={{
            fontFamily:fonts.secondary[600],
            fontSize:windowWidth/25,
            color:colors.black
          }}>EN</Text>
          <Icon type="ionicon" name="chevron-down-outline" />
        </View>
       </View>

       {/* section 2 */}

       <View style={{flexDirection:'row',justifyContent:'space-around',height:windowWidth/3.5,borderRadius:20,backgroundColor:colors.primary}}>
          <TouchableOpacity onPress={()=>navigation.navigate('Cegah1')} style={{justifyContent:'center',alignItems:'center'}}> 
            <View style={{width:60,overflow:'hidden',height:60,backgroundColor:colors.white,borderRadius:40,justifyContent:'center',alignContent:'center'}}>
              <Image source={require('../../assets/book.png')} style={{
                width:40,
                height:40,
                alignSelf:'center'
              }} />
            </View>
            <Text style={{
              top:5,
            fontFamily:fonts.secondary[600],
            fontSize:windowWidth/35,
            color:colors.white
          }}>
              Buat Janji Temu
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Cegah2')}  style={{justifyContent:'center',alignItems:'center'}}> 
            <View style={{width:60,height:60,overflow:'hidden',height:60,backgroundColor:colors.white,borderRadius:40,justifyContent:'center',alignContent:'center'}}>
            <Image source={require('../../assets/live.png')} style={{
                width:40,
                height:40,
                alignSelf:'center'
              }} />
            </View>
            <Text style={{
              top:5,
            fontFamily:fonts.secondary[600],
            fontSize:windowWidth/35,
            color:colors.white
          }}>
             Tips Kesehatan
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Cegah3')} style={{justifyContent:'center',alignItems:'center'}}> 
          <View style={{width:60,height:60,overflow:'hidden',height:60,backgroundColor:colors.white,borderRadius:40,justifyContent:'center',alignContent:'center'}}>
            <Image source={require('../../assets/tangan.png')} style={{
                width:40,
                height:40,
                alignSelf:'center'
              }} />
            </View>
            <Text style={{
              top:5,
            fontFamily:fonts.secondary[600],
            fontSize:windowWidth/35,
            color:colors.white
          }}>
             Pantau Kesehatanku
            </Text>
          </TouchableOpacity>
       </View>

       <View  style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:10,
      padding:5,backgroundColor:'#ECFBE6',borderRadius:10,}}>
       <Icon type="ionicon" name="information-circle" color={'#43A321'} />
         <Text style={{fontFamily:fonts.secondary[600],
            fontSize:windowWidth/35,
            left:2,
            color:colors.black}}>Untuk Informasi lanjut mengenai Telekonsultasi, klik disini</Text>
       </View>

          {/* menu */}
       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{flex:1,width:windowWidth,paddingBottom:10}}>
            <MyGap jarak={15}/>
              <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <DataKategori icon="search" nama="Informasi Klinik" onPress={()=>navigation.navigate('Menu1')}/>
                <DataKategori icon="search" nama="Tes COVID19" img={require('../../assets/covid.png')} onPress={()=>navigation.navigate('Menu2')}/>
                <DataKategori icon="search" nama="Vaksin C19" img={require('../../assets/vaksin.png')} onPress={()=>navigation.navigate('Menu3')} />
                <DataKategori icon="search" nama="Rawat Jalan Online" img={require('../../assets/tele.png')} onPress={()=>navigation.navigate('Menu4')}  />
              </View>
              <MyGap jarak={15}/>
              <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                       <DataKategori icon="search" nama="DiaBISA" img={require('../../assets/diabisa.png')} onPress={()=>navigation.navigate('Cegah3')}/>
                <DataKategori icon="search" nama="Periksa Gejala" img={require('../../assets/gejala.png')} onPress={()=>navigation.navigate('Menu7')} />
                <DataKategori icon="search" nama="Corporate Wellness" img={require('../../assets/welness.png')} onPress={()=>navigation.navigate('Cegah3')}/>
                <DataKategori icon="search" nama="Deklarasi Kesehatan" img={require('../../assets/deklarasi.png')} onPress={()=>navigation.navigate('Cegah3')}/>
          
              </View>

            </View>
            <View style={{flex:1, width:windowWidth,paddingBottom:10}}>
            <MyGap jarak={15}/>
              <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                   <DataKategori icon="search" nama="Gawat Darurat" img={require('../../assets/darurat.png')} onPress={()=>navigation.navigate('Menu9')} />
                <DataKategori icon="search" nama="Edutainment" img={require('../../assets/edu.png')} onPress={()=>navigation.navigate('Cegah3')} />
              </View>
              
            </View>
       </ScrollView>


          <MyGap jarak={15}/>
          <View  style={{
            flexDirection:'row',
            alignItems:'center',
            marginTop:10,
            padding:5,}}>
    
         <Text style={{fontFamily:fonts.secondary[600],
            fontSize:windowWidth/25,
            flex:1,
            color:colors.black}}>UPDATE & PROMOTION</Text>
               <Icon type="ionicon" name="chevron-forward-outline" color={'#43A321'} />
       </View>


       <View style={{
         marginVertical:10
       }}>
          <ScrollView horizontal>
            <TouchableOpacity style={{
              marginRight:10,
              width:windowWidth-75,
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


       </ScrollView>
         
    </SafeAreaView>
     <View style={{flexDirection:'row',justifyContent:'space-around',height:60,padding:10,backgroundColor:colors.white,borderTopWidth:0.5,}}>
            
     <TouchableOpacity style={{width:80,justifyContent:'center',alignItems:'center'}}>
     <Icon type="ionicon" name="home" color={colors.primary} />
       <Text  style={{ 
             fontFamily:fonts.secondary[400],
              fontSize:windowWidth/35,
              color:colors.primary
     }}>Beranda</Text>
     </TouchableOpacity>

     <TouchableOpacity onPress={()=>navigation.navigate('Cegah5')} style={{width:100,justifyContent:'center',alignItems:'center'}}>
     <Icon type="ionicon" name="home" color={colors.primary} />
       <Text  style={{ 
             fontFamily:fonts.secondary[400],
              fontSize:windowWidth/35,
              color:colors.primary
     }}>Janji Temu Saya</Text>
     </TouchableOpacity>

     <TouchableOpacity onPress={()=>navigation.navigate('Cegah6')} style={{width:100,justifyContent:'center',alignItems:'center'}}>
     <Icon type="ionicon" name="clipboard" color={colors.primary} />
       <Text  style={{ 
             fontFamily:fonts.secondary[400],
              fontSize:windowWidth/35,
              color:colors.primary
     }}>Portal Pasien</Text>
     </TouchableOpacity>


     <TouchableOpacity  onPress={()=>navigation.navigate('Cegah4')} style={{width:80,justifyContent:'center',alignItems:'center'}}>
     <Icon type="ionicon" name="person" color={colors.primary} />
       <Text  style={{ 
             fontFamily:fonts.secondary[400],
              fontSize:windowWidth/35,
              color:colors.primary
     }}>Profile Saya</Text>
     </TouchableOpacity>
   </View>
   </>
  );
}



const styles = StyleSheet.create({

})
