import { Dimensions, StyleSheet } from 'react-native';

import * as constants from './variables';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  menuIcon: {
    marginLeft: 8,
  },
  editIcon: {
    marginRight: 8,
  },
  view: {
    flex: 1,
    flexDirection: 'column',
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
    marginTop: 14,
  },
  sectionLabel: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  hobbiesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  hobby: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    height: 32,
    marginRight: 5,
    marginBottom: 7,
    borderRadius: 15,
    borderWidth: 0.7,
    borderColor: '#d6d7da',
  },
  skill: {
    borderColor: constants.GREEN,
    color: constants.GREEN,
  },
  interest: {
    borderColor: constants.BLUE,
    color: constants.BLUE,
  },
});
