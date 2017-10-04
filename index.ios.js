/**
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

import { composeWithDevTools } from 'remote-redux-devtools'
const composeEnhancers = composeWithDevTools({ name: 'GithubAccount', realtime: true, port: 8000, sendTo: "http://localhost:8000" });

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(epicMiddleware)
  )
)

console.log('STORE', store.getState())

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
