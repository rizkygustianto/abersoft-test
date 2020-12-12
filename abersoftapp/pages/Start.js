import React, { useState } from 'react'
import { Button, PixelRatio, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { playerName } from '../store/actions';

function Login({navigation}) {
    
    function toRegister() {
        navigation.navigate('Register')
    }

    function toLogin() {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>Register</Text> */}
            <View style={styles.card}>
                <View>
                    <TouchableOpacity 
                    onPress={() => toRegister()} 
                    style={styles.button}
                    activeOpacity={.5}
                    >
                        <Text style={styles.buttonText}>Register Account</Text>
                    </TouchableOpacity>
                    {/* <Button 
                        onPress={() => toRegister()} 
                        title='Register Account'
                        color='#A9A9A9' 
                        style={styles.button} /> */}
                </View>
                <View>
                    <TouchableOpacity 
                        onPress={() => toLogin()} 
                        style={styles.button}
                        activeOpacity={.5}
                        >
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                </View>
            </View>
            
            
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignContent: "center",
        // marginHorizontal: 54,
        backgroundColor: '#3549FB'
    },
    button: {
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:30,
        marginRight:30,
        backgroundColor:'#FFFFFF',
        borderRadius:25.5,
        // borderWidth: 1,
        // borderColor: '#fff'
    },
    buttonText: {
        color:'#000000',
        textAlign:'center',
        fontWeight: 'bold'
    },
    card: {
        // backgroundColor: '#ffffff',
        // borderRadius: 25.5
        marginBottom: 80
    }
})

export default Login