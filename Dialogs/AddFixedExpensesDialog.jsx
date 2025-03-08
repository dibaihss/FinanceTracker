// import React, { useState } from 'react';
// import {
//   Modal,
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
// } from 'react-native';



// export const AddExpenseDialog = ({
//   visible,
//   onClose,
//   onAdd,
// }) => {
//   const [title, setTitle] = useState('');
//   const [amount, setAmount] = useState('');
//   const [category, setCategory] = useState('');

//   const handleAdd = () => {
//     if (title && amount && category) {
//       onAdd({
//         title,
//         amount: parseFloat(amount),
//         category,
//       });
//       setTitle('');
//       setAmount('');
//       setCategory('');
//       onClose();
//     }
//   };

//   return (
//     <Modal
//       visible={visible}
//       transparent
//       animationType="fade"
//       onRequestClose={onClose}
//     >
//       <TouchableWithoutFeedback onPress={onClose}>
//         <View style={styles.overlay}>
//           <TouchableWithoutFeedback>
//             <View style={styles.dialog}>
//               <Text style={styles.title}>Add New Expense</Text>
              
//               <TextInput
//                 style={styles.input}
//                 placeholder="Title"
//                 value={title}
//                 onChangeText={setTitle}
//               />
              
//               <TextInput
//                 style={styles.input}
//                 placeholder="Amount"
//                 value={amount}
//                 onChangeText={setAmount}
//                 keyboardType="numeric"
//               />
              
//               <TextInput
//                 style={styles.input}
//                 placeholder="Category"
//                 value={category}
//                 onChangeText={setCategory}
//               />
              
//               <View style={styles.buttons}>
//                 <TouchableOpacity
//                   style={[styles.button, styles.cancelButton]}
//                   onPress={onClose}
//                 >
//                   <Text style={styles.buttonText}>Cancel</Text>
//                 </TouchableOpacity>
                
//                 <TouchableOpacity
//                   style={[styles.button, styles.addButton]}
//                   onPress={handleAdd}
//                 >
//                   <Text style={[styles.buttonText, styles.addButtonText]}>
//                     Add
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </TouchableWithoutFeedback>
//         </View>
//       </TouchableWithoutFeedback>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   dialog: {
//     width: '80%',
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 20,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     padding: 12,
//     marginBottom: 16,
//   },
//   buttons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
//   button: {
//     flex: 1,
//     padding: 12,
//     borderRadius: 10,
//     marginHorizontal: 5,
//   },
//   cancelButton: {
//     backgroundColor: '#f0f0f0',
//   },
//   addButton: {
//     backgroundColor: '#4c669f',
//   },
//   buttonText: {
//     textAlign: 'center',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   addButtonText: {
//     color: 'white',
//   },
// });