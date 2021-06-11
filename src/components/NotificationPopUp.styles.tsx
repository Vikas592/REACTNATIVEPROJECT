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
  },
  header: {
    fontWeight: '700',
    fontSize: 18,
    fontFamily: 'Roboto',
    lineHeight: 26,
    textAlign: 'center',
    color: '#333333',
    marginTop: 5,
    marginBottom: 15,
    justifyContent: 'flex-start',
  },
  msg: {
    marginBottom: 15,
    textAlign: 'center',
    width: 250,
    fontSize: 17,
    lineHeight: 25,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  button: {
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginRight: 5,
  },
  buttonText: {
    fontSize: 20,
  },
  yesBtn: {
    backgroundColor: '#1D7DEA',
  },
  yesText: {
    color: '#FFF',
  },
  noText: {
    color: '#1D7DEA',
  },
});
