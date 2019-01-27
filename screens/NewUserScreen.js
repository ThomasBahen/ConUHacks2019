import React from 'react';
import {FormLabel, FormInput, Text, Button} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';
export default class NewUserScreen extends React.Component {
    static navigationOptions={
        
    };
    render(){
        return(
            <View>
                <Text h4 style={styles.subheading}> Join our Garden! </Text>
                <FormLabel> First Name </FormLabel>
                <FormInput/>
                <FormLabel> Last Name </FormLabel>
                <FormInput/>
                <FormLabel> Username </FormLabel>
                <FormInput/>
                <FormLabel> Password </FormLabel>
                <FormInput />
                <Button 
                    title='Create Account'
                    raised
                    small
                    onPress= {this._createAccount}
                    backgroundColor='#C4E691'
                    textStyle={{color:'#052266'}}
                    style={{paddingTop:50}}
                />
            </View>
        );

    }
    _createAccount= () =>{
        this.props.navigation.navigate('Main');
    }
}
const styles = StyleSheet.create({
    subheading :{
        textAlign: 'center',
        paddingTop:50,
        paddingBottom:20,
        color: '#052266'
    }
});
const SignUpStack= ({SignUp: NewUserScreen });