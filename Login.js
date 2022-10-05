import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View>
      <Text style={style.text}>Login</Text>
    </View>
  )
}

const style = StyleSheet.create({
    text:{
        color:'red',
        fontSize:24
    }
})