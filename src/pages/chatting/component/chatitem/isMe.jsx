import {StyleSheet, Text, View} from 'react-native';

const IsMe = ({textContent}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>{textContent}</Text>
      </View>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  content: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: '#D5D8DC',
    maxWidth: '70%',
    borderRadius: 10,
  },
});
