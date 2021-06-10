import { useLocalObservable } from 'mobx-react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { createContext, ReactNode } from 'react';

interface TodoProviderProps {
  children: ReactNode;
}
interface TodoContextProps {
  todos: string[];
  add: (todo: string) => void;
  remove: (todo: string) => void;
}

export const TodoContext = createContext<TodoContextProps>({
  todos: [],
  add: () => {},
  remove: () => [],
});

const TodoProvider = (props: TodoProviderProps) => {
  const store = useLocalObservable(() => ({
    todos: ['todo', 'todoo', 'todooo'],
    add: (todo: string) => {
      store.todos.push(todo);
    },
    remove: (todo: string) => {
      const index = store.todos.indexOf(todo);
      store.todos.splice(index, 1);
    },
  }));

  return (
    <TodoContext.Provider value={store}>{props.children}</TodoContext.Provider>
  );
};

export default TodoProvider;
