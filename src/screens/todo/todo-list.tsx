import React, { type FC, memo, useCallback } from 'react';
import { AddTodo } from './add-todo';
import { FlatList, View } from 'react-native';
import { TodoItem } from './todo-item';
import { useSelector } from 'react-redux';
import {
  addTodo,
  changeTodoCompleted,
  createSelectTodo,
  removeTodo,
} from '@store/todo';
import { useAppDispatch } from '@store/store';

interface ITodoListProps {
  completed: boolean;
}

const TodoListComponent: FC<ITodoListProps> = ({ completed }) => {
  const dispatch = useAppDispatch();
  const selectTodo = useCallback(createSelectTodo(completed), [completed]);
  const todos = useSelector(selectTodo);

  const onAddTodo = (title: string): void => {
    dispatch(addTodo({ id: Date.now().toString(), title, completed }));
  };

  const onRemoveTodo = (id: string): void => {
    dispatch(removeTodo(id));
  };

  const onChangeTodoCompleted = (id: string): void => {
    dispatch(changeTodoCompleted(id));
  };

  return (
    <View>
      <AddTodo onSubmit={onAddTodo} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            item={item}
            onRemove={onRemoveTodo}
            onCompletedChange={onChangeTodoCompleted}
          />
        )}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
};

export const TodoList = memo(TodoListComponent);
