import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import BlackFriday from '../assets/sign.png'

export default function CategoryListItem(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CategoryListItem</Text>
            <Image style={styles.categoryImage} source={BlackFriday}/>
        </View>
    )
}

const styles = StyleSheet.create({
    categoryImage: {
        width: 100,
        height: 100
    },
    container: {
        alignItems: 'center',
        padding: 16 ,
        borderRadius:4,
        backgroundColor:'#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius:10,
        shadowOffset: { width: 0, height: 0 },
        marginBottom: 16
    },
    title: {
        textTransform: 'uppercase',
        marginBottom:8,
        fontWeight:'700'
    }

});