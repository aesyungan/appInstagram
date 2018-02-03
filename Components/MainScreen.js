/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Icon } from 'native-base';
import { TabNavigator } from 'react-navigation';
import HomeTab from './AppTabNavigator/HomeTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';
import SearchTab from './AppTabNavigator/SearchTab';
export default class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'Instagram',
        headerLeft: <Icon name="ios-camera-outline" style={{ paddingLeft: 10 }} />,
        headerRight: <Icon name="ios-send-outline" style={{ paddingRight: 10 }} />
    };
    render() {

        return (
            <AppTabNavigator />
        );
    }
}

const AppTabNavigator = TabNavigator(
    {
        HomeTab: { screen: HomeTab },
        SearchTab: { screen: SearchTab },
        AddMediaTab: { screen: AddMediaTab },
        LikesTab: { screen: LikesTab },
        ProfileTab: { screen: ProfileTab },

    }, {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            style: {
                ...Platform.select({
                    android: {
                        backgroundColor: 'white'
                    }
                })
            },
            activeTintColor: '#000',
            inactiveTintColor: '#d1cece',
            showLabel: false,
            showIcon: true,
        }

    }
);
