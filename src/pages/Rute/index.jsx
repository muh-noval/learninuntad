import {StyleSheet, Text, View} from 'react-native';
import InformationRute from './component/modal/InformationRute';
import {ModalPortal} from 'react-native-modals';

const Rute = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text>Rute</Text>
      </View>
      <InformationRute />
      <ModalPortal />
    </View>
  );
};

export default Rute;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    // backgroundColor: 'blue',
  },
});
