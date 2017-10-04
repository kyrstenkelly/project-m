import React from 'react';

import { createRootNavigator } from './router';

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
      return <Layout />;
    }

    Layout = createRootNavigator(signedIn);
    return <Layout />;
  }
}
