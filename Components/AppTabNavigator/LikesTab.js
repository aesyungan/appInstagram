
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Icon } from 'native-base';
export default class LikesTab extends React.Component {
    static navigationOptions={
        tabBarIcon:({tintColor})=>(
            <Icon name="ios-heart"  style={{color:tintColor}}/>
        )
        ,title:'Likes'
    }
    render() {

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Likes Tab</Text>
            </View>
        );
    }
}