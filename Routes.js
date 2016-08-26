import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Router, Route, TabsRoute, nativeHistory } from 'react-router-native'

import StartPage  from './StartPage.js'
import TimeframePicker from './Timeframe.js'
import NeedWifi from './NeedWifi.js'
import NeedPrivacy from './NeedPrivacy.js'

import NoMatch from './NoMatch.js'

const routes = (
  <Router history={nativeHistory} addressBar>
      {/* <Route path="/" component={StartPage} /> */}
      <Route path="/" component={StartPage}>
        <Route path="timeframe" component={TimeframePicker} />
        <Route path="needwifi" component={NeedWifi} />
        <Route path="needprivacy" component={NeedPrivacy} />
    </Route>
  </Router>
);

export default routes;
