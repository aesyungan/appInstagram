
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import { Icon, Container, Content, Thumbnail, Header, Right, Left, Body } from 'native-base';
import CardComponent from '../CardComponent';
export default class HomeTab extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{ color: tintColor }} />
        ),
        title: 'Home'
    }
    render() {

        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Icon name="ios-camera-outline" style={{ paddingLeft: 10 }} />
                    </Left>
                    <Body>
                        <Text style={{}}>Instagram</Text>
                    </Body>
                    <Right>
                        <Icon name="ios-send-outline" style={{ paddingRight: 10 }} />
                    </Right>
                </Header>
                <Content>
                    <View style={{ height: 80 }}>
                        <View style={{ flex: 1, alignItems: 'center', paddingHorizontal: 7, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: 'bold' }}>Stories</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="md-play" style={{ fontSize: 14 }} />
                                <Text style={{ fontWeight: 'bold' }}>Watch All</Text>
                            </View>

                        </View>
                        <View>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} source={require('../../assets/stories/1.jpg')} />
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} source={require('../../assets/stories/2.jpg')} />
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} source={require('../../assets/stories/3.jpg')} />
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} source={require('../../assets/stories/4.jpg')} />
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} source={require('../../assets/stories/5.jpg')} />
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} source={require('../../assets/stories/6.jpg')} />
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} source={require('../../assets/stories/7.jpg')} />
                            </ScrollView>
                        </View>
                    </View>
                    <CardComponent userPhoto={require('../../assets/feed_images/1.jpg')} likes="70" imageSource="1" />
                    <CardComponent userPhoto={require('../../assets/feed_images/1.jpg')} likes="20" imageSource="2" />
                    <CardComponent userPhoto={require('../../assets/feed_images/1.jpg')} likes="60" imageSource="3" />
                </Content>
            </Container>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'

    },
});