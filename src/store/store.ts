import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { todoReducer } from './todo';

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware()],
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type AppStore = ReturnType<typeof store.getState>;

export default store;
