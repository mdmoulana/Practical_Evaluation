import "react-native-gesture-handler"; 
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Base from './Base';
import DrawerComp from './DrawerComp';

class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => this.props.navigation.openDrawer()}
        >
          <Entypo name="menu" size={50} color="black" />
        </TouchableOpacity>
        <Base />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        padding: 10,
        flex: 1,
    },
})

export default MainScreen;

