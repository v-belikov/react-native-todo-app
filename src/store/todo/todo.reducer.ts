import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type AppStore } from '../store';
import { type ITodoItem } from './models';

interface TodoState {
  todoList: ITodoItem[];
}

const initialState: TodoState = {
  todoList: Array.from({ length: 100 }, (_, index: number) => ({
    id: (Date.now() + index).toString(),
    title: `${index} item`,
    completed: index % 2 === 0,
  })),
};

const todoSlice = createSlice({
  initialState,
  name: 'todo',
  reducers: {
    addTodo: (state, action: PayloadAction<ITodoItem>) => {
      state.todoList.unshift(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter(
        (todoItem: ITodoItem) => todoItem.id !== action.payload,
      );
    },
    changeTodoCompleted: (state, action: PayloadAction<string>) => {
      const item = state.todoList.find(
        (todoItem: ITodoItem) => todoItem.id === action.payload,
      )!;
      item.completed = !item.completed;
    },
  },
});

export const createSelectTodo =
  (completed: boolean) =>
  (state: AppStore): ITodoItem[] =>
    state.todo.todoList.filter(
      (todoItem: ITodoItem) => todoItem.completed === completed,
    );

export const { addTodo, removeTodo, changeTodoCompleted } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
