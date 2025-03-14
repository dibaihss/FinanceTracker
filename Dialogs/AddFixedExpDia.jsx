// SimpleDialog.js
import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Pressable, TextInput } from 'react-native';
import { COLORS, DATA, FONTS, SIZES } from "../constants";

const AddFixedExpDia = ({ visible, onClose, onAdd }) => {

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleAdd = () => {
    if (title && amount && category) {
      onAdd({
        title,
        amount: parseFloat(amount),
        category,
      });
      setTitle('');
      setAmount('');
      setCategory('');
      onClose();
    } else {
      throw console.error("complete the dialog");

    }
  };

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
              value={title}
              onChangeText={setTitle}
            />

            <TextInput
              placeholder="Amount"
              placeholderTextColor={COLORS.gray}
              keyboardType="decimal-pad"
              style={styles.Input}
              value={amount}
              onChangeText={setAmount}
            />

            <TextInput
              placeholder="Category"
              placeholderTextColor={COLORS.gray}
              style={styles.Input}
              value={category}
              onChangeText={setCategory}
            />
          </View>
          <View style={styles.ButtonContainer}>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: COLORS.cancel }]}
              onPress={onClose}>
              <Text style={styles.textButton}>CLOSE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button]}
              onPress={handleAdd}>
              <Text style={styles.textButton}>ADD</Text>
            </TouchableOpacity>
          </View>

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
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: SIZES.small,
    gap: SIZES.small
  },
  button: {
    backgroundColor: COLORS.second,
    padding: SIZES.small + 5,
    width: '50%', // Relative to parent
    maxWidth: 300, // Maximum width
    alignItems: "center",
    borderRadius: SIZES.medium,
    marginTop: SIZES.medium,
  },
  textButton: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small,
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