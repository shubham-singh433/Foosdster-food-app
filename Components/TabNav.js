import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Menu from './Menu';
import HomeScreen from './HomeScreen';
import {Icon} from 'react-native-elements';
// import Details from './Details';
import Account from './Account';
import Categories from './Categories';
import Orders from './Orders';
import Restaurants from './Restaurants';

const Tab = createBottomTabNavigator();

class TabNav extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          initialRouteName: 'main',
          tabBarStyle: {backgroundColor: 'white'},
          headerShown: false,

          tabBarIcon: ({focused, color}) => {
            let iconName;
            if (route.name == 'Home') {
              return (
                <Icon
                  name="home"
                  type="ionicon"
                  color={focused ? '#fa7051' : 'black'}
                />
              );
            } else if (route.name == 'Restaurants') {
              return (
                <Icon
                  name="restaurant"
                  type="ionicon"
                  color={focused ? '#fa7051' : 'black'}
                />
              );
            } else if (route.name == 'Profile') {
              return (
                <Icon
                  name="person"
                  type="ionicon"
                  color={focused ? '#fa7051' : 'black'}
                />
              );
            } else if (route.name == 'Orders') {
              return (
                <Icon
                  name="lock-closed"
                  type="ionicon"
                  color={focused ? '#fa7051' : 'black'}
                />
              );
            }
            return (
              <Icon name={iconName} color={color} type="ionicon" size={22} />
            );
          },
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          screenOptions={{headerShown: false}}
        />
        <Tab.Screen
          name="Restaurants"
          component={Restaurants}
          screenOptions={{headerShown: false}}
        />
        <Tab.Screen
          name="Profile"
          component={Account}
          screenOptions={{headerShown: false}}
        />
        <Tab.Screen name="Orders" component={Orders} />
      </Tab.Navigator>
    );
  }
}
export default TabNav;
