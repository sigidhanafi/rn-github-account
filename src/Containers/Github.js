import React from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image
} from 'react-native';

import { request } from '../Actions/Github'

class Github extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        fetching: false,
        user: null,
        username: 'sigidhanafi'
      }
    }
  
    componentDidMount () {
    }

    componentWillReceiveProps (newProps) {
      const { github } = newProps
      const { fetching, data } = github
      if (this.state.fetching !== fetching) {
        this.setState({
          fetching,
          user: data
        })
      }
    }
  
    _onChangeUser = (username) => {
      this.setState({ username })
    }

    _renderUser = () => {
      const { user } = this.state
      return (
        <View style={styles.userContainer}>
          <View style={styles.leftContainer}>
            <View>
              <Image
                source={{ uri: user.avatar_url}}
                style={{ width: 150, height: 150 }} />
            </View>
          </View>
          <View style={styles.rightContainer}>
            <View>
              <Text>{user.name && user.name}</Text>
              <Text>{user.location && user.location}</Text>
              <Text>{user.bio && user.bio}</Text>
              <Text>{user.blog && user.blog}</Text>
            </View>
          </View>
        </View>
      )
    }
  
    render() {
      const { username, user, fetching } = this.state
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
            { user && this._renderUser() }
          </View>
        </View>
      );
    }
  }
  
  const mapStateToProps = (state) => ({
    github: state.github
  })
  
  const mapDispatchToProps = (dispatch) => ({
    fetchUser: (username) => dispatch(request(username))
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Github)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center'
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
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
  },
  userContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  leftContainer: {
    flex: 1,
    padding: 10
  },
  rightContainer: {
    flex: 1,
    padding: 10
  }
});
