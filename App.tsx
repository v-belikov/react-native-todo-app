import React, { type FC } from 'react';
import { Provider } from 'react-redux';
import store from '@store/store';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Todo } from '@screens/todo';

const Stack = createStackNavigator();

const App: FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Todo" component={Todo} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
