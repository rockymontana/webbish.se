import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import Code from '../components/Code'
import Contact from '../components/Contact'
import Friends from '../components/Friends'
import Home from '../components/Home'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

// Theme stuff
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Tap stuff
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let initialState = {}
let store = configureStore(initialState)

render(
  <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/code" component={Code}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/friends" component={Friends}/>
        </Route>
      </Router>
  </Provider>,
  document.getElementById('app')
)
