import React from 'react';
import {
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import { styles } from './NotificationPopUp.styles';
interface NotificationPopUpProps {
  open: boolean;
  setOpen: () => void;
  image: ImageSourcePropType;
  header: string;
}
function NotificationPopUp(props: NotificationPopUpProps) {
  const { open, setOpen, image, header } = props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={setOpen}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.header}>{header}</Text>

          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={setOpen} style={styles.button}>
              <Text style={{ ...styles.buttonText, ...styles.noText }}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={setOpen}
              style={{ ...styles.button, ...styles.yesBtn }}>
              <Text style={{ ...styles.buttonText, ...styles.yesText }}>
                Yes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default NotificationPopUp;
