import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    height: '15%',
    width: '95%',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  imageContainer: {
    bottom: '1%',
    left: '30%',
  },

  image: {
    scaleX: 1.5,
    scaleY: 1.5,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 25,
  },
  headerContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    fontWeight: '700',
    fontSize: 26,
    fontFamily: 'Roboto',
    lineHeight: 26,
    textAlign: 'center',
    color: '#30BE76',
  },
  closeIconContainer: {
    marginRight: 10,
  },
  closeIcon: {
    scaleX: 1.5,
    scaleY: 1.5,
  },
  msg: {
    width: '85%',
    fontSize: 17,
    lineHeight: 25,
    color: '#666666',
  },
});
