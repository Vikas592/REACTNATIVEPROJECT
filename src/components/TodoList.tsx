import { Observer } from 'mobx-react';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { TodoContext } from '../Mobx/TodoContext';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
  const { todos } = useContext(TodoContext);
  return (
    <Observer>
      {() => (
        <View style={styles.viewStyles}>
          <View style={styles.styleTodos}>
            {todos.map((todo: string, index: number) => (
              <Todo key={todo} todo={todo} index={index} />
            ))}
          </View>
          <TodoForm />
        </View>
      )}
    </Observer>
  );
}

export default TodoList;

const styles = StyleSheet.create({
  viewStyles: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  styleTodos: {
    flex: 1,
  },
});
