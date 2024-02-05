import {StyleSheet, Text, View} from 'react-native';
import ChatItem from './component/chatitem';
import InputChat from './component/inputchat';

const Chatting = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.chatdate}>11.30 PM</Text>
        <ChatItem
          textContent="Pengantar dari Hokben - Ruko Rawasari sedang mengirim makananmu. Mohon
          ditunggu!"
        />
        <ChatItem textContent="Alamat sudah sesuai ya?" />
        <Text style={styles.chatdate}>13.56 PM</Text>
        <ChatItem isMe textContent="Sudah, pak. Terima kasih" />
      </View>
      <InputChat />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    marginVertical: 12,
    marginHorizontal: 16,
    gap: 5,
    flex: 1,
  },
  chatdate: {
    textAlign: 'center',
    marginVertical: 12,
  },
});
