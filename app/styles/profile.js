import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  avatarContainer: {
    width: '100%',
    height: width,
  },
  info: {
    marginLeft: 15,
  },
  name: {
    fontSize: 25,
    paddingVertical: 10,
  },
  details: {
    fontSize: 15,
  },
  section: {
    marginTop: 10,
  },
  sectionLabel: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  interest: {},
});
