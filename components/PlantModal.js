
import React, { Component } from 'react';
import{AppRegistry, FlatList, StyleSheet, Text, View, Image,
Alert, Platform, Button, TouchableHighlight, Dimensions,Modal, TextInput} from 'react-native';


export default class PlantModal extends React.Component {
   

    render() {
        return (
                <Modal animationType = {"slide"} transparent = {false}
                visible = {this.props.modalVisible}
                onRequestClose = {() =>{ console.log("Modal has been closed.") } }>
                {/*All views of Modal*/}
                {/*Animation can be slide, slide, none*/}
                <View style = {styles.modal}>
                  <Text style = {styles.text}>Modal is open!</Text>
                  <Button title="Click To Close Modal" onPress = {() => {
                      this.setState({ modalVisible:!this.props.modalVisible})}}/>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#c4e691',
      marginTop:30
    },
     modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#c4e691',
        padding: 100
     },
     text: {
        color: '#3f2949',
        marginTop: 10
     }
  });