import React, { useState } from 'react'
import { Button, PixelRatio, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { playerName } from '../store/actions';

function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome To The App</Text>
            <Text style={styles.content} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas scelerisque porttitor turpis viverra lobortis convallis. Libero tristique donec turpis elit adipiscing sit faucibus tincidunt. Erat porttitor amet, nibh id lorem. Volutpat quam vestibulum egestas ut odio odio. Nunc non, feugiat a diam at lacus augue. Sit lacus pharetra eget feugiat aliquam enim adipiscing. Purus nec tortor tellus, neque montes. Gravida ornare eu viverra libero. Vulputate massa turpis posuere nibh dolor pulvinar bibendum. Viverra scelerisque ut dignissim at sit s</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        marginHorizontal: '20%'
    },
    content: {
        alignSelf: "center",
        fontSize: 20,
        fontWeight: '100',
        // textAlign: 'center'
    },
    title: {
        alignSelf: "center",
        fontSize: 60,
        fontWeight: '400'
    }
})

export default Home