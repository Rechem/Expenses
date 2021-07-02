import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Dashboard from './Stateless/Dashboard/Dashboard.js'
import Layout from './Hoc/Layout'
import Expenses from './Stateless/Expenses/Expenses'
import { StylesProvider } from '@material-ui/core/styles';
import { createStore } from 'redux';
import ExpensesReducer from './store/reducer'
import { Provider } from 'react-redux';

const store = createStore(ExpensesReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF2E94",
    },
  },
  typography: {
    h3 : {
      fontSize : 28,
      fontWeight: 700,
    },
    body1 : {
      fontSize : 16,
      fontWeight : 500,
      textTransform: 'none',
    },
    body2 : {
      fontSize : 14,
      fontWeight : 500,
      textTransform: 'none',
    }
  }
});

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <ThemeProvider theme = {Theme}>
            <StylesProvider injectFirst>
              <Layout>
                <Dashboard/>
                <Expenses/>
              </Layout>
            </StylesProvider>
          </ThemeProvider>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;