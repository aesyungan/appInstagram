
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Icon } from 'native-base';
export default class HomeTab extends React.Component {
   static navigationOptions={
       tabBarIcon:({tintColor})=>(
           <Icon name="ios-home"  style={{color:tintColor}}/>
       ),
       title:'Home'
   }
    render() {

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Tab</Text>
            </View>
        );
    }
}