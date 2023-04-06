import React, { type FC, useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';

interface AddTodoProps {
  onSubmit: (title: string) => void;
}

export const AddTodo: FC<AddTodoProps> = ({ onSubmit }) => {
  const [value, setValue] = useState<string>('');

  const onChangeText = (text: string): void => {
    setValue(text);
  };

  const onPress = (): void => {
    if (value.trim() === '') {
      Alert.alert('Введите задачу');

      return;
    }

    onSubmit(value);
    setValue('');
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="Задача"
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Button title="Добавить" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '70%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
    padding: 10,
  },
});
