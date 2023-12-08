import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, ListItem, Button } from 'react-native-elements';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';
import { TextInput } from 'react-native-gesture-handler';

export default function MyInput({
  onFocus,
  label,
  iconname,
  onChangeText,
  value,
  maxLength,
  keyboardType,
  secureTextEntry,
  styleInput,
  placeholder,
  autoFocus,
  tinggi,
  multiline,
  label2,
  styleLabel,
  colorIcon = colors.primary,
  disable = false
}) {
  return (
    <>
      <View
        style={{
          marginVertical: 15,
          flexDirection: 'row',
          alignItems: 'center',

          paddingVertical: 5,
        }}>
        <Icon type="ionicon" name={iconname} color={colorIcon} size={16} />
        <Text
          style={{
            fontFamily: fonts.secondary[600],
            color: colors.primary,
            left: 10,
            fontSize: 16,
            ...styleLabel,
          }}>
          {label}
        </Text>
      </View>
      {label2 && (
        <Text
          style={{
            fontFamily: fonts.secondary[600],
            color: colors.primary,
            left: 10,
            fontSize: 14,
            marginVertical: 1,
            ...styleLabel,
          }}>
          {label2}
        </Text>
      )}

      {!disable &&
        <TextInput
          maxLength={maxLength}
          multiline={multiline}
          autoFocus={autoFocus}
          onFocus={onFocus}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
          autoCapitalize="none"
          style={{
            borderColor: colors.border,
            borderRadius: 10,
            backgroundColor: colors.white,
            height: tinggi,
            // borderBottomWidth: 1,
            borderWidth: 1,
            paddingLeft: 10,
            color: colors.black,
            fontSize: 15,
            fontFamily: fonts.primary[400],
            ...styleInput,
          }}
        />}
      {disable && <View style={{
        padding: 10,
        backgroundColor: '#E1E1E1'
      }}>
        <Text style={{
          fontSize: 15,
          fontFamily: fonts.primary[400],
        }}>{value}</Text>
      </View>}
    </>
  );
}

const styles = StyleSheet.create({});
