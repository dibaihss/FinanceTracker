// SimpleDialog.js
import React, {useState} from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Pressable, TextInput } from 'react-native';
import { COLORS, DATA, FONTS, SIZES } from "../constants";

const AddFixedExpDia = ({ visible, onClose }) => {


  return (

    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.dialog}>
          <Text style={[styles.mainText, { padding: 0 }]}>Add Fixed Expenses Dialog</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Title"
              placeholderTextColor={COLORS.gray}
              style={styles.Input}
              onChangeText={() => { }}
            />

            <TextInput
              placeholder="Amount"
              placeholderTextColor={COLORS.gray}
              style={styles.Input}
              onChangeText={() => { }}
            />

            <TextInput
              placeholder="Category"
              placeholderTextColor={COLORS.gray}
              style={styles.Input}
              onChangeText={() => { }}
            />
          </View>
          <Pressable
            style={[styles.button]}
            onPress={onClose}>
            <Text style={styles.textButton}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>

  );
};

export default AddFixedExpDia;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialog: {
    width: '80%', // Increased width for better readability
    maxWidth: 500, // Maximum width for larger screens
    backgroundColor: COLORS.bg,
    borderRadius: 20,
    padding: SIZES.medium,
    elevation: 5,
    shadowColor: '#000',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputContainer: {
    width: '100%',
    paddingVertical: SIZES.medium,
  },
  Input: {
    width: '100%',
    color: COLORS.white,
    marginVertical: SIZES.small,
    padding: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: SIZES.small,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  button: {
    backgroundColor: COLORS.second,
    padding: SIZES.small + 5,
    width: '80%', // Relative to parent
    maxWidth: 300, // Maximum width
    alignItems: "center",
    borderRadius: SIZES.medium,
    marginTop: SIZES.medium,
  },
  textButton: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
  },
  mainText: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large + 5,
    textAlign: "center",
    color: COLORS.white,
  },
  subText: {
    fontFamily: FONTS.light,
    textAlign: "center",
    marginTop: SIZES.large,
    color: COLORS.gray,
  },
});