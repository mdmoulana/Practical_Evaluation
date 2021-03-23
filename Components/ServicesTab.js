import React, { Component } from "react"; 
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
  FlatList,
  Image,
} from "react-native";

class ServicesTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      dataSource: null,

    };
  }

  componentDidMount() {
    return fetch("https://stage-api.serw.io/v1/services")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          dataSource: responseJson.services,

        });
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
                <Image source={{uri: item.image}} style={styles.baseImage} /> 
              <Text style={styles.GridViewHeaderText}>{item.category.displayName}</Text>
              <Text style={styles.GridViewText}>Duration: {item.durationMinutes} mins</Text>
              <Text style={styles.GridViewText}>{item.expert.name}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index}
        //   numColumns={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: "center",
    // alignItems: "center",
    margin: 10,
    paddingTop: 15,
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
    // alignItems: "center",
    flex: 1,
    padding: 10,
    margin: 20,
    height: 250,
    backgroundColor: "gray",
    borderRadius: 8,
  },
  GridViewText: {
    padding: 5,
    fontSize: 12,
    // justifyContent: 'center',
    color: "black",
  },
  GridViewHeaderText: {
    padding: 5,
    fontSize: 16,
    // justifyContent: 'center',
    color: "black",
    fontWeight: 'bold',
  },
  baseImage: {
    //   alignItems: 'center',
    //   justifyContent: 'center',
      width: '100%',
      height: 100,
      resizeMode: 'cover',
  }
});

export default ServicesTab;

