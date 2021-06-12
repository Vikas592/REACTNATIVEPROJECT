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
import { icons } from '../../constants';
const Mode = require('../../assets/Mode.png');
const PlaybackSpeed = require('../../assets/PlaybackSpeed.png');
const Quality = require('../../assets/Quality.png');
const Report = require('../../assets/Report.png');

interface NotesKebabMenuProps {
  modalVisible: boolean;
  toggleModal: Function;
  switchEnabled: boolean;
  toggleSwitch: (value: boolean) => void;
}
function NotesKebabMenu(props: NotesKebabMenuProps) {
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
          backgroundColor: switchEnabled ? '#383838' : '#FFFFFF',
        }}>
        <TouchableOpacity
          onPress={() => {
            switchEnabled ? toggleSwitch(false) : toggleSwitch(true);
          }}
          style={styles.actionButton}>
          <Image
            style={{ tintColor: switchEnabled ? 'white' : 'black' }}
            source={icons.MODE_ICON}
          />
          <View style={styles.doubleContent}>
            <Text
              style={{
                ...styles.actionButtonText,
                color: switchEnabled ? 'white' : 'black',
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
          <Image
            style={{ tintColor: switchEnabled ? 'white' : 'black' }}
            source={icons.FONTSIZE_ICON}
          />
          <View style={styles.doubleContent}>
            <Text
              style={{
                ...styles.actionButtonText,
                color: switchEnabled ? 'white' : 'black',
              }}>
              Font Size
            </Text>
            <View style={styles.fontSizeIcons}>
              <Image
                source={icons.LARGE_A_ICON}
                style={{ tintColor: switchEnabled ? 'white' : 'black' }}
              />
              <Image
                source={icons.MEDIUM_A_ICON}
                style={{ tintColor: switchEnabled ? 'white' : 'black' }}
              />
              <Image
                source={icons.SMALL_A_ICON}
                style={{ tintColor: switchEnabled ? 'white' : 'black' }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          //   onPress={() => toggleModal()}
          style={styles.actionButton}>
          <Image
            style={{ tintColor: switchEnabled ? 'white' : 'black' }}
            source={icons.QUALITY_ICON}
          />
          <View style={styles.doubleContent}>
            <Text
              style={{
                ...styles.actionButtonText,
                color: switchEnabled ? 'white' : 'black',
              }}>
              Share
            </Text>
            <Text style={styles.secondContent}>360p</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          //   onPress={() => toggleModal()}
          style={styles.actionButton}>
          <Image
            style={{ tintColor: switchEnabled ? 'white' : 'black' }}
            source={icons.REPORT_ICON}
          />
          <Text
            style={{
              ...styles.actionButtonText,
              color: switchEnabled ? 'white' : 'black',
            }}>
            Report
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
  fontSizeIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '20%',
    justifyContent: 'space-between',
  },
});
export default NotesKebabMenu;
