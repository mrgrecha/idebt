
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import Modal from "react-native-modal";
import { closeDebtsErrorModal } from '../../actions/debts';
import { connect } from 'react-redux';
import { debtsErrorModalVisibleSelector } from '../../selectors/debts';

class ErrorModal extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Modal
          isVisible={this.props.visible}
          onSwipe={() => this.props.closeModal()}
          swipeDirection="left"
        >
          <View style={styles.modalContent}>
            <Text>Input text!</Text>
            <Button
              title="Close"
              onPress={() => {
                this.props.closeModal();
              }}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  }
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeDebtsErrorModal()),
});

const mapStateToProps = state => ({
  visible: debtsErrorModalVisibleSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModal);
