import React, { type FC } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TodoList } from './todo-list';

const Tab = createMaterialTopTabNavigator();

const CompletedTodoList: FC = () => <TodoList completed />;
const UncompletedTodoList: FC = () => <TodoList completed={false} />;

export const Todo: FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Completed" component={CompletedTodoList} />
      <Tab.Screen name="Uncompleted" component={UncompletedTodoList} />
    </Tab.Navigator>
  );
};
