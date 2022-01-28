import React,{useState} from 'react'
import { StyleSheet, Text, View,Image, ScrollView, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native'
import { fonts, windowWidth, colors, windowHeight } from '../../utils'
import { Value } from 'react-native-reanimated'
import { Icon } from 'react-native-elements'
import { MyGap, MyButton, MyInput } from '../../components'
import { Picker } from '@react-native-picker/picker'
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox'

export default function () {

    const [pilih1, setPilih1] = useState();
  const [pilih2, setPilih2] = useState();

    const TheInput = ({judul,isi})=>{
        return (
            <View>
                <Text>
                    {judul}
                </Text>
                <TextInput placeholder={isi} />
            </View>

        )
    }

    return (
        <SafeAreaView style={{backgroundColor: colors.white,flex:1,padding:10}}>
           <ScrollView>
           <Text  
                style={{
                    fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/30,
                    color:colors.black
                 }}>Mohon Lengkapi Data Anda. Untuk mengganti data lain, silahkan ke <Text style={{  fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/30,
                    color:colors.primary}}>Profile Pasien</Text> Anda</Text>

                <View style={{padding:10}}>
                    <MyInput placeholder="Nama Lengkap" />
             
                    <MyInput placeholder="Tanggal Lahir" />
           
                    <MyInput placeholder="Nomor Ponsel" />
              
                    <MyInput placeholder="Alamat E-Mail" />
              
           

                    <View style={{padding:10,marginTop:10}}>
                        <Text style={{
                             fontFamily: fonts.secondary[400],
                             color: colors.border,
                         
                             fontSize: 16,
                                }}>Tipe Identitas*</Text>
                                <Picker selectedValue={pilih2}
                            onValueChange={(itemValue, itemIndex) =>
                            setPilih2(itemValue)
                            }>
                        <Picker.Item value="KTP" label="KTP" />
                        <Picker.Item value="Paspor" label="Paspor" />
                        <Picker.Item value="SIM" label="SIM" />
                    </Picker>
                    </View>
                 
                    <MyInput placeholder="No. Identitas (KTP/Paspor/SIM)*" />

                    <View style={{padding:5,marginTop:20}}>
                        <Text style={{
                             fontFamily: fonts.secondary[400],
                             color: colors.border,
                         
                             fontSize: 14,
                        }}>Foto Kartu Identitas Anda *</Text>
                       <View style={{
                           borderWidth:1,
                           borderRadius:10,
                           borderColor:colors.primary,
                           padding:windowWidth/5
                       }}>
                           <MyButton title="AMBIL FOTO" warna={colors.primary} />
                       </View>
                    </View>

                    <View style={{padding:5,marginTop:20}}>
                        <Text style={{
                             fontFamily: fonts.secondary[400],
                             color: colors.border,
                         
                             fontSize: 14,
                        }}>Foto Anda Bersama dengan Kartu Identitas Anda *</Text>
                       <View style={{
                           borderWidth:1,
                           borderRadius:10,
                           borderColor:colors.primary,
                           padding:windowWidth/5
                       }}>
                           <MyButton title="AMBIL FOTO" warna={colors.primary} />
                       </View>
                    </View>
                </View> 

                <View style={{borderBottomWidth:1,borderBottomColor:colors.border}}>
                    <Picker
                    
                    selectedValue={pilih1}
                    onValueChange={(itemValue, itemIndex) =>
                      setPilih1(itemValue)
                    }>
                    <Picker.Item label="InClinic yang sering dikunjungi" value="InClinic yang sering dikunjungi"/>
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

                 

                <View style={{flexDirection:'row',marginTop:10,}}>
                    <View>
                    <CheckBox/>
                    </View>
                    <View style={{flex:1,justifyContent:'center'}}>
                    <Text  style={{
                        fontFamily:fonts.secondary[400],
                        fontSize:windowWidth/30,
                        marginTop:10,
                
                        color:colors.black
                    }}>Dengan ini saya menyatakan bahwa data yang
                    saya berikan adalah benar dan saya menyetujui
                    semua syarat dan ketentuan yang berlaku.</Text>
                    </View>
                </View>
                    <MyGap jarak={20} />
                <MyButton title="KIRIM" warna={colors.primary} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
