import React from 'react';
import { ScrollView, StyleSheet , Button, FlatList, Text, Alert} from 'react-native';
import PlantList from '../components/PlantList.js';
import PlantModal from '../components/PlantModal.js';

export default class GardenScreen extends React.Component {
  static navigationOptions = {
    title: 'My Garden',
  };

  state = {
    modalVisible: false
  }

  render() {
    return (
      <ScrollView style={styles.container}>
           <Button
       onPress = {() => {this.setState({ modalVisible: true})}}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />

      <PlantList />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
