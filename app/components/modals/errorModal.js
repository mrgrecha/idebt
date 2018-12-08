import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button
} from "react-native";
import Modal from "react-native-modal";

const ErrorModal = ({visible, closeModal, errorText, chooseIssue}) => {
  return (
    <View style={styles.container}>
      <Modal
        isVisible={visible}
        onSwipe={() => closeModal()}
        swipeDirection="left"
      >
        <View style={styles.modalContent}>
          <Text>{errorText}</Text>
          <Button
            title="Close"
            onPress={() => { closeModal() }}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ErrorModal;

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
