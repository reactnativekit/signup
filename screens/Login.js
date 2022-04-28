import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';

import Inputs from '../components/Inputs';
import Submit from '../components/Submit';
import Account from '../components/Account';

const Login = props => {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.container}>
                <Image 
                    source={require('../assets/login.png')} 
                    resizeMode="center" 
                    style={styles.image} />
                <Text style={styles.textTitle}>Welcome Back!</Text>
                <Text style={styles.textBody}>Log in to your existing account.</Text>
                <View style={{marginTop: 20}} />
                <Inputs name="Email" />
                <Inputs name="Password" pass={true} />
                <View style={{width: '90%'}}>
                    <Text style={[styles.textBody], {alignSelf:'flex-end'}}>Forgot Password?</Text>
                </View>
                <Submit title="LOG IN" color="#0148A4" />
                <Text style={styles.textBody}>Or connect using</Text>
                <View style={{flexDirection: 'row'}}>
                    <Account color="#4267B2" title="Facebook" />
                    <Account color="#DB3236" title="Google" />
                </View>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <Text style={styles.textBody}>Don't Have an account</Text>
                    <Text style={[styles.textBody, {color: 'blue'}]} onPress={() => props.navigation.navigate('SignUp')}> Sign Up</Text>
                </View>
            </View>
        </ScrollView>      
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 400,
        height: 250,
        marginVertical: 10
    },
    textTitle: {
        fontFamily: 'Foundation',
        fontSize: 40,
        marginVertical: 10,
    },
    textBody: {
        fontFamily: 'Foundation',
        fontSize: 16
    }
});

export default Login