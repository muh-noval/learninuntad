import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar} from '../../../../../../assets';

const Button = ({type}) => {
  return (
    <TouchableOpacity style={styles.btn}>
      {type === 'picture' && <Image source={Avatar} style={styles.icon} />}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
    borderWidth: 1,
    borderRadius: 25,
  },
});
