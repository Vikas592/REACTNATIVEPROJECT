import React from 'react';
import {
  Text,
  View,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

interface CustomModalProps {
  modalVisible: boolean;
  toggleModal: Function;
  image?: any;
  header?: string;
  msg: string;
  actionCTA?: string;
}
function CustomModal(props: CustomModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => props.toggleModal()}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {props.image ? (
            <View>
              <Image source={props.image} />
            </View>
          ) : (
            <></>
          )}

          <Text style={styles.modalHeader}>{props.header}</Text>
          <Text style={styles.modalText}>{props.msg}</Text>
          {props.actionCTA ? (
            <TouchableOpacity
              onPress={() => props.toggleModal()}
              style={styles.actionButton}>
              <Text style={styles.actionButtonText}>{props.actionCTA}</Text>
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    width: '100%',
  },
  modalView: {
    position: 'absolute',
    bottom: 0,
    height: '50%',
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalHeader: {
    fontWeight: '700',
    fontSize: 25,
    fontFamily: 'Roboto',
    lineHeight: 26,
    textAlign: 'center',
    color: '#333333',
    marginTop: 30,
    marginBottom: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    width: 250,
    fontSize: 17,
    lineHeight: 25,
  },
  actionButton: {
    backgroundColor: '#1D7DEA',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 20,
  },
});
export default CustomModal;
