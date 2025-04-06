import React from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';

const WelcomeScreen = ({ navigation }) => (
    <View style={{ flex: 1, backgroundColor: '#032950', alignItems: 'center'}}>
        <Image style={{flex: 1, width: '100%', position: 'absolute', height: '100%'}} source={require('../assets/loader3.png')} />
        <View style={{backgroundColor:'#053362cf', padding: 16, borderRadius: 24, bottom: 50, position: 'absolute', marginHorizontal: 10}}>
            <Text style={{color:'white', fontSize: 24, fontWeight: 'bold', marginBottom: 8}}>
                Hello, wanderer! Welcome to the space world. Let's begin our adventure!
            </Text>
            <TouchableOpacity onPress={() => navigation.replace('Main')} style={{backgroundColor: '#F9CF22', padding: 16, width: 220,alignSelf: 'center', alignItems: 'center', borderRadius: 99}}>
                <Text style={{fontSize: 20,  color: '#000', fontWeight: 'bold'}}>
                    Start
                </Text>
            </TouchableOpacity>
        </View>

    </View>
);

export default WelcomeScreen;
