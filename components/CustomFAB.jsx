import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, DATA, FONTS, SIZES } from "../constants";

const FAB = (props) => {
    return (
        <Pressable style={styles.container}
        >
            <TouchableOpacity onPress={props.onPress} style={styles.button}>
                <MaterialCommunityIcons
                    name="plus"
                    size={24}
                    color="white"
                />
            </TouchableOpacity>

        </Pressable>
    );
};

export default FAB;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        position: "absolute",
        bottom: 70,
        right: 40,
    },
    title: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },

    button: {
        backgroundColor: COLORS.second,
        padding: SIZES.small + 5,
        width: 50,
        alignItems: "center",
        borderRadius: SIZES.medium,
    },
    textButton: {
        color: COLORS.white,
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.large,
    },
});