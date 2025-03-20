import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, MainText, SubText, Title, Wrapper } from '../constants/styledComponents'
import { COLORS, DATA, FONTS, SIZES, DUMMYEXPENSES } from "../constants";

export default function Excise() {
    const randomWord = "stop"

    const [board, setBoard] = React.useState(
        Array(4).fill().map(() => Array(4).fill(''))
    );
    const [activeRow, setactiveRow] = useState(0)
    const [attempts, setAttempts] = useState(0)

    const [achivedAttempts, setAchivedAttempts] = useState(0)



    const checkIfWin = (text, colIndex) => {
        if (text.toUpperCase() === randomWord.charAt(colIndex).toLocaleUpperCase()) {

            if (attempts === achivedAttempts) {
                if (achivedAttempts >= 3) {
                   console.log("Won!!!!")
                   return null
                } else {
                    setAchivedAttempts(achivedAttempts + 1)
                }
            }
            console.log(randomWord.charAt(colIndex))

        } else {

        }
    }

    const handleInput = (text, rowIndex, colIndex) => {
        const newBoard = [...board];
        newBoard[rowIndex][colIndex] = text.toUpperCase();

        checkIfWin(text, colIndex);
        setBoard(newBoard);
        if (attempts >= 3) {

            setactiveRow(activeRow + 1)
            setAttempts(0)
            return null
        } else {
            setAttempts(attempts + 1)
        }

    };
    const Board = () => {
        return (
            <View style={styles.board}>
                {board.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.line}>
                        {row.map((letter, colIndex) => (
                            <View key={`${rowIndex}-${colIndex}`} style={styles.field}>
                                <TextInput
                                    style={[styles.input, activeRow !== rowIndex ? styles.inactiveField : styles.activeField]}
                                    maxLength={1}
                                    value={letter}
                                    editable={activeRow === rowIndex}
                                    onChangeText={(text) => handleInput(text, rowIndex, colIndex)}
                                />
                            </View>
                        ))}
                    </View>
                ))}
            </View>
        );
    };

    return (
        <Wrapper>
            <Title>Exercise</Title>
            <Card>
                <CardHeader>
                    <MainText>Guessing Game</MainText>
                    <SubText>a random word would be generated and you guess it!</SubText>
                </CardHeader>
                <CardContent>
                    <Board />
                </CardContent>
            </Card>
          
        </Wrapper>
    );
}

const styles = StyleSheet.create({
    board: {
        width: '100%',
        gap: SIZES.small,
        alignItems: 'center',
    },
    line: {
        flexDirection: 'row',
        gap: SIZES.small,
        justifyContent: 'center',
    },
    field: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.white,
        borderWidth: 2,
        borderColor: COLORS.primary,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        fontSize: SIZES.medium,
        fontFamily: FONTS.regular,
        color: COLORS.primary
    },
    activeField: {
        borderColor: COLORS.primary,
        backgroundColor: COLORS.white,
    },
    inactiveField: {
        borderColor: COLORS.gray,
        backgroundColor: COLORS.gray,
    }
})