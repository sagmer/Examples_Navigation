import {createStackNavigator} from "react-navigation-stack";
import {createDrawerNavigator} from "react-navigation-drawer";
import {createAppContainer} from "react-navigation";
import ScreenAScr from "../Screens/ScreenA";
import ScreenBScr from "../Screens/ScreenB";
import { Ionicons } from '@expo/vector-icons';
import React from "react";

const ScreenANavigator = createStackNavigator(
  {
    screenA: ScreenAScr
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfiguration => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
          size={23}
        />
      )
    }
  }
);

const ScreenBNavigator = createStackNavigator(
    {
      screenB: ScreenBScr
    },
    {
      navigationOptions: {
        drawerIcon: drawerConfig => (
          <Ionicons
            name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
            size={23}
            color={drawerConfig.tintColor}
          />
        )
      }
    }
);

const MainNavigator = createDrawerNavigator ({
    screenA : ScreenANavigator,
    screenB : ScreenBNavigator
})

export default createAppContainer(MainNavigator);