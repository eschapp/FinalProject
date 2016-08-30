import React from 'react'
import { AppRegistry } from 'react-native'

import configureStore from './app/store/configureStore'
const store = configureStore()

import TabsRootContainer from './app/containers/tabsRootContainer'
import { Provider } from 'react-redux'

const Project = () => (
  <Provider store={store}>
    <TabsRootContainer />
  </Provider>
)
AppRegistry.registerComponent('Project', () => Project)
