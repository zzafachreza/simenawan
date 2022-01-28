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
        
            <View style={{padding:10,backgroundColor:colors.primary,height:windowHeight/6,borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
            <TouchableOpacity
            onPress={()=>navigation.goBack()}
              style={{
              width:80,height:35,
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
            >Rawat Jalan Online</Text>
                <Text  
                style={{
                    fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/28,
                    color:colors.white
                 }}>Konsultasikan dengan dokter dari rumah Anda</Text>
            </View>

            <ScrollView style={{padding:10}}>
                
                
                 <MyInput placeholder="Cari berdasarkan nama dokter" />

                 <MyGap jarak={10} />

                 <View style={{borderBottomWidth:1,borderBottomColor:colors.border}}>
                    <Picker
                    
                    selectedValue={pilih1}
                    onValueChange={(itemValue, itemIndex) =>
                      setPilih1(itemValue)
                    }>
                    <Picker.Item label="Hari yang tersedia" value="Hari yang tersedia"/>
                    <Picker.Item label="Senin" value="Senin" />
                    <Picker.Item label="Selasa" value="Selasa" />
                    <Picker.Item label="Rabu" value="Rabu" />
                    <Picker.Item label="Kamis" value="Kamis" />
                    <Picker.Item label="Jumat" value="Jumat" />
                    <Picker.Item label="Sabtu" value="Sabtu" />
                    <Picker.Item label="Minggu" value="Minggu" />
                </Picker>
                 </View>

                 <MyGap jarak={10} />

                 <View style={{borderBottomWidth:1,borderBottomColor:colors.border}}>
                    <Picker
                    
                    selectedValue={pilih2}
                    onValueChange={(itemValue, itemIndex) =>
                      setPilih2(itemValue)
                    }>
                    <Picker.Item label="Pilih Area" value="Pilih Area"/>
                    <Picker.Item label="Jabodetabek" value="Jabodetabek" />
                    <Picker.Item label="Bali & Nusa Tenggara" value="Bali & Nusa Tenggara" />
                    <Picker.Item label="Jawa" value="Jawa" />
                    <Picker.Item label="Kalimantan" value="Kalimantan" />
                    <Picker.Item label="Maluku & Papua" value="Maluku & Papua" />
                    <Picker.Item label="Sulawesi" value="Sulawesi" />
                    <Picker.Item label="Sumatra" value="Sumatra" />
                </Picker>
                 </View>

                 <MyGap jarak={10} />

                  <View style={{borderBottomWidth:1,borderBottomColor:colors.border}}>
                    <Picker
                    
                    selectedValue={pilih3}
                    onValueChange={(itemValue, itemIndex) =>
                      setPilih3(itemValue)
                    }>
                   <Picker.Item label="Pilih Klinik" value="Pilih Klinik"/>
                    <Picker.Item label="InClinic Kebon Jeruk" value="InClinic Kebon Jeruk" />
                    <Picker.Item label="InClinic Lippo Village" value="InClinic Lippo Village" />
                    <Picker.Item label="InClinic TB Simatupang" value="InClinic TB Simatupang" />
                    <Picker.Item label="InClinic Semanggi" value="MRCCC InClinic Semanggi" />
                    <Picker.Item label="InClinic Banjarmasin" value="InClinic Banjarmasin" />
                    <Picker.Item label="InClinic Surabaya" value="InClinic Surabaya" />
                    <Picker.Item label="InClinic Sriwijaya" value="InClinic Sriwijaya" />
                    <Picker.Item label="InClinic Manado" value="InClinic Manado" />
                    <Picker.Item label="InClinic Lippo Cikarang" value="InClinic Lippo Cikarang" />
                    <Picker.Item label="InClinic Balikpapan" value="InClinic Balikpapan" />
                    <Picker.Item label="InClinic Kupang" value="InClinic Kupang" />
                    <Picker.Item label="InClinic Purwakarta" value="InClinic Purwakarta" />
                    <Picker.Item label="InClinic Makassar" value="InClinic Makassar" />
                    <Picker.Item label="InClinic Denpasar" value="InClinic Denpasar" />
                    <Picker.Item label="InClinic Medan" value="InClinic Medan" />
                    <Picker.Item label="InClinic Ambon" value="InClinic Ambon" />
                    <Picker.Item label="InClinic Palangkaraya" value="InClinic Palangkaraya" />
                    <Picker.Item label="InClinic Labuan Bajo" value="InClinic Labuan Bajo" />
                    <Picker.Item label="InClinic Bogor" value="InClinic Bogor" />

                  </Picker>
                  </View>

                  <MyGap jarak={10} />

                 <View style={{borderBottomWidth:1,borderBottomColor:colors.border}}>
                    <Picker
                    
                    selectedValue={setPilih4}
                    onValueChange={(itemValue, itemIndex) =>
                      setPilih4(itemValue)
                    }>
                    <Picker.Item label="Pilih Spesialis" value="Pilih Spesialis"/>
                    <Picker.Item label="Akupuntur" value="Akupuntur" />
                    <Picker.Item label="Andrologi" value="Andrologi" />
                    <Picker.Item label="Anestesi" value="Anestesi" />
                    <Picker.Item label="Bedah Digestif" value="Bedah Digestif" />
                    <Picker.Item label="Bedah Onkologi (Kanker)" value="Bedah Onkologi (Kanker)" />
                    <Picker.Item label="Bedah Plastik" value="Bedah Plastik" />
                    <Picker.Item label="Bedah Saraf" value="Bedah Saraf" />
                    <Picker.Item label="BEdah Toraks Kardiovaskular" value="BEdah Toraks Kardiovaskular" />
                    <Picker.Item label="Bedah Umum" value="Bedah Umum" />
                    <Picker.Item label="Darmatologi" value="Darmatologi" />
                    <Picker.Item label="Dietetik (Gizi)" value="Dietetik (Gizi)" />
                    <Picker.Item label="Dikter Umum" value="Dikter Umum" />
                    <Picker.Item label="Kedoktoran Gigi" value="Kedoktoran Gigi" />
                    <Picker.Item label="Kedokterak Okupasi" value="Kedokterak Okupasi" />
               
                </Picker>
                 </View>

                

            </ScrollView>
            <View style={{padding:10}}>
              <Text style={{
                color:colors.primary
              }}>PENCARIAN TERAKHIR</Text>
                <MyGap jarak={10} />
              <MyButton title="CARI" warna={colors.border} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
