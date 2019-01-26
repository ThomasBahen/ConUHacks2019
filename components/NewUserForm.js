import React from 'react';
import {FormLabel, FormInput, Text} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';
export default class NewUserForm extends React.Component {
    render(){
        return(
            <View>
                <Text h4 style={styles.subheading}> Create Account </Text>
                <FormLabel> First Name </FormLabel>
                <FormInput/>
                <FormLabel> Last Name </FormLabel>
                <FormInput/>
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