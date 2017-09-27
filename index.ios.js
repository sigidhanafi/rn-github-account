/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import 'rxjs'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/Reducers'

import { createEpicMiddleware } from 'redux-observable'
import { rootEpic } from './src/Actions'

const epicMiddleware = createEpicMiddleware(rootEpic)
const store = createStore(rootReducer, applyMiddleware(epicMiddleware))

import Github from './src/Containers/Github'

export default class GithubAccount extends Component {
  render() {
    return (
      <Provider store={store}>
        <Github />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('GithubAccount', () => GithubAccount);
