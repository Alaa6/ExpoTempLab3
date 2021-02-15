import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, FlatList , Image} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute  } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';



export default function PostDetails() {

    const {params : {item}} = useRoute()



    return (
        <ScrollView>
        <View style={styles.item}>
            <Image style={styles.img} source={{ uri: 'https://images.unsplash.com/photo-1610987653945-fe23ff170a2f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max' }} ></Image>
            <Text style={styles.boldTxt}>{item.title}</Text>
            <Text style={styles.txt}>{item.body}</Text>

        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        paddingHorizontal: 20,
        width: '100%' , 
        
    },
    txt: {
        fontSize: 25,
        marginHorizontal: 5,
        color: "#212121" , 
        margin :10
    },
    boldTxt : {
        fontSize: 25,
        marginHorizontal: 5,
        color: "#212121" , 
        margin :10,
        fontWeight : 'bold'

    } ,
    img : {
        height: 400, 
        resizeMode : 'stretch',
         margin: 10  ,
         borderRadius : 40
    }

});
