/**
 * Sample React Native ToDoApp
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import TodoList from '../components/TodoList';
import TodoProvider from '../Mobx/TodoContext';

const ToDoApp = () => {
  return (
    <ScrollView style={styles.styleToDoApp}>
      <Text style={styles.style}> My ToDo List </Text>
      <View style={styles.viewStyles}>
        <TodoProvider>
          <TodoList />
        </TodoProvider>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewStyles: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  styleTodos: {
    flex: 1,
  },
  styleToDoApp: {
    backgroundColor: 'white',
  },
  style: {
    padding: '1%',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'orange',
  },
});

export default ToDoApp;
