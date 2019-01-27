import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FormLabel, FormInput, Text, Button} from 'react-native-elements';

export default class UserLoginForm extends React.Component {
    render(){
        return (
            <View style={{padding: 20}}>
                <Text h4 style={styles.subheading}> Log In</Text>
                <FormLabel> Username </FormLabel>
                <FormInput/>
                <FormLabel> Password </FormLabel>
                <FormInput />
                <Button 
                    title='Log In'
                    raised
                    small
                    backgroundColor='#052266'
                    containerViewStyle={{paddingTop: 20}}
                    onPress= {this.props.signIn}/>
                <Button 
                    title='Create New Account'
                    raised
                    small
                    containerViewStyle={{paddingTop: 20}}
                    onPress= {this.props.signUp}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    subheading :{
        textAlign: 'center'
        
    }
});