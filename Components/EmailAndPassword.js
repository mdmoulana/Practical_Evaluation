import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

class EmailAndPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      terms: false,
    };
  }

  render() {
    return (

      <View style={styles.container}>
        <StatusBar barStyle= 'dark-content' />

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          autoCapitalize="none"
          value={this.state.email}
          onChangeText={email => this.setState({email: email})}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={this.state.password}
          onChangeText={pass => this.setState({password: pass})}
        />
        <TouchableOpacity style={styles.loginBtn}>
            <Text style={{fontSize: 20}}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight,
        padding: 10,
    },
    input: {
        width: 300,
        fontSize: 20,
        height: 50,
        padding: 15,
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
    },
    loginBtn: {
        borderRadius: 5,
        paddingHorizontal :25,
        borderWidth: 1,
        padding: 10,
        height: 50,
        margin: 20,

    }

})

export default EmailAndPassword;
