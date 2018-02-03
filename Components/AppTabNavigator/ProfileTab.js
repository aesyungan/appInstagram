
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Icon } from 'native-base';
export default class ProfileTab extends React.Component {
    static navigationOptions={
        tabBarIcon:({tintColor})=>(
            <Icon name="person"  style={{color:tintColor}}/>
        )
        ,title:'Profile'
    }
    render() {

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Profile Tab</Text>
            </View>
        );
    }
}