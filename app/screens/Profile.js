import React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Text } from 'react-native-elements';

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
    // getUserInfo().then(res => {
    //   console.log(`User Info ${res}`);
    //   this.setState({userInfo:res})
    // }).catch(err => {
    //   console.log(err);
    // });
    this.setState({
      userInfo: {
        firstName: 'Kyrsten',
        lastName: 'Kelly',
        title: 'Full Stack Developer',
        company: 'Udacity',
        age: 26,
        about: 'I\'m a full stack developer at Udacity. I\'ve been doing software development professionally for 5 years.',
        skills: ['Software Development', 'Dancing', 'Ukulele'],
        interests: ['Yoga', 'Arial Silks'],
      },
    });
  }

  getInterestsList(interests) {
    return interests.map((interest, i) =>
      <Text key={i} style={styles.interest}>{interest}</Text>);
  }

  render() {
    const { userInfo } = this.state;
    const Interests = this.getInterestsList(userInfo.interests);

    return (
      <View style={styles.view}>
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
            <Text style={styles.sectionLabel}>Interests</Text>
            {Interests}
          </View>
        </View>
      </View>
    );
  }
}

Profile.navigationOptions = (props) => {
  const { navigation } = props;
  const { state, setParams } = navigation;

  return {
    headerTitle: 'Profile',
    headerLeft: (
      <Button
        title="Menu"
      />
    ),
    headerRight: (
      <Button
        title="Edit"
        onPress={() =>
          setParams({ mode: state.mode === 'edit' ? '' : 'edit' })}
      />
    ),
  };
};

export default Profile;
