import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, FlatList  , Image} from 'react-native';
import Button from './components/button'
import { useNavigation  } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const baseUrl = 'https://jsonplaceholder.typicode.com/posts'
export default function PostList() {

    const [data, setData] = useState([]);
    const {navigate} = useNavigation();

    


    useEffect(() => {

        fetch(`${baseUrl}`, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                setData(responseJson)
            })
            .catch((error) => {
                console.error(error);
            });

    }, [])

    /*  ----------------------- RenderItem for Flatlist  ------------------- */


    const Item = ({item}) => (
        <TouchableOpacity onPress = {()=>goToDetailsScreen(item)}>
        <View style={styles.item} >
            <Image style ={styles.img} source ={{uri:'https://images.unsplash.com/photo-1610987653945-fe23ff170a2f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'}} ></Image>
            <Text style={styles.txt}>{item.title}</Text>
        </View>
         </TouchableOpacity>
    );

    const renderItem = ({ item }) => (
        <Item item={item} />
    );
    /*  ----------------------- FlatListItemSeparator  ------------------- */


    const FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#eee",
                }}
            />
        );
    }

    const goToDetailsScreen =(item)=> {
        navigate ('postDetails' ,{item} )
    }

    return (
        <View style={styles.container}>



            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={FlatListItemSeparator}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        paddingHorizontal: 20,
        width: '100%'
    },
    txt: {
        fontSize: 25,
        marginHorizontal: 5,
        color: "#212121" , 
        margin :5
    },
    img : {
        height: 200, 
        resizeMode : 'stretch',
         margin: 5  ,
         borderRadius : 25
    }

});
