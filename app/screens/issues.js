import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView } from 'react-native';
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
        key={record.id}
        amount={record.amount}
        id={record.id}
        navigation={this.props.navigation}
        chooseIssue={this.props.chooseIssue}
      />;
    });
    return (
      <ScrollView>
        {listOfIssues}
      </ScrollView>
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
