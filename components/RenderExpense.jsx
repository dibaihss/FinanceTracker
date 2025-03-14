import {
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Text
  } from "react-native";
  import React from "react";
  import { COLORS, SIZES } from "../constants";
  import { MaterialCommunityIcons } from '@expo/vector-icons';

  import { useNavigation } from "@react-navigation/native";
  
  const RenderExpense = ({ FixedExpense }) => {
    const navigation = useNavigation();
    const pressHandler = () => {
      navigation.navigate("NFT-details", { FixedExpense });
    };
    return (
      <TouchableWithoutFeedback>
        <SafeAreaView style={styles.container}>
        <View style={styles.expenseItem}>
            <View style={styles.expenseIcon}>
                <MaterialCommunityIcons name={FixedExpense.icon} size={24} color="#666" />
            </View>
            <View style={styles.expenseDetails}>
                <Text style={styles.expenseTitle}>{FixedExpense.title}</Text>
                <Text style={styles.expenseCategory}>{FixedExpense.category}</Text>
            </View>
            <View style={styles.expenseAmount}>
                <Text style={styles.amount}>-${FixedExpense.amount}</Text>
                <Text style={styles.date}>{FixedExpense.date}</Text>
            </View>
        </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  };
  
  export default RenderExpense;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.cardBg,
      borderRadius: SIZES.medium,
      marginBottom: SIZES.xLarge,
      marginVertical: SIZES.small - 5,
      marginHorizontal: 14,
      padding: 12,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
  },
  expenseItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
  },
  expenseIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#f5f5f5',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
  },
  expenseDetails: {
      flex: 1,
  },
  expenseTitle: {
      fontSize: 16,
      color: '#333',
      marginBottom: 4,
  },
  expenseCategory: {
      fontSize: 14,
      color: '#666',
  },
  expenseAmount: {
      alignItems: 'flex-end',
  },
  amount: {
      fontSize: 16,
      fontWeight: '600',
      color: '#FF5252',
      marginBottom: 4,
  },
  date: {
      fontSize: 12,
      color: '#999',
  },
  });