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
import { COLORS, DATA, FONTS, SIZES } from "../constants";
import NFTCard from "../components/NFTCard";
import { StatusBar } from "react-native";
import { FlashList } from "@shopify/flash-list";

import AddFixedExpDia from "../Dialogs/AddFixedExpDia";
import FAB from "../components/CustomFAB";

const Home = () => {
    const [nftsData, setNftsData] = useState(DATA);
    const [newFixedExp, setFixedExp] = useState("");
    const [isDialogVisible, setIsDialogVisible] = useState(false);

    const handleAddExpense = (expense) => {
        console.log('New expense:', expense);
        // Add your logic here to save the expense
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

                        {/* <TextInput
                                    placeholder="Search by NFT name"
                                    placeholderTextColor={COLORS.white}
                                    style={{ flex: 1, color: COLORS.white, marginLeft: 10, padding: 8, marginVertical: 10 }}
                                    onChangeText={setFixedExp}
                                    value={newFixedExp}
                                    keyboardType="default"
                                 
                                  /> */}
                        {/* <HomeHeader searchHandler={searchHandler} /> */}
                    </Animated.View>
                    {!nftsData.length ? (
                        <NotFoundNFT />
                    ) : (
                        <FlashList
                            data={nftsData}
                            renderItem={({ item }) => <NFTCard NFTData={item} />}
                            keyExtractor={(item) => item.id}
                            estimatedItemSize={200}
                        />
                    )}
                    <FAB onPress={setIsDialogVisible} />


                </View>

            </TouchableWithoutFeedback>
            <AddFixedExpDia visible={isDialogVisible} onClose={() => {
                setIsDialogVisible(false);
            }} />
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