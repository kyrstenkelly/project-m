import { StackNavigator } from 'react-navigation';

// import SignIn from './screens/signup/SignIn';
// import SignUp from './screens/signup/SignUp';
// import Welcome from './screens/signup/Welcome';
import Profile from './screens/Profile';

// export const SignedOut = StackNavigator({
//   Welcome: {
//     screen: Welcome,
//   },
//   SignIn: {
//     screen: SignIn,
//   },
//   SignUp: {
//     screen: SignUp,
//   },
// });

export const SignedIn = StackNavigator({
  // Matches: {
  //   screen: Matches,
  // },
  Profile: {
    screen: Profile,
  },
});

// export const createRootNavigator = (signedIn = false) => StackNavigator(
export const createRootNavigator = () => StackNavigator(
  {
    SignedIn: {
      screen: SignedIn,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
    // SignedOut: {
    //   screen: SignedOut,
    //   navigationOptions: {
    //     gesturesEnabled: false,
    //   },
    // },
  }, {
    headerMode: 'none',
    mode: 'float',
    // initialRouteName: signedIn ? 'SignedIn' : 'SignedOut',
  },
);
