import React, { type FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface NavbarProps {
  title: string;
}

export const Navbar: FC<NavbarProps> = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#3949ab',
    paddingBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
