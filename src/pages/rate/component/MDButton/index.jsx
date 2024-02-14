import {TouchableOpacity, Text} from 'react-native';

const MDButtom = ({label, selected, onPress, dynamicStyle, textColor}) => {
  const buttonStyle = {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 30,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    ...dynamicStyle,
  };

  const textStyle = {
    color: textColor || (selected ? 'white' : 'black'),
  };

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default MDButtom;
