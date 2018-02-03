
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Icon,Container,Content } from 'native-base';
import CardComponent from '../CardComponent';
export default class HomeTab extends React.Component {
   static navigationOptions={
       tabBarIcon:({tintColor})=>(
           <Icon name="ios-home"  style={{color:tintColor}}/>
       ),
       title:'Home'
   }
    render() {
        
        return (
            <Container style={styles.container}>
               <Content>
                 <CardComponent userPhoto={require('../../assets/feed_images/1.jpg')} likes="70" imageSource="1"/>
                 <CardComponent userPhoto={require('../../assets/feed_images/1.jpg')} likes="20" imageSource="2"/>
                 <CardComponent userPhoto={require('../../assets/feed_images/1.jpg')} likes="60" imageSource="3"/>
                </Content>
            </Container>
           
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
  
    },
});