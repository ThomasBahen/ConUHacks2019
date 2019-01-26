import React from 'react';
import NewUserForm from '../components/NewUserForm.js';
import UserLoginForm from '../components/UserLoginForm.js'
import {View, ScrollView, StyleSheet} from 'react-native';
import {Divider, Text} from 'react-native-elements';

export default class WelcomeScreen extends React.Component {
    render(){
        return(
            <ScrollView>
                <Text h2 style= {styles.subheading}> Welcome to NAme!</Text>
                <UserLoginForm/>
            </ScrollView>
            
        );
    }
}
const styles = StyleSheet.create({
    subheading :{
        textAlign: 'center'
        
    }
});