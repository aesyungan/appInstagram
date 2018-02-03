
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Icon } from 'native-base';
export default class AddMediaTAb extends React.Component {
    static navigationOptions={
        tabBarIcon:({tintColor})=>(
            <Icon name="ios-add-circle"  style={{color:tintColor}}/>
        )
        ,title:'Add Media'
    }
    render() {

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>AddMediaTab</Text>
            </View>
        );
    }
}