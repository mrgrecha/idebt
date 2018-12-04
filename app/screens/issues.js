import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { fetchIssues, chooseIssue } from '../actions/issues';
import Issue from '../components/issues/issue';
import { issuesSelector } from '../selectors';

class IssuesScreen extends Component {

  componentWillMount() {
    this.props.fetchIssues();
  }

  render() {
    const listOfIssues = this.props.issues.map((record) => {
      return <Issue
        amount={record.amount}
        id={record.id}
        navigation={this.props.navigation}
        chooseIssue={this.props.chooseIssue}
      />;
    });
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Issues Screen</Text>
        {listOfIssues}
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchIssues: () => dispatch(fetchIssues()),
  chooseIssue: id => dispatch(chooseIssue(id)),
});

const mapStateToProps = state => ({
  issues: issuesSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(IssuesScreen);
