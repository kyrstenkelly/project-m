import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Avatar, Icon, Text } from 'react-native-elements';

import styles from '../styles/profile';
import kyrsten from '../images/kyrsten.jpg';
// import { onSignOut, getUserInfo } from '../auth';

class Profile extends React.Component {
  // state = {
  //   userInfo: {
  //     firstName: '',
  //     lastName:''
  //   },
  //   mode: 'view',
  // }

  componentWillMount() {
    // TODO: Get user info from back end
    this.setState({
      userInfo: {
        firstName: 'Kyrsten',
        lastName: 'Kelly',
        title: 'Full Stack Developer',
        company: 'Udacity',
        age: 26,
        about: 'I\'m a full stack developer at Udacity. I\'ve been doing software development professionally for 5 years.',
        skills: ['Software Development', 'Swing Dancing', 'Blues Dancing', 'Ukulele', 'Guitar'],
        interests: ['Yoga', 'Arial Silks'],
      },
    });
  }

  getHobbyList(hobbies, isSkill) {
    const firstName = this.state.userInfo.firstName.toLowerCase();
    const hobbyStyles = isSkill ? styles.skill : styles.interest;
    return hobbies.map(hobby =>
      (<Text
        key={`${firstName}-${hobby}`}
        style={StyleSheet.flatten([styles.hobby, hobbyStyles])}
      >
        {hobby}
      </Text>),
    );
  }

  render() {
    const { userInfo } = this.state;
    const Skills = this.getHobbyList(userInfo.skills, true);
    const Interests = this.getHobbyList(userInfo.interests, false);

    return (
      <ScrollView style={styles.view}>
        <Avatar
          xlarge
          avatarStyle={styles.avatar}
          containerStyle={styles.avatarContainer}
          source={kyrsten}
          // onPress={() => console.log('Works!')}
          activeOpacity={0.7}
        />
        <View style={styles.info}>
          <Text style={styles.name}>{`${userInfo.firstName} ${userInfo.lastName}`}</Text>
          <Text style={styles.details}>{`${userInfo.title}, ${userInfo.company}`}</Text>
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>About</Text>
            <Text>{userInfo.about}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>Skills</Text>
            <View style={styles.hobbiesContainer}>
              {Skills}
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>Interests</Text>
            <View style={styles.hobbiesContainer}>
              {Interests}
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

Profile.navigationOptions = (props) => {
  const { navigation } = props;
  const { state, setParams } = navigation;

  return {
    headerTitle: 'Profile',
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTitleStyle: {
      color: 'white',
    },
    headerLeft: (
      <Icon
        name="menu"
        size={30}
        color="#fff"
        style={styles.menuIcon}
      />
    ),
    headerRight: (
      <Icon
        name="edit"
        size={25}
        color="#fff"
        style={styles.editIcon}
        onPress={() =>
          setParams({ mode: state.mode === 'edit' ? '' : 'edit' })}
      />
    ),
  };
};

export default Profile;
