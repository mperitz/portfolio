'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import store from './store'
import App from './components/App'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Projects from './components/Projects'

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRedirect to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/projects" component={Projects} />
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('main')
)
