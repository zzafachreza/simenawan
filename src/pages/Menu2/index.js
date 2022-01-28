import React from 'react'
import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native'
import { fonts, windowWidth, colors, windowHeight } from '../../utils'
import { Value } from 'react-native-reanimated'
import { Icon } from 'react-native-elements'
import { MyGap, MyButton } from '../../components'

export default function () {
    return (
        <SafeAreaView style={{backgroundColor: colors.white,flex:1}}>
           <ScrollView>
           <View style={{padding:10,backgroundColor:colors.white,height:windowHeight/6,borderBottomLeftRadius:20,borderBottomRightRadius:20,justifyContent:'center',alignItems:'center',marginBottom:20,}}>
                <Image source={require('../../assets/covid.png')}/>
                <Text 
                style={{
                    fontFamily:fonts.secondary[600],
                    fontSize:windowWidth/18,
                    color:colors.black
                 }}
            >Tes COVID19</Text>
                <Text  
                style={{
                    fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/35,
                    color:colors.black
                 }}>Apakah Anda akan melakukan Tes COVID19 di salah satu Klinik Dibawah ini ?</Text>
            </View>
                <MyGap jarak={20} />
           <View style={{padding:10}}>
           <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/35,
                    color:colors.black}} ><Icon type="ionicon" name="caret-forward" /> InClinic Kebon Jeruk</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/35,
                    color:colors.black}} ><Icon type="ionicon" name="caret-forward" /> InClinic Lippo Village</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/35,
                    color:colors.black}} ><Icon type="ionicon" name="caret-forward" /> InClinic TB Simatupang</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/35,
                    color:colors.black}} ><Icon type="ionicon" name="caret-forward" /> InClinic Semanggi</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/35,
                    color:colors.black}} ><Icon type="ionicon" name="caret-forward" /> InClinic Banjarmasin</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/35,
                    color:colors.black}} ><Icon type="ionicon" name="caret-forward" /> InClinic Surabaya</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/35,
                    color:colors.black}} ><Icon type="ionicon" name="caret-forward" /> InClinic Sriwijaya</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/35,
                    color:colors.black}} ><Icon type="ionicon" name="caret-forward" /> InClinic Manado</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/35,
                    color:colors.black}} ><Icon type="ionicon" name="caret-forward" /> InClinic Lippo Cikarang</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/35,
                    color:colors.black}} ><Icon type="ionicon" name="caret-forward" /> InClinic Balikpapan</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/35,
                    color:colors.black}} ><Icon type="ionicon" name="caret-forward" /> InClinic Kupang</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/35,
                    color:colors.black}} ><Icon type="ionicon" name="caret-forward" /> InClinic Purwakarta</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/35,
                    color:colors.black}} ><Icon type="ionicon" name="caret-forward" /> InClinic Makassar</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/35,
                    color:colors.black}} ><Icon type="ionicon" name="caret-forward" /> InClinic Denpasar</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/35,
                    color:colors.black}} ><Icon type="ionicon" name="caret-forward" /> InClinic Medan</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/35,
                    color:colors.black}} ><Icon type="ionicon" name="caret-forward" /> InClinic Ambon</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/35,
                    color:colors.black}} ><Icon type="ionicon" name="caret-forward" /> InClinic Palangkaraya</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/35,
                    color:colors.black}} ><Icon type="ionicon" name="caret-forward" /> InClinic Labuan Bajo</Text>
                <Text style={{fontFamily:fonts.secondary[400],
                    fontSize:windowWidth/35,
                    color:colors.black}} ><Icon type="ionicon" name="caret-forward" /> InClinic Bogor</Text>
           </View>

           
           </ScrollView>
           <MyGap jarak={20} />

           <View style={{flexDirection:'row'}}>
                    <View style={{flex:1,padding:10}}>
                    <MyButton warna={colors.white} title="TIDAK" colorText={colors.primary} borderColor={colors.primary} borderSize={1} />
                    </View>
                    <View style={{flex:1,padding:10}}>
                    <MyButton warna={colors.primary} title="IYA" />
                    </View>
           </View>

                

       
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
