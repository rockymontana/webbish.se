// React and Redux and Base Application stuff
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'

// Components
import TopNavigation from './TopNavigation'
import Home from './Home'

// Theme stuff
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#2a2a2a',
    primary2Color: '#f9f9f9',
    accent1Color:  '#e40079',
    accent2Color:  '#c3c3c3',
    accent3Color:  'rgba(120, 120, 120, 0.7)'
  },
})

function getStyles() {
  let styles = {
    content: {
      common: {
        color: muiTheme.palette.primary1Color,
        width: '49%',
        position: 'absolute',
        top: 45,
        bottom: 0,
        padding: 10
      },
      left: {},  // merged with styles.content.common on #L48-57
      right: {}  // merged with styles.content.common on #L48-57
    },
    layout: {
      common : {
        backgroundColor: 'none',
        color: muiTheme.palette.primary1Color,
        width: '49%',
        position: 'absolute',
        top: 45,
        bottom: 0,
        padding: 10
      },
      left: {},  // merged with styles.content.common on #L48-57
      right: {}  // merged with styles.content.common on #L48-57
    }
  }

  return Object.assign(styles, {
    layout: {
      left: Object.assign({ left: 40 }, styles.layout.common),
      right: Object.assign({ right: 10 }, styles.layout.common),
    },
    content: {
      left: Object.assign({ left: 40 }, styles.content.common),
      right: Object.assign({ right: 10 }, styles.content.common),
    },
  });
}

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.styles = getStyles()
    console.log(this.styles.layout)
  }

  getChildContext() {
    return {
      muiTheme: getMuiTheme(muiTheme)
    }
  }

  render() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <TopNavigation palette={muiTheme.palette} />
            <div className="container">
              <div className="column-left" style={this.styles.content.left}>
                {this.props.children || <Home />}
              </div>
              <div style={this.styles.content.right}>

              </div>
            </div>
          </div>
        </MuiThemeProvider>
    )
  }

}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    childContextTypes : {
      muiTheme: React.PropTypes.object
    },
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
