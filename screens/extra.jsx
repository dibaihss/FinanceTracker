import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

const BudgetOverview = ({ route }) => {
  // Example data - replace with your actual data management
  const budgetStats = {
    totalBudget: 5000,
    fixedExpenses: 2500,
    extraExpenses: 800,
    currentAmount: 1700,
    savingsGoal: 1000,
  };

  const BudgetCard = ({ title, amount, color }) => (
    <View style={[styles.card, { borderLeftColor: color }]}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardAmount}>€{amount.toFixed(2)}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Budget Overview</Text>
          <Text style={styles.subtitle}>
            {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <BudgetCard 
            title="Total Budget"
            amount={budgetStats.totalBudget}
            color={COLORS.second}
          />
          <BudgetCard 
            title="Fixed Expenses"
            amount={budgetStats.fixedExpenses}
            color={COLORS.red}
          />
          <BudgetCard 
            title="Extra Expenses"
            amount={budgetStats.extraExpenses}
            color={COLORS.orange}
          />
          <BudgetCard 
            title="Current Amount"
            amount={budgetStats.currentAmount}
            color={COLORS.green}
          />
          <BudgetCard 
            title="Savings Goal"
            amount={budgetStats.savingsGoal}
            color={COLORS.blue}
          />
        </View>

        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTitle}>Monthly Summary</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Total Expenses:</Text>
            <Text style={styles.summaryValue}>
              €{(budgetStats.fixedExpenses + budgetStats.extraExpenses).toFixed(2)}
            </Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Remaining Budget:</Text>
            <Text style={styles.summaryValue}>
              €{(budgetStats.totalBudget - budgetStats.fixedExpenses - budgetStats.extraExpenses).toFixed(2)}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  header: {
    padding: SIZES.medium,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.cardBg,
  },
  title: {
    fontSize: SIZES.xLarge,
    fontFamily: FONTS.bold,
    color: COLORS.white,
  },
  subtitle: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.regular,
    color: COLORS.gray,
    marginTop: 5,
  },
  statsContainer: {
    padding: SIZES.medium,
  },
  card: {
    backgroundColor: COLORS.cardBg,
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
    marginBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeftWidth: 4,
  },
  cardTitle: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
  },
  cardAmount: {
    fontSize: SIZES.large,
    fontFamily: FONTS.bold,
    color: COLORS.white,
  },
  summaryContainer: {
    backgroundColor: COLORS.cardBg,
    margin: SIZES.medium,
    padding: SIZES.medium,
    borderRadius: SIZES.medium,
  },
  summaryTitle: {
    fontSize: SIZES.large,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    marginBottom: SIZES.medium,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SIZES.small,
  },
  summaryLabel: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.regular,
    color: COLORS.gray,
  },
  summaryValue: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
  },
});

export default BudgetOverview;