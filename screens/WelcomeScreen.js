import React from 'react';
import UserLoginForm from '../components/UserLoginForm.js'
import { ScrollView, StyleSheet, Image} from 'react-native';
import { Text} from 'react-native-elements';

export default class WelcomeScreen extends React.Component {
    static navigationOptions ={
        
    };
    render(){
        return(
            <ScrollView style={{backgroundColor: '#C4E691'}}>
                
                <Text h4 style={styles.heading}>Welcome to</Text>
                <Image source={require('../assets/images/GardenGangLogo.png')} 
                style={{width: 250, height:250, alignSelf: 'center'}}/>
                <UserLoginForm signIn={this._signIn} signUp={this._signUp}/>
            </ScrollView>
        );
        
    }
    _signIn= () =>{
        this.props.navigation.navigate('Main');
    };
    _signUp= () =>{
        this.props.navigation.navigate('SignUp');
    }
}
const styles = StyleSheet.create({
    heading :{
        textAlign: 'center',
        paddingTop: 50,

        
    }
});
const SignInStack=({SignIn: WelcomeScreen });