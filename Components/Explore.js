import React, { Component } from "react"; 
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import TopNavigation from './TopNavigation';

class Explore extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TopNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: StatusBar.currentHeight,
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default Explore;

