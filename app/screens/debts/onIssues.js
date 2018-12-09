import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { debtsIOweSelector, visibleErrorModal, textInErrorModal } from '../../selectors';
import { fetchDebtsIOwe, repayDebt } from '../../actions/debts';
import IOweDebt from '../../components/debts/iOwe.js';
import ErrorModal from '../../components/modals/errorModal';
import { closeErrorModal } from '../../actions/ui';

class OnIssueDebtsScreen extends Component {
  componentWillMount() {
    this.props.fetchDebtsIOwe();
  }

  render() {
    const listOfDebts= this.props.debtsIOwe.map((record) => {
      return <IOweDebt
        key={record.id}
        created_at={record.created_at}
        id={record.id}
        credit_percentage={record.credit_percentage}
        current_size={record.current_size}
        repayDebt={this.props.repayDebt}
      />;
    });
    return (
      <ScrollView>
        <ErrorModal
          visible={this.props.visibleErrorModal}
          errorText={this.props.errorText}
          closeModal={this.props.closeModal}
        />
        {listOfDebts}
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchDebtsIOwe: () => dispatch(fetchDebtsIOwe()),
  repayDebt: id => dispatch(repayDebt(id)),
  closeModal: () => dispatch(closeErrorModal()),
});

const mapStateToProps = state => ({
  debtsIOwe: debtsIOweSelector(state),
  visibleErrorModal: visibleErrorModal(state),
  errorText: textInErrorModal(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(OnIssueDebtsScreen);
