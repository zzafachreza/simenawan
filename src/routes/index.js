import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  Tambah,
  Daftar,
  Monitor,
  Edit,
  Tanaman,
  Menu,
  MenuGejala,
  MenuPengertian,
  MenuPenularan,
  MenuPencegahan,
  MenuPerisapan,
  Cegah1,
  Cegah6,
  Cegah5,
  Cegah4,
  Cegah2,
  Cegah3,
  MenuTanya,
  MenuNuhun,
  Menu1,
  Menu2,
  Menu3,
  Menu4,
  Menu5,
  Menu6,
  Menu7,
  Menu8,
  Menu9,
  Menu10,
} from '../pages';
import {colors} from '../utils';

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
        name="Menu"
        component={Menu}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MenuPengertian"
        component={MenuPengertian}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MenuGejala"
        component={MenuGejala}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MenuPenularan"
        component={MenuPenularan}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MenuPencegahan"
        component={MenuPencegahan}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MenuPerisapan"
        component={MenuPerisapan}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MenuTanya"
        component={MenuTanya}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MenuNuhun"
        component={MenuNuhun}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Cegah1"
        component={Cegah1}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Cegah2"
        component={Cegah2}
        options={{
          headerShown: true,
          headerTitle: '',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Cegah3"
        component={Cegah3}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Cegah4"
        component={Cegah4}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Cegah5"
        component={Cegah5}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Cegah6"
        component={Cegah6}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Menu1"
        component={Menu1}
        options={{
          headerShown: true,
          headerTitle: '',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Menu2"
        component={Menu2}
        options={{
          headerShown: true,
          headerTitle: '',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000',
        }}
      />

      <Stack.Screen
        name="Menu3"
        component={Menu3}
        options={{
          headerShown: true,
          headerTitle: 'Vaksin C19',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000',
        }}
      />

      <Stack.Screen
        name="Menu4"
        component={Menu4}
        options={{
          headerShown: false,
          headerTitle: '',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000',
        }}
      />

      <Stack.Screen
        name="Menu5"
        component={Menu5}
        options={{
          headerShown: true,
          headerTitle: 'Pesan Check Up',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000',
        }}
      />

      <Stack.Screen
        name="Menu6"
        component={Menu6}
        options={{
          headerShown: true,
          headerTitle: '',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000',
        }}
      />

      <Stack.Screen
        name="Menu7"
        component={Menu7}
        options={{
          headerShown: true,
          headerTitle: 'Periksa Gejala',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000',
        }}
      />

      <Stack.Screen
        name="Menu8"
        component={Menu8}
        options={{
          headerShown: true,
          headerTitle: '',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000',
        }}
      />

      <Stack.Screen
        name="Menu9"
        component={Menu9}
        options={{
          headerShown: true,
          headerTitle: '',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#FFF',
        }}
      />

      <Stack.Screen
        name="Menu10"
        component={Menu10}
        options={{
          headerShown: true,
          headerTitle: 'Aktifasi Portal Pasien',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000',
        }}
      />
    </Stack.Navigator>
  );
}
