import React from 'react';
import { connect } from 'react-redux';
import { AuthTabs, RootStack } from './config/routes';
import { initializeWithDataFromStorage } from './actions/auth';
import SpinnerScreen from './screens/spinner';
import { currentUserLoadedSelector, currentUserAuthTokenSelector } from './selectors';

class App extends React.Component {
  componentWillMount() {
    this.props.initialize();
  }

  render() {
    console.disableYellowBox = true;
    if (this.props.isLoaded) {
      if (this.props.authToken) {
        return (<RootStack />);
      }
      return (<AuthTabs />);
    }
    return (
      <SpinnerScreen />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  initialize: () => dispatch(initializeWithDataFromStorage()),
});

const mapStateToProps = state => ({
  authToken: currentUserAuthTokenSelector(state),
  isLoaded: currentUserLoadedSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
