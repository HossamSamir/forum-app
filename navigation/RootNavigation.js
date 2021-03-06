import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';
import Post from '../screens/Post';
import Subcat from '../screens/Subcat';
import SubcatPosts from '../screens/SubcatPosts';
import InnerChat from '../screens/InnerChat';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Profile from '../screens/Profile';

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
    },
    Login: {
      screen: Login,
    },
    Profile: {
      screen: Profile,
    },
    Signup: {
      screen: Signup,
    },
    Post: {
      screen: Post,
    },
    Subcat: {
      screen: Subcat,
    },
    SubcatPosts: {
      screen: SubcatPosts,
    },
    InnerChat: {
      screen: InnerChat,
    },
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <RootStackNavigator />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }

  _handleNotification = ({ origin, data }) => {
    console.log(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`
    );
  };
}
