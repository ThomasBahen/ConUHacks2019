import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FormLabel, FormInput, Text} from 'react-native-elements';

export default class UserLoginForm extends React.Component {
    render(){
        return (
            <View>
                <Text h4 style={styles.subheading}> Log In</Text>
                <FormLabel> Username </FormLabel>
                <FormInput/>
                <FormLabel> Password </FormLabel>
                <FormInput/>
               
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    subheading :{
        textAlign: 'center'
        
    }
});