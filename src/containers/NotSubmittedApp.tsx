/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';
import CustomModal from '../components/CustomModal';
import VideoKebabMenu from '../components/VideoKebabMenu';
const image = require('../../assets/Group.png');

const NotSubmittedApp = () => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [switchEnabled, setSwitchEnabled] = useState<boolean>(false);

  const toggleModal = () => {
    setVisibleModal(!visibleModal);
  };
  const toggleSwitch = (value: boolean) => {
    if (!value) {
      setTheme('light');
      setSwitchEnabled(false);
    }
    if (value) {
      setTheme('dark');
      setSwitchEnabled(true);
    }
  };

  return (
    <ScrollView style={styles.styleNotSubmittedApp}>
      <Button title="open Modal" onPress={toggleModal} />
      {/* <CustomModal
        modalVisible={visibleModal}
        toggleModal={toggleModal}
        image={image}
        header="Not Submitted!"
        msg="The question not submitted. Please try again"
        actionCTA="Retry"
      /> */}
      <VideoKebabMenu
        modalVisible={visibleModal}
        toggleModal={toggleModal}
        switchEnabled={switchEnabled}
        toggleSwitch={toggleSwitch}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewStyles: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  styleTodos: {
    flex: 1,
  },
  styleNotSubmittedApp: {
    backgroundColor: '#ddd',
  },
  style: {
    padding: '1%',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'orange',
  },
});

export default NotSubmittedApp;
