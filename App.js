import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Icon from './src/components/Icon';

const App = () => {
  return (
    <>
      <Text style={styles.h1}>Hello World</Text>
      <Icon name="Emoji" size={45} color="gold" />
      <Icon name="Mic" size={45} color="red" />
    </>
  );
};

const styles = StyleSheet.create({
  h1: {
    backgroundColor: '#BEFCE5',
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
    padding: 20,
    textAlign: 'center',
  },
});

export default App;
