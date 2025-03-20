import { View, Text, StyleSheet, TextInput, Image, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, MainText, SubText, Title, Wrapper } from '../constants/styledComponents'
import { COLORS, DATA, FONTS, SIZES, DUMMYEXPENSES } from "../constants";
import nft08 from "../assets/images/nft08.jpg";
import nft06 from "../assets/images/nft06.jpg";
import nft07 from "../assets/images/nft07.jpg";
import nft09 from "../assets/images/nft09.jpg";
import nft01 from "../assets/images/nft01.jpg";
import nft02 from "../assets/images/nft02.jpg";
import nft03 from "../assets/images/nft03.jpg";
import nft04 from "../assets/images/nft04.jpg";
import nft05 from "../assets/images/nft05.jpg";

export default function Exercise2() {

    const [gameImages, setGameImages] = useState([])

    var images =
        [nft03,
            nft06,
            nft08,
            nft04,
            nft01,
            nft02];

    var prevEle = "";
    var prev = 0
    var neededImages = []

    const getNeededNumbersOfImages = () => {
        const randomElement = images[Math.floor(Math.random() * images.length)];

        images = images.filter(item => {
            return randomElement.uri !== item.uri
        })

        neededImages.push(randomElement)
        console.log(neededImages)
    }
    const imageData = [
        { id: "1", image: '' },
        { id: "2", image: '' },
        { id: "3", image: '' },
        { id: "5", image: '' },
        { id: "6", image: '' },
        { id: "7", image: '' },
        { id: "8", image: '' },
        { id: "9", image: '' },
        // { id: "10", image: getRandomImage() },
    ];

    for (let i = 0; i < imageData.length / 2; i++) getNeededNumbersOfImages()


    var neededImagesCopie = neededImages
    var ultimateNeededImage = []
    for (let i of neededImages) {
        const randomElement = neededImages[Math.floor(Math.random() * neededImages.length)];

        neededImages = neededImages.filter(item => {
            return randomElement.uri !== item.uri
        })
        ultimateNeededImage.push(randomElement)
    }

    ultimateNeededImage.push(...neededImagesCopie)
    console.log(ultimateNeededImage)


    imageData.forEach((item, index) => {
        item.image = ultimateNeededImage[index];
    });

    console.log(imageData)


    const RenderItem = ({ item }) => {

        return (
            <View style={styles.imageCard}>
                <Image style={styles.image} source={item.image} />
            </View>
        );
    };

    return (
        <Wrapper>
            <ScrollView>
                <Title>Exercise</Title>
                <Card>
                    <CardHeader>
                        <MainText>Guessing Game</MainText>
                        <SubText>a random word would be generated and you guess it!</SubText>
                    </CardHeader>
                    <CardContent>
                        <View style={styles.container}>
                            <FlatList
                                data={imageData}
                                renderItem={RenderItem}
                                keyExtractor={(item) => item.id}
                                numColumns={3}
                                contentContainerStyle={styles.imageContainer}
                            />
                        </View>
                    </CardContent>
                </Card>
            </ScrollView>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SIZES.small + 10,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: COLORS.bg,
    },
    imageContainer: {
        marginTop: 50,
        top: -SIZES.medium,
        display: "flex",
        gap: SIZES.medium,
    },
    imageCard: {
        borderRadius: SIZES.medium,
        padding: SIZES.small,
        backgroundColor: COLORS.cardBg,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: SIZES.medium,
    },
    textContainer: {
        margin: SIZES.small,
        padding: SIZES.small,
        marginVertical: SIZES.xLarge + 6,
    },
    mainText: {
        fontFamily: FONTS.bold,
        fontSize: SIZES.xLarge + 5,
        textAlign: "center",
        color: COLORS.white,
    },
    subText: {
        fontFamily: FONTS.light,
        textAlign: "center",
        marginTop: SIZES.large,
        color: COLORS.gray,
    },
    buttonContainer: {
        position: "absolute",
        bottom: SIZES.medium + 10,
        gap: SIZES.medium, // Add gap between buttons
        marginVertical: SIZES.medium,
    },
    button: {
        backgroundColor: COLORS.second,
        padding: SIZES.small + 5,
        width: 240,
        alignItems: "center",
        borderRadius: SIZES.medium,
    },
    textButton: {
        color: COLORS.white,
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.large,
    },
});