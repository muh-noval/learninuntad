import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';
import Button from './component/button';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <Button type="picture" />
      <TextInput style={styles.input} placeholder="Type a message" />
      <Button type="picture" />
      <Button type="picture" />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {padding: 16, flexDirection: 'row', gap: 10},
  input: {
    backgroundColor: '#D5D8DC',
    flex: 1,
    padding: 14,
    borderRadius: 20,
    fontSize: 14,
    maxHeight: 45,
  },
});
