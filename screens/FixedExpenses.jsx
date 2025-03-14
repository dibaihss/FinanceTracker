import React, { useEffect, useRef, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    SafeAreaView,
    Animated,
    Modal,
} from "react-native";
import { COLORS, DATA, FONTS, SIZES, DUMMYEXPENSES } from "../constants";
import RenderExpense from "../components/RenderExpense";
import { StatusBar } from "react-native";
import { FlashList } from "@shopify/flash-list";

import AddFixedExpDia from "../Dialogs/AddFixedExpDia";
import FAB from "../components/CustomFAB";

const Home = () => {
    const [nftsData, setNftsData] = useState(DUMMYEXPENSES);
    const [isDialogVisible, setIsDialogVisible] = useState(false);

    const handleAddExpense = (expense) => {
        const newId = (nftsData.length + 1).toString();
    
        // Create new expense object
        const newExpense = {
            id: newId,
            title: expense.title,
            amount: expense.amount,
            category: expense.category,
            date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
            icon: "cash"
        };

        setNftsData([...nftsData, newExpense])
    };
    
    const moveSearchAnimation = useRef(new Animated.Value(0)).current;

    /**
     * @desc search for nfts data about name
     * @param value : input value
     */


    const NotFoundNFT = () => {
        return (
            <View style={styles.notFoundContainer}>
                <Text style={styles.notFoundText}>Opps... ! </Text>
                <Text style={styles.notFoundText}> Not found the NFT</Text>
            </View>
        );
    };

    const searchAnimationHandler = () => {
        Animated.spring(moveSearchAnimation, {
            toValue: 1,
            friction: 4,
            useNativeDriver: true,
        }).start();
    };
    useEffect(() => {
        searchAnimationHandler();
    }, [searchAnimationHandler]);
    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={{ flex: 1 }}>
                    <Animated.View
                        style={{
                            top: -100,
                            transform: [
                                {
                                    translateY: moveSearchAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, 100],
                                    }),
                                },
                            ],
                        }}
                    >

                        {/* <HomeHeader searchHandler={searchHandler} /> */}
                    </Animated.View>
                    {!nftsData.length ? (
                        <NotFoundNFT />
                    ) : (
                        <FlashList
                            data={nftsData}
                            renderItem={({ item }) => <RenderExpense FixedExpense={item} />}
                            keyExtractor={(item) => item.id}
                            estimatedItemSize={200}
                        />
                    )}
                    <FAB onPress={setIsDialogVisible} />


                </View>

            </TouchableWithoutFeedback>
            <AddFixedExpDia visible={isDialogVisible} onClose={() => setIsDialogVisible(false)} onAdd={handleAddExpense} />
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bg,
        paddingTop: StatusBar.currentHeight + 10,
    },
    notFoundContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: SIZES.xLarge,
    },
    notFoundText: {
        color: COLORS.white,
        fontFamily: FONTS.bold,
        fontSize: SIZES.xLarge,
    },
});