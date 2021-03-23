import "react-native-gesture-handler"; 
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Home";
import Explore from "./Explore";
import Profile from "./Profile";
import AntDesign from "react-native-vector-icons/AntDesign";


const Tab = createBottomTabNavigator();

class Base extends Component {

    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen} options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name="home" color={color} size={size} />
                        ),
                         }} />
                    <Tab.Screen name="Explore" component={Explore} options={{
                        tabBarLabel: 'Explore',
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name="search1" color={color} size={size} />
                        ),
                         }}/>
                    <Tab.Screen name="Profile" component={Profile} options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name="user" color={color} size={size} />
                        ),
                         }} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }

}

export default Base;

