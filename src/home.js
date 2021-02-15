import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, FlatList } from 'react-native';
import Button from './components/button'
import { useNavigation  } from '@react-navigation/native';
 


export default function HomeScreen() {
  const {navigate} = useNavigation();


  const PushAllData = () => {
     navigate('PostList')
   
  }
  
  return (
    <View style={styles.container}>

<Button BtnBorderRadius={20} width={150} height={50} bgColor='#8e3cb4' txtColor='#fff' btnName='GET POSTS' onPress={() => PushAllData()}></Button>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 20 ,
    width :'100%'
  },

});
