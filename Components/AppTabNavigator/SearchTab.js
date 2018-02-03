
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Icon } from 'native-base';
export default class SearchTab extends React.Component {
    static navigationOptions={
        tabBarIcon:({tintColor})=>(
            <Icon name="ios-search"  style={{color:tintColor}}/>
        ),title:'Search'
    }
    render() {

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Search Tab</Text>
            </View>
        );
    }
}