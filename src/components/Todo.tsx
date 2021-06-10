import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TodoContext } from '../Mobx/TodoContext';

interface TodoProps {
  todo: string;
  index: number;
}
function Todo(props: TodoProps) {
  const { remove } = useContext(TodoContext);
  return (
    <View style={styles.viewStyle}>
      <View>
        <Text style={styles.todoStyle}>
          {props.index + 1}. {props.todo}
        </Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => remove(props.todo)}>
          <Text style={styles.removeStyle}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    padding: '5%',
    paddingTop: '2%',
    paddingBottom: '2%',
    borderBottomWidth: 1,
    borderColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  todoStyle: {
    fontSize: 25,
  },
  removeStyle: {
    fontSize: 20,
    color: 'red',
  },
});

export default Todo;
