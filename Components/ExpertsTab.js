
import React, { Component } from "react"; 
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Platform,
  StatusBar,
  Image,
} from "react-native";

class ExpertsTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      dataSource: null,
    };
  }

  componentDidMount() {
    return fetch("https://stage-api.serw.io/v1/experts") 
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            loading: false,
            dataSource: responseJson.experts,
          }
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.ActivityIndicator_Style}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View style={styles.GridViewBlockStyle}>
              <Image style={styles.baseImage} source={{uri: item.profilePic}} />
              <Text style={styles.GridViewText}>{item.profileId}</Text>
              <Text style={styles.GridViewText}>{item.name}</Text>
              <Text style={styles.GridViewText}>Country: {item.country}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index}
          numColumns={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    margin: 10,
    paddingTop: 15,
    // justifyContent: "center",
  },
  ActivityIndicator_Style: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  GridViewBlockStyle: {
    // justifyContent: "center",
    alignItems: "center",
    flex: 1,
    margin: 15,
    height: 100,
    backgroundColor: 'black',
    borderRadius: 8,
  },
  GridViewText: {
    // padding: ,
    fontSize: 12,
    // justifyContent: 'center',
    color: 'white'
  },
  baseImage: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
  }
});

export default ExpertsTab;

