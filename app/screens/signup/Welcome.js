import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

import welcome from '../../styles/welcome';
// import sanDiego from '../../images/sandiego.jpg';

const Welcome = () =>
  (
    <View style={welcome}>
      {/* <Image src={sanDiego} /> */}
      <Text>Welcome</Text>
    </View>
  );

Welcome.navigationOptions = { header: null };

export default Welcome;
