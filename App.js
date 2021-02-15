import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/home'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import Profile from './src/profile'
import PostList from './src/PostList'
import postDetails from './src/postDetails';
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';


export default function App() {
  

  function ProfileScreen() {
    return (
      <Profile/>
    );  
  }

  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
 


  function HomeStack() {
   
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
                      options ={{  headerStyle : {backgroundColor :'#8e3cb4'} ,
                                    headerTitleStyle: { color : "#fff" , fontSize :20 , fontWeight : 'bold'} ,
                                    headerTitle : "BLOGPOSTS" ,
                                    headerRight : ()=> <AntDesign name="profile" size={24} color="white" />
                                    
                                   }} />
       
        <Stack.Screen name="PostList" component={PostList} 
        options ={{  headerStyle : {backgroundColor :'#8e3cb4'} ,
                                    headerTitleStyle: { color : "#fff" , fontSize :20 , fontWeight : 'bold'} ,
                                    headerTitle : "BLOGPOSTS" ,
                                    headerRight : ()=> <AntDesign name="profile" size={24} color="white" />,
                                    headerLeft : ""
                                   }} />
        <Stack.Screen name="postDetails" component={postDetails} />
      </Stack.Navigator>
    );
  }

  return (
   <NavigationContainer >
    <Tab.Navigator initialRouteName="HomeStack"
                   tabBarOptions ={{ 
                       activeTintColor : '#1f0844' ,
                       inactiveTintColor : "#fff" ,
                       labelStyle :{fontSize :18} ,
                       tabStyle   :{backgroundColor : '#8e3cb4' }

                       }}>
      <Tab.Screen name="HomeStack" component={HomeStack} 
                   options={{ tabBarIcon :({color , focused})=> <Entypo name="home" size={ focused ?30 : 24} color={color} /> ,
                              title :"Test"   }} />
      <Tab.Screen name="Profile" component={ProfileScreen} 
                  options ={{ tabBarIcon :({color , focused})=> <FontAwesome name="user" size={ focused ?30 : 24} color={color} />}}/> 
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
