import React, { useContext, useState } from 'react';
import {
  TextInput,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import { TodoContext } from '../Mobx/TodoContext';

function TodoForm() {
  const { add, todos } = useContext(TodoContext);
  const [todo, setTodo] = useState('');
  const handleChange = (value: string) => {
    setTodo(value);
  };

  const handleSubmit = () => {
    //add todo to store
    if (todo && !todos.includes(todo)) {
      add(todo.trim());
    }
    setTodo('');
  };
  return (
    <View style={styles.styleView}>
      <TextInput
        style={styles.styleInput}
        onChangeText={handleChange}
        value={todo}
        placeholder="New Todo"
        enablesReturnKeyAutomatically={true}
      />
      <TouchableOpacity style={styles.styleBtn} onPress={handleSubmit}>
        <Text style={styles.styleText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TodoForm;

const styles = StyleSheet.create({
  styleView: {
    padding: '5%',
  },
  styleInput: {
    color: 'black',
    borderWidth: 1,
    marginTop: '5%',
    marginBottom: '2%',
    fontSize: 20,
    flex: 1,
  },

  styleBtn: {
    padding: '3%',
    borderRadius: 5,
    backgroundColor: '#5f5ff3',
  },

  styleText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
});
