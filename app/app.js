import React from 'react';
import { connect } from 'react-redux';
import { AuthTabs, RootStack } from './config/routes';
import { initializeWithDataFromStorage } from './actions/currentUser';
import SpinnerScreen from './screens/spinner';
import { currentUserLoadedSelector, currentUserAuthTokenSelector } from './selectors';

class App extends React.Component {
  componentWillMount() {
    this.props.initialize();
  }

  render() {
    // Temp fix before loading from storage
    if (this.props.isLoaded) {
      // TO DO Investigate why we cannot do it like const navigator = this.props.isLogged ? <RootStack/> : <AuthTabs/>
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
