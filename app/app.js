import React from 'react';
import { AuthTabs } from './config/routes';
import { RootStack } from './config/routes';
import { fetchDataFromStorage } from './helpers/storage';
import SpinnerScreen from './screens/spinner';
import { connect } from 'react-redux';
import { currentUserLoadedSelector, currentUserLoggedSelector } from './selectors';
class App extends React.Component {
  componentDidMount() {
    // TO DO Dima add initializing data from async storage
    // TO DO Dima add loading from storage init data
    // fetchDataFromStorage('isLogged').then((e) => {
    //   this.setState({ isLoaded: true,
    //                   navigator: e ? <RootStack/> : <AuthTabs/>
    //                 });
    // });
  };

  render() {
    // Temp fix before loading from storage
    if (!this.props.isLoaded) {
      // TO DO Investigate why we cannot do it like const navigator = this.props.isLogged ? <RootStack/> : <AuthTabs/>
      if (this.props.isLogged) {
        return(<RootStack/>)
      }
      else {
        return(<AuthTabs/>)
      }
    }
    else {
      return (
        <SpinnerScreen/>
      )
    }
  };

};

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({
  isLogged: currentUserLoggedSelector(state),
  isLoaded: currentUserLoadedSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
