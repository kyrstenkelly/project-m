import React from 'react';
import { StyleSheet } from 'react-native';

import { createRootNavigator } from './router';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false,
    };
  }

  componentWillMount() {
    // TODO: Hook up to real API
    this.setState({
      signedIn: true,
      checkedSignIn: true,
    });
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;
    let Layout;

    if (!checkedSignIn) {
      Layout = createRootNavigator(false);
      return <Layout style={styles} />;
    }

    Layout = createRootNavigator(signedIn);
    return <Layout style={styles} />;
  }
}
