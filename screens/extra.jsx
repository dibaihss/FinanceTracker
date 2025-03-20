// import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { Card, CardContent, CardHeader, MainText, SubText, Title, Wrapper } from '../constants/styledComponents'
// import { COLORS, DATA, FONTS, SIZES, DUMMYEXPENSES } from "../constants";

// export default function Excise() {
//     const randomWord = "stop"

//     const [board, setBoard] = React.useState(
//         Array(4).fill().map(() => Array(4).fill(''))
//     );
//     const [activeRow, setActiveRow] = useState(0);
//     const [attempts, setAttempts] = useState(0);

//     const checkWord = (rowIndex) => {
//         const currentGuess = board[rowIndex].join('').toLowerCase();
        
//         if (currentGuess === randomWord) {
//             Alert.alert('Success!', 'You found the word!');
//             return true;
//         }
        
//         if (attempts === 3) {
//             Alert.alert('Game Over!', `The word was: ${randomWord}`);
//         }
//         return false;
//     }

//     const handleInput = (text, rowIndex, colIndex) => {
//         if (rowIndex !== activeRow || attempts >= 4) return;

//         const newBoard = [...board];
//         newBoard[rowIndex][colIndex] = text.toUpperCase();
//         setBoard(newBoard);

//         // Check if row is complete
//         const isRowFilled = newBoard[rowIndex].every(cell => cell !== '');
//         if (isRowFilled) {
//             const isCorrect = checkWord(rowIndex);
//             if (!isCorrect) {
//                 setAttempts(prev => prev + 1);
//                 setActiveRow(prev => prev + 1);
//             }
//         }
//     };

//     const Board = () => {
//         return (
//             <View style={styles.board}>
//                 {board.map((row, rowIndex) => (
//                     <View key={rowIndex} style={styles.line}>
//                         {row.map((letter, colIndex) => (
//                             <View 
//                                 key={`${rowIndex}-${colIndex}`} 
//                                 style={[
//                                     styles.field,
//                                     rowIndex === activeRow ? styles.activeField : styles.inactiveField
//                                 ]}
//                             >
//                                 <TextInput
//                                     style={styles.input}
//                                     maxLength={1}
//                                     value={letter}
//                                     editable={rowIndex === activeRow && attempts < 4}
//                                     onChangeText={(text) => handleInput(text, rowIndex, colIndex)}
//                                 />
//                             </View>
//                         ))}
//                     </View>
//                 ))}
//             </View>
//         );
//     };

//     return (
//         <Wrapper>
//             <Title>Exercise</Title>
//             <Card>
//                 <CardHeader>
//                     <MainText>Guessing Game</MainText>
//                     <SubText>You have 4 attempts to guess the word!</SubText>
//                 </CardHeader>
//                 <CardContent>
//                     <Board />
//                 </CardContent>
//             </Card>
//         </Wrapper>
//     );
// }