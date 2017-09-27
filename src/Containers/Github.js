import React from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

class Github extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        username: ''
      }
    }
  
    componentDidMount () {
    }
  
    _onChangeUser = (username) => {
      this.setState({ username })
    }
  
    render() {
      const { username } = this.state
      return (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.welcome}>
              Github Account
            </Text>
            <Text style={styles.instructions}>
              To get started, fill text input with your github username!
            </Text>
          </View>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder={'username'}
              autoCorrect={false}
              autoCapitalize={'none'}
              onChangeText={(username) => this._onChangeUser(username)}
              value={username}
            />
            <Button
              title='Go!'
              onPress={() => this.props.fetchUser(username)}
            />
          </View>
          <View style={styles.bodyContainer}>
          </View>
        </View>
      );
    }
  }
  
  const mapStateToProps = (state) => ({
    github: state.github
  })
  
  const mapDispatchToProps = (dispatch) => ({
    fetchUser: (username) => dispatch({ type: 'REQUEST', username })
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Github)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    margin: 10
  },
  formContainer: {
    flex: 1
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#000000',
    margin: 20,
    width: 100,
    textAlign: 'center'
  },
  bodyContainer: {
    flex: 4
  }
});
