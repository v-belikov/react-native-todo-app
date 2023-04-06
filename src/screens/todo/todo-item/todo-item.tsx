import React, { type FC } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { type ITodoItem } from '@store/todo';
import Checkbox from 'expo-checkbox';

interface TodoProps {
  item: ITodoItem;
  onRemove: (id: string) => void;
  onCompletedChange: (id: string) => void;
}

export const TodoItem: FC<TodoProps> = ({
  item: { title, id, completed },
  onRemove,
  onCompletedChange,
}) => {
  const onPressItem = (): void => {
    onRemove(id);
  };

  const onChangeCheckbox = (): void => {
    onCompletedChange(id);
  };

  return (
    <TouchableOpacity onLongPress={onPressItem}>
      <View style={styles.todo}>
        <Text>{title}</Text>
        <Checkbox value={completed} onValueChange={onChangeCheckbox} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
  },
});
