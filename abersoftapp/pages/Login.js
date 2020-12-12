import React, { useState } from 'react'
import { Button, PixelRatio, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions'

function Login({navigation}) {

    const dispatch = useDispatch()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    function handleLogin() {
        const payload = {
            email,
            password
        }
        dispatch(login(payload, (err) => {
            if (!err) {
                navigation.navigate('Home')
            } else {
                console.log(err);
            }
        }))
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Login</Text>
                {/* <Text style={styles.inputName} >Enter Your Name</Text> */}
                <TextInput onChangeText={(e) => setEmail(e)} style={styles.textInput} placeholder='E-Mail' />
                <TextInput onChangeText={(e) => setPassword(e)} style={styles.textInput} placeholder='Password' secureTextEntry={true} />
                <TouchableOpacity 
                        onPress={() => handleLogin()} 
                        style={styles.button}
                        activeOpacity={.5}
                        >
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
            </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignContent: "center",
        backgroundColor: '#3549FB'
        // marginHorizontal: '20%'
    },
    button: {
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:40,
        marginRight:40,
        backgroundColor:'#3549FB',
        borderRadius:25.5,
        // borderWidth: 1,
        // borderColor: '#fff'
    },
    buttonText: {
        color:'#FFFFFF',
        textAlign:'center',
        fontWeight: 'bold'
    },
    inputName: {
        alignSelf: "center",
        fontSize: 20,
        fontWeight: '100',
        // textAlign: 'center'
    },
    title: {
        alignSelf: "center",
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 40
    },
    textInput: {
        height: 40,
        borderColor: '#3549FB',
        borderBottomWidth: 1,
        marginVertical: 5,
        // textAlign: 'center',
        marginHorizontal: 50
        // marginHorizontal: '25%'
    },
    card: {
        backgroundColor: '#ffffff',
        borderTopStartRadius: 25.5,
        borderTopEndRadius: 25.5,
        paddingBottom: 50
    }
})

export default Login