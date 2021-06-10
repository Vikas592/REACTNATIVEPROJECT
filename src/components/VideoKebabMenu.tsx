/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
const Mode = require('../../assets/Mode.png');
const PlaybackSpeed = require('../../assets/PlaybackSpeed.png');
const Quality = require('../../assets/Quality.png');
const Report = require('../../assets/Report.png');

interface VideoKebabMenuProps {
  modalVisible: boolean;
  toggleModal: Function;
  switchEnabled: boolean;
  toggleSwitch: (value: boolean) => void;
}
function VideoKebabMenu(props: VideoKebabMenuProps) {
  const { modalVisible, toggleModal, toggleSwitch, switchEnabled } = props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => toggleModal()}>
      <View
        style={{
          ...styles.modalView,
          backgroundColor: switchEnabled ? '#FFFFFF' : '#383838',
        }}>
        <TouchableOpacity
          onPress={() => {
            switchEnabled ? toggleSwitch(false) : toggleSwitch(true);
          }}
          style={styles.actionButton}>
          <Image source={Mode} />
          <View style={styles.doubleContent}>
            <Text
              style={{
                ...styles.actionButtonText,
                color: switchEnabled ? 'black' : 'white',
              }}>
              Mode
            </Text>
            <Switch
              trackColor={{ false: '#DDD9D9', true: '#E4E4E4' }}
              thumbColor={switchEnabled ? '#666666' : '#666666'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={switchEnabled}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          //   onPress={() => toggleModal()}
          style={styles.actionButton}>
          <Image source={Report} />
          <Text
            style={{
              ...styles.actionButtonText,
              color: switchEnabled ? 'black' : 'white',
            }}>
            Report
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          //   onPress={() => toggleModal()}
          style={styles.actionButton}>
          <Image source={Quality} />
          <View style={styles.doubleContent}>
            <Text
              style={{
                ...styles.actionButtonText,
                color: switchEnabled ? 'black' : 'white',
              }}>
              Quality
            </Text>
            <Text style={styles.secondContent}>360p</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          //   onPress={() => toggleModal()}
          style={styles.actionButton}>
          <Image source={PlaybackSpeed} />
          <Text
            style={{
              ...styles.actionButtonText,
              color: switchEnabled ? 'black' : 'white',
            }}>
            Playback Speed
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    position: 'absolute',
    bottom: 0,
    height: '40%',
    width: '100%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingHorizontal: 10,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  actionButton: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  image: {
    width: 25,
    height: 25,
  },
  doubleContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButtonText: {
    marginLeft: 12,
    color: 'white',
    fontSize: 20,
  },
  secondContent: {
    fontSize: 20,
    color: '#3DABFF',
  },
});
export default VideoKebabMenu;
