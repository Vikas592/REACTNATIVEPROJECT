import React from 'react';
import {
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import { icons } from '../../constants';
import { styles } from './CongratsPopUp.styles';
interface CongratsPopUpProps {
  open: boolean;
  setOpen: () => void;
  image: ImageSourcePropType;
  header: string;
  msg: string;
}
function CongratsPopUp(props: CongratsPopUpProps) {
  const { open, setOpen, image, header, msg } = props;
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
          <View style={styles.headerContainer}>
            <Text style={styles.header}>{header}</Text>
            <TouchableOpacity
              onPress={setOpen}
              style={styles.closeIconContainer}>
              <Image source={icons.CLOSE_ICON} style={styles.closeIcon} />
            </TouchableOpacity>
          </View>

          <Text style={styles.msg}>{msg}</Text>
        </View>
      </View>
    </Modal>
  );
}

export default CongratsPopUp;
