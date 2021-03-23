import "react-native-gesture-handler"; 
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ExpertsTab from "./ExpertsTab";
import ServicesTab from "./ServicesTab";

const Tab = createMaterialTopTabNavigator();

class TopNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Experts" component={ExpertsTab} />
          <Tab.Screen name="Services" component={ServicesTab} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: StatusBar.currentHeight,
  },
});

export default TopNavigation;

