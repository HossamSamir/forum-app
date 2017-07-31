import React from 'react';
import { Platform } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import AddPost from '../screens/AddPost';
import Chat from '../screens/Chat';
import Notifications from '../screens/Notifications';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Notifications: {
      screen: Notifications,
    },
    AddPost: {
      screen: AddPost,
    },
    Chat: {
      screen: Chat,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = 'archive'
          break;
          case 'Chat':
            iconName = 'sc-telegram'
          break;
          case 'AddPost':
            iconName = 'plus'
          break;
          case 'Notifications':
            iconName = 'bell'
          break;
          case 'Profile':
            iconName = 'user'
          break;
        }
        return (
          <EvilIcons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  }
);
