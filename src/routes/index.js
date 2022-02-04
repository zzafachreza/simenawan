import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  MenuOrangTua,
  MenuOrangTuaEdit,
  MenuAnak,
  MenuAnakEdit,
  MenuPasutri,
  MenuPasutriEdit,
  MenuPendidikan,
  MenuPendidikanEdit,
  MenuPengalaman,
  MenuPengalamanEdit,
  MenuPelatihan,
  MenuPelatihanEdit,
  MenuProfileEdit,
} from '../pages';
import { colors } from '../utils';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MenuOrangTua"
        component={MenuOrangTua}
        options={{
          headerShown: true,
          headerTitle: 'Orang Tua',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}

      />

      <Stack.Screen
        name="MenuOrangTuaEdit"
        component={MenuOrangTuaEdit}
        options={{
          headerShown: true,
          headerTitle: 'Orang Tua Edit',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="MenuAnak"
        component={MenuAnak}
        options={{
          headerShown: true,
          headerTitle: 'Anak',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="MenuAnakEdit"
        component={MenuAnakEdit}
        options={{
          headerShown: true,
          headerTitle: 'Anak Edit',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="MenuPasutri"
        component={MenuPasutri}
        options={{
          headerShown: true,
          headerTitle: 'Suami / Istri',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="MenuPasutriEdit"
        component={MenuPasutriEdit}
        options={{
          headerShown: true,
          headerTitle: 'Suami / Istri Edit',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="MenuPendidikan"
        component={MenuPendidikan}
        options={{
          headerShown: true,
          headerTitle: 'Pendidikan',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="MenuPendidikanEdit"
        component={MenuPendidikanEdit}
        options={{
          headerShown: true,
          headerTitle: 'Pendidikan Edit',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="MenuPengalaman"
        component={MenuPengalaman}
        options={{
          headerShown: true,
          headerTitle: 'Pengalaman',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="MenuPengalamanEdit"
        component={MenuPengalamanEdit}
        options={{
          headerShown: true,
          headerTitle: 'Pengalaman Edit',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="MenuPelatihan"
        component={MenuPelatihan}
        options={{
          headerShown: true,
          headerTitle: 'Pelatihan',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="MenuPelatihanEdit"
        component={MenuPelatihanEdit}
        options={{
          headerShown: true,
          headerTitle: 'Pelatihan Edit',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="MenuProfileEdit"
        component={MenuProfileEdit}
        options={{
          headerShown: true,
          headerTitle: 'Profile Edit',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />



    </Stack.Navigator>
  );
}
