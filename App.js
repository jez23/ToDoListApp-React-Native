import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet, FlatList} from 'react-native';

import GoalItem from './components/GoalItem';
import  GoalInput from './components/GoalInput';

export default function App() {

 const [courseGoals, setCourseGoals] = useState([])


 const addGoalHandler = goalTitle => {
  setCourseGoals(currentGoal => [...currentGoal, {key: Math.random().toString(), value: goalTitle}])
 }

 const removeGoalHandler = goalId => {
   console.log("test")
    setCourseGoals(currentGoals => {
     
      console.log(1, goalId)
        return currentGoals.filter(goal => {
          return goal.key !== goalId
        })
    })
 }

  return (
    <View style={styles.screen}>
        <GoalInput onAddGoal={addGoalHandler}/>
        <FlatList data={courseGoals} 
      renderItem={itemData => {
        return <GoalItem title={itemData.item.value} id={itemData.item.key} onDelete={removeGoalHandler}/>
      }}/>
        

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {  
    padding: 50
    }
})

