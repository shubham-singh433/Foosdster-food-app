/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

// screen imports
import HomeScreen from './Components/HomeScreen';
import Signup from './Components/Signup';
import Details from './Components/Details';
import Menu from './Components/Menu';
import Pizza from './Components/Pizza';
import Salad from './Components/Salad';
import Noodle from './Components/Noodle';
import Account from './Components/Account';
import Categories from './Components/Categories';
import Restaurants from './Components/Restaurants';
import TabNav from './Components/TabNav';
import Orders from './Components/Orders';

const Stack = createNativeStackNavigator();
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          // initialRouteName="Categorie"
          screenOptions={{headerShown: false}}>
          {/* <Stack.Navigator intiialRouteName-"Main"> */}
          <Stack.Screen name="SignUp" component={Signup} />
          <Stack.Screen name="HomeScreen" component={TabNav} />
          <Stack.Screen name="Categorie" component={Categories} />
          <Stack.Screen name="Restaurants" component={Restaurants} />
          <Stack.Screen name="Orders" component={Orders} />
          {/* <Stack.Screen
            name="Menu"
            component={TabNav}
            screenOptions={{headerShown: false}}
          /> */}
          <Stack.Screen name="Sushi" component={Details} />
          <Stack.Screen name="Pizza" component={Pizza} />
          <Stack.Screen name="Salad" component={Salad} />
          <Stack.Screen name="Noodle" component={Noodle} />
          {/* <Stack.Screen name="Profilescreen" component={TabNav} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
