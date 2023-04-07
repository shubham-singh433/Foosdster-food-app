import React, {Component} from 'react';

import {View, Text, Dimensions} from 'react-native';
import {Header} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
import {Icon} from 'react-native-elements';
import {Rating, AirbnbRating} from 'react-native-ratings';
class Orders extends Component {
  leftComponentRender = () => (
    <View>
      <Text
        style={{
          fontSize: RFValue(18, 580),
          width: Dimensions.get('screen').width / 2.5,
          justifyContent: 'center',
          fontFamily: 'Alkatra-Bold',
        }}>
        FoodSter
      </Text>
    </View>
  );
  rightComponentRender = () => (
    <View
      style={{
        flexDirection: 'row',
        width: Dimensions.get('screen').width / 2,
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
      <Icon name="location" type="ionicon" size={24} color={'red'} />
      <Text
        style={{
          fontSize: RFValue(15, 580),
          fontFamily: 'Alkatra-Bold',
        }}>
        Dehradun
      </Text>
      <Icon name="search" type="ionicon" size={25} />
    </View>
  );
  render() {
    return (
      <View>
        <Header
          leftComponent={this.leftComponentRender}
          rightComponent={this.rightComponentRender}
          containerStyle={{
            backgroundColor: 'white',
            backgroundColor: '#fff',
            borderRadius: 20,
            shadowColor: 'black',
            // shadowOffset: {width: -4, height: 4},
            shadowOpacity: 1,
            shadowRadius: 15,
            elevation: 20,
          }} //styling for header component
        />

        <AirbnbRating count={11} defaultRating={11} size={20} />
      </View>
    );
  }
}
export default Orders;
