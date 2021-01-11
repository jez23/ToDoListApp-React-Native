import React, { useState } from 'react';
import { View, Button, TextInput,  StyleSheet} from 'react-native';

const GoalInput = (props) => {

    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
       }
    return (
        <View  style={styles.inputContainer}>
        <TextInput 
          placeholder="Course Goals"
          style={styles.input}
          value={enteredGoal}
          onChangeText={goalInputHandler}/>
          <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)}/>  

      </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {  
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
        },
        input: {
            width: '80%',
            borderBottomColor: 'black',
            borderWidth: 1,
            padding: 10
          }

})

export default GoalInput;