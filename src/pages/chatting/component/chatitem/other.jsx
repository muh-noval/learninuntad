import {Image, StyleSheet, Text, View} from 'react-native';
import {Avatar} from '../../../../assets';

const Other = ({textContent}) => {
  return (
    <View style={styles.container}>
      <Image source={Avatar} style={styles.avatar} />
      <View style={styles.content}>
        <Text>{textContent}</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 3,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45,
  },
  content: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: 'white',
    maxWidth: '70%',
    borderRadius: 10,
  },
});
