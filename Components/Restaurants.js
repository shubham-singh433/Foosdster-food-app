import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Header} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
import {Icon} from 'react-native-elements';
import {ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
const upperList = [
  {
    id: 1,
    text: 'All',
  },
  {
    id: 2,
    text: 'Popular',
  },
  {
    id: 3,
    text: 'FastFood',
  },
  {
    id: 4,
    text: 'FastDelivery',
  },
  {
    id: 5,
    text: 'Indian',
  },
  {
    id: 6,
    text: 'Discount',
  },
];
const restaurantsList = [
  {
    id: 1,
    name: 'Le Manoir',
    type: 'French cuisine',
    time: '30-45 min',
    star: 5,
    url: require('../image/restaurants/5.png'),
    color: 'grey',
  },
  {
    id: 2,
    name: 'Mario Chef',
    type: 'Italian cuisine',
    time: '30-45 min',
    star: 5,
    url: require('../image/restaurants/1.png'),
    color: 'skyblue',
  },
  {
    id: 3,
    name: 'Ramen Delicious',
    type: 'Japanese cusine',
    time: '30-50 min',
    star: 4.5,
    url: require('../image/restaurants/3.png'),
    color: '#eda553',
  },
  {
    id: 4,
    name: 'Starbucks Coffee',
    type: 'Mixed Cuisine',
    time: '25-30 min',
    star: 4,
    url: require('../image/restaurants/2.png'),
    color: '#52f2b8',
  },
  {
    id: 5,
    name: "Mcdonald's",
    type: 'American cuisine',
    time: '15-20 min',
    star: 4.5,
    url: require('../image/restaurants/8.png'),
    color: 'red',
  },
  {
    id: 6,
    name: 'Sushi',
    type: 'Asian cuisine',
    time: '30-45 min',
    star: 4.5,
    url: require('../image/restaurants/4.png'),
    color: '#e9f069',
  },
  {
    id: 7,
    name: 'Julima Salvia',
    type: 'Mexican',
    time: '30-45 min',
    star: 4.5,
    url: require('../image/restaurants/6.png'),
    color: '#f0cc69',
  },
  {
    id: 8,
    name: 'KFC',
    type: 'American cuisine',
    time: '30-45 min',
    star: 4.5,
    url: require('../image/restaurants/7.png'),
    color: '#f75216',
  },
];
class Restaurants extends Component {
  // restaurant list flat list function
  renderRestaurantList = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        // paddingTop: 20,
        marginHorizontal: 20,
        marginTop: 10,
        width: Dimensions.get('screen').width / 1.1,
        height: Dimensions.get('screen').height / 8,
        backgroundColor: '#fff',
        borderRadius: 20,
        // marginBottom: 150,
      }}>
      {/* tiles view */}

      <TouchableOpacity
        style={{
          width: Dimensions.get('screen').width / 1.8,
          justifyContent: 'center',
          // backgroundColor: 'blue',
        }}>
        <Text
          style={{
            fontFamily: 'Alkatra-Bold',
            fontSize: RFValue(15, 580),
            marginLeft: 10,
            color: 'black',
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            fontFamily: 'Alkatra-Regular',
            fontSize: RFValue(11, 580),
            marginLeft: 10,
            color: 'black',
          }}>
          {item.type}
        </Text>
        <View
          style={{
            width: Dimensions.get('screen').width / 2.4,
            // backgroundColor: 'red',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <Icon
            name="timer-outline"
            type="ionicon"
            size={20}
            color={'green'}
            // style={{marginLeft: 10}}
          />
          <Text
            style={{
              // textAlign: 'flex-start',
              fontFamily: 'Alkatra-Regular',
              fontSize: RFValue(11, 580),
              // marginLeft: -20,
              color: 'black',
            }}>
            {item.time}
          </Text>
          <Icon
            name="star"
            type="ionicon"
            size={20}
            color={'orange'}
            style={{marginLeft: 10}}
          />
          <Text
            style={{
              // textAlign: 'flex-start',
              fontFamily: 'Alkatra-Regular',
              fontSize: RFValue(11, 580),
              marginLeft: -5,
              color: 'black',
            }}>
            {item.star}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{alignSelf: 'center', justifyContent: 'center'}}>
        <Image
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            backgroundColor: `${item.color}`,
            width: Dimensions.get('screen').width / 2.9,
            height: Dimensions.get('screen').height / 8.6,
          }}
          source={item.url}
        />
      </View>
    </View>
  );
  renderUpperList = ({item}) => (
    <View
      style={{
        paddingVertical: 15,
        width: Dimensions.get('screen').width / 3.4,
        shadowColor: 'black',
        elevation: 5,
        // height: Dimensions.get('screen').height / 10,
        // backgroundColor: '#fff',
      }}>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          // width: Dimensions.get('screen').width / 4,
          height: Dimensions.get('screen').height / 20,
          backgroundColor: '#fff',
          margin: 10,
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontFamily: 'Alkatra-Bold',
            fontSize: RFValue(12, 580),
            color: 'black',
          }}>
          {item.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
  leftComponentRender = () => (
    <View>
      <Text
        style={{
          fontSize: RFValue(18, 580),
          width: Dimensions.get('screen').width / 2.5,
          justifyContent: 'center',
          fontFamily: 'Alkatra-Bold',
          color: 'black',
          //   borderWidth: 2,
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
        // alignSelf: 'center',
        // alignContent: 'center',
        alignItems: 'center',
      }}>
      <Icon name="location" type="ionicon" size={24} color={'red'} />
      <Text
        style={{
          fontSize: RFValue(15, 580),
          fontFamily: 'Alkatra-Bold',
          color: 'black',
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
            elevation: 20,
          }} //styling for header component
        />

        {/* Top flat list view */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <FlatList
              data={upperList}
              key={'#'}
              horizontal
              keyExtractor={item => '#' + item.id}
              renderItem={this.renderUpperList}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          {/* end of top flat list view */}

          {/* new view for restaurent text and filter button */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontFamily: 'Alkatra-Bold',
                marginHorizontal: 15,
                fontSize: RFValue(15, 580),
                color: 'black',
              }}>
              Resaturants
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                width: Dimensions.get('screen').width / 5,
                height: Dimensions.get('screen').height / 20,
                justifyContent: 'space-around',
                marginHorizontal: 15,
                alignItems: 'center',
                backgroundColor: '#fff',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'Alkatra-Bold',
                  fontSize: RFValue(12, 580),
                  color: 'black',
                  // alignContent: 'center',
                  // alignItems: 'center',
                }}>
                Filter
              </Text>
              <Icon name="filter" type="ionicon" size={22} />
            </TouchableOpacity>
          </View>

          {/* new view for restaurants list  */}
          <View style={{marginBottom: 150}}>
            <FlatList
              data={restaurantsList}
              key={'-'}
              keyExtractor={item => '-' + item.id}
              renderItem={this.renderRestaurantList}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      </View>
      // external view
    );
  }
}
export default Restaurants;
