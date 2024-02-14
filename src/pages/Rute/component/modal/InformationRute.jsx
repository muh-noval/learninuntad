/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Modal, ModalContent, SlideAnimation} from 'react-native-modals';

const InformationRute = () => {
  const [heigth, setHeight] = useState(0.5);

  const handleSwipe = swipeDirection => {
    if (swipeDirection.swipeDirection === 'up') {
      setHeight(0.5);
    } else if (swipeDirection.swipeDirection === 'down') {
      setHeight(0.3);
    }
  };

  return (
    <Modal
      modalAnimation={
        new SlideAnimation({
          slideFrom: 'bottom',
          initialValue: 0,
          useNativeDriver: true,
        })
      }
      visible={true}
      onTouchOutside={() => setHeight(0.3)}
      style={styles.containerModal}
      modalStyle={styles.modal}
      swipeDirection={['down', 'up']}
      onSwiping={swipeDirection => {
        handleSwipe(swipeDirection);
      }}
      width={1}
      height={heigth}
      overlayBackgroundColor={
        heigth !== 0.5 ? 'transparent' : 'rgba(0,0,0,0.5)'
      }>
      <ModalContent>
        <TouchableOpacity onPress={() => setHeight(0.5)}>
          <View style={styles.containerSeparator}>
            <View style={styles.separator} />
          </View>
          <Text style={styles.text}>Lorem ipsum dolor</Text>
        </TouchableOpacity>
      </ModalContent>
    </Modal>
  );
};

const styles = StyleSheet.create({
  containerModal: {
    justifyContent: 'flex-end',
  },
  modal: {
    margin: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  text: {
    color: 'black',
  },
  containerSeparator: {
    alignItems: 'center',
    marginBottom: 14,
  },
  separator: {
    backgroundColor: 'gray',
    marginHorizontal: 30,
    marginVertical: 5,
    width: 50,
    height: 5,
    borderRadius: 10,
  },
});

export default InformationRute;
