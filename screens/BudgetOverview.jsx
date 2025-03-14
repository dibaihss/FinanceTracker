import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, DATA, FONTS, SIZES, DUMMYEXPENSES } from "../constants";

import { ButtonText, MainText, Button, SubText, Title, Wrapper, ButtonContainer, SubButton, CardContent, Card, CardHeader } from "../constants/styledComponents"
import { PieChart } from 'react-native-chart-kit';
import { useNavigation } from "@react-navigation/native";


export default function BudgetOverview() {
    const navigation = useNavigation();
    const data = [
        {
            name: 'Savings',
            amount: 5000,
            color: COLORS.second,
            legendFontColor: COLORS.white,
            legendFontSize: SIZES.medium,
        },
        {
            name: 'Investments',
            amount: 3000,
            color: COLORS.green,
            legendFontColor: COLORS.white,
            legendFontSize: SIZES.medium,
        },
        {
            name: 'Expenses',
            amount: 2000,
            color: COLORS.cancel,
            legendFontColor: COLORS.white,
            legendFontSize: SIZES.medium,
        },
    ];

    return (
        <Wrapper>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Card>
                    <CardHeader>
                        <View style={styles.headerContent}>
                            <Title>Account Summary</Title>
                            <SubText>Total Balance: €8,000</SubText>
                        </View>
                    </CardHeader>
                    <CardContent>
                        <PieChart
                            data={data}
                            width={Dimensions.get('window').width - 80}
                            height={220}
                            chartConfig={{
                                backgroundColor: 'transparent',
                                backgroundGradientFrom: COLORS.cardBg,
                                backgroundGradientTo: COLORS.cardBg,
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            }}
                            accessor="amount"
                            backgroundColor="transparent"
                            paddingLeft="15"
                            absolute
                            hasLegend={true}
                        />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <View style={styles.headerContent}>
                            <Title>Expenses Overview</Title>
                            <Text style={styles.amount}>-€199.99</Text>
                        </View>
                    </CardHeader>
                    
                    <CardContent>
                        <View style={styles.expenseSection}>
                            <View style={styles.expenseHeader}>
                                <MainText>Fixed Expenses</MainText>
                                <Text style={styles.amount}>-€129.99</Text>
                            </View>
                            <Button onPress={() => navigation.navigate('FixedExpenses')}>
                                <ButtonText>View Fixed Expenses</ButtonText>
                            </Button>
                        </View>

                        <View style={styles.divider} />

                        <View style={styles.expenseSection}>
                            <View style={styles.expenseHeader}>
                                <MainText>Extra Expenses</MainText>
                                <Text style={styles.amount}>-€239.99</Text>
                            </View>
                            <Button onPress={() => navigation.navigate('ExtraExpenses')}>
                                <ButtonText>View Extra Expenses</ButtonText>
                            </Button>
                        </View>
                    </CardContent>
                </Card>
            </ScrollView>
        </Wrapper>
    );
}

const styles = StyleSheet.create({
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    expenseSection: {
        marginVertical: SIZES.small,
    },
    expenseHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SIZES.small,
    },
    amount: {
        fontSize: SIZES.medium,
        fontFamily: FONTS.semiBold,
        color: COLORS.cancel,
    },
    divider: {
        height: 1,
        backgroundColor: COLORS.gray,
        marginVertical: SIZES.medium,
    },
});