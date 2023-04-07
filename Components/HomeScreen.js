import React, {Component} from 'react';
import {Dimensions, FlatList} from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
  Width,
} from 'react-native';
import {SwiperFlatList, showPagination} from 'react-native-swiper-flatlist';
import {Header, Icon} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';

// array for swiper list
const Data = [
  {
    key: 1,
    name: 'Sushi',
    sutext: '12 items',
    url: require('../image/HomeScreen/burger.png'),
    nav: 'Details',
    text: 'You don’t need a silver fork to eat good food.',
  },
  {
    key: 2,
    name: 'Pizza',
    sutext: '13 items',
    url: require('../image/HomeScreen/pizzaSlider.png'),
    nav: 'Pizza',
    text: 'You don’t need a silver fork to eat good food.',
  },
  {
    key: 3,
    name: 'Salad',
    sutext: ' 11 items',
    url: require('../image/HomeScreen/spicy.png'),
    nav: 'Salad',
    text: 'You don’t need a silver fork to eat good food.',
  },
  {
    key: 4,
    name: 'Speghati',
    sutext: ' 11 items',
    url: require('../image/HomeScreen/vege.png'),
    nav: 'Noodle',
    text: 'You don’t need a silver fork to eat good food.',
  },
];
const Image_data = [
  {
    key: 1,
    name: 'Rajma',
    url: require('../image/HomeScreen/1.png'),
    price: '70 ₹',
    quant: '/250g',
    type: 'indian',
    text: 'You don’t need a silver fork to eat good food.',
  },

  {
    key: 2,
    name: 'Chicken biryani',
    url: require('../image/HomeScreen/3.png'),
    price: '200 ₹',
    quant: '/250g',
    type: 'indian',
    text: 'You don’t need a silver fork to eat good food.',
  },

  {
    key: 3,
    name: 'Malai Paneer',
    url: require('../image/HomeScreen/5.png'),
    price: '100 ₹',
    quant: '/250g',
    type: 'indian',
    text: 'You don’t need a silver fork to eat good food.',
  },

  {
    key: 4,
    name: 'Red Pasta',
    url: require('../image/HomeScreen/7.png'),
    price: '90 ₹',
    quant: '/250g',
    type: 'indian',
    text: 'You don’t need a silver fork to eat good food.',
  },
];
const Square_image = [
  {
    key: 1,
    name: 'Rajma',
    url: require('../image/HomeScreen/2.png'),
    price: '250 ₹ ',
    quant: '/250g',
    type: 'indian',
    text: 'You don’t need a silver fork to eat good food.',
  },
  {
    key: 2,
    name: 'Biryani',
    url: require('../image/HomeScreen/4.png'),
    price: '200 ₹ ',
    quant: '/250g',
    type: 'indian',
    text: 'You don’t need a silver fork to eat good food.',
  },
  {
    key: 3,
    name: 'Malai chapp',
    url: require('../image/HomeScreen/6.png'),
    price: '80 ₹ ',
    quant: '/250g',
    type: 'indian',
    text: 'You don’t need a silver fork to eat good food.',
  },
  {
    key: 4,
    name: 'Pasta',
    url: require('../image/HomeScreen/8.png'),
    price: '150 ₹ ',
    quant: '/250g',
    type: 'indian',
    text: 'You don’t need a silver fork to eat good food.',
  },
];
//  array for flat list
const Newdata = [
  {
    key: 1,
    name: 'Sushi',
    url: require('../image/sushi.png'),
    price: '50 ₹/ 250 g',
    type: 'indian',
    text: 'You don’t need a silver fork to eat good food.',
  },
  {
    key: 2,
    name: 'Pizza',
    url: require('../image/fullpizza.png'),
    price: '90 ₹/ 250 g',
    type: 'indian',
    text: 'You don’t need a silver fork to eat good food.',
  },
  {
    key: 3,
    name: 'Salad',
    url: require('../image/salad.png'),
    price: '70 ₹/ 250 g',
    type: 'indian',
    text: 'You don’t need a silver fork to eat good food.',
  },
  {
    key: 4,
    name: 'Speghati',
    url: require('../image/noodle.png'),
    price: '800 ₹/ 250 g',
    type: 'indian',
    text: 'You don’t need a silver fork to eat good food.',
  },
  {
    key: 5,
    name: 'Cupcake',
    url: require('../image/icecream.png'),
    type: 'indian',
    price: '100 ₹/ 250 g',
    text: 'You don’t need a silver fork to eat good food.',
  },
  {
    key: 5,
    name: 'Pie',
    url: require('../image/cupcake.png'),
    type: 'indian',
    text: 'You don’t need a silver fork to eat good food.',
  },
  {
    key: 5,
    name: 'Noodle',
    url: require('../image/noodle.png'),
    type: 'indian',
    text: 'You don’t need a silver fork to eat good food.',
  },
  {
    key: 5,
    name: 'Pastry',
    url: require('../image/sushi.png'),
    type: 'indian',
    text: 'You don’t need a silver fork to eat good food.',
  },
];
class HomeScreen extends Component {
  // header left component
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

  // header right component
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

  // swiper list function
  renderItemlist = ({item}) => (
    <View style={styles.tiles_view}>
      <Image
        source={item.url}
        style={{
          width: Dimensions.get('screen').width / 1.06,
          height: Dimensions.get('screen').height / 5,
          borderRadius: 20,
        }}
      />
    </View>
  );

  //flat list render
  flatlistRender = ({item}) => (
    <View
      style={{
        // backgroundColor: 'red',
        padding: 5,
        width: Dimensions.get('screen').width / 4,
        alignItems: 'center',
        borderRadius: 10,
      }}>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          shadowColor: 'black',
          elevation: 5,
        }}>
        <Image
          source={item.url}
          style={{
            // padding: '8%',
            height: Dimensions.get('screen').height / 11,
            width: Dimensions.get('screen').width / 5,
          }}
        />
      </View>
      <Text
        style={{
          fontFamily: 'Alkatra-Regular',
          paddingTop: 10,
          color: 'black',
        }}>
        {item.name}
      </Text>
    </View>
  );

  // horizonatal flat list popular
  flatlistHorizontal = ({item}) => (
    <View
      style={{
        // justifyContent: 'space-evenly',
        padding: 2,
        backgroundColor: 'white',
        margin: 8,
        borderRadius: 20,
        alignItems: 'center',
        // marginHorizontal: 5,
        width: Dimensions.get('screen').width / 2.8,
        shadowColor: 'black',
        elevation: 2,

        // height: Dimensions.get('screen').height / 8,
        // width: Dimensions.get('screen').width / 2.3,

        // alignContent: 'center',
      }}>
      <Image
        source={item.url}
        style={{
          // margin: 10,
          width: Dimensions.get('screen').width / 2.9,
          height: Dimensions.get('screen').height / 7,
          borderRadius: 20,
        }}
      />
      <Text
        style={{
          fontSize: RFValue(14, 580),
          textAlign: 'center',
          fontFamily: 'Alkatra-Bold',
          color: 'black',
        }}>
        {item.name}
      </Text>
      <Text
        style={{
          fontSize: RFValue(12, 580),
          // textAlign: 'center',
          fontFamily: 'Alkatra-Regular',
          color: 'black',
        }}>
        {item.text}
      </Text>
      <View
        style={{
          // justifyContent: 'flex-start',
          left: -22,
        }}>
        <Text
          style={{
            fontSize: RFValue(10, 580),
            // textAlign: 'left',
            color: 'green',
            fontFamily: 'Alkatra-Regular',
            // color: 'black',
          }}>
          {item.price}
          <Text
            style={{
              fontSize: RFValue(10, 580),
              // textAlign: 'left',
              color: 'red',
              fontFamily: 'Alkatra-Regular',
              // color: 'black',
            }}>
            {item.quant}
          </Text>
        </Text>
      </View>
    </View>
  );

  // horizontal flat list new restaurants
  newflatlistHorizontal = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 2,
        backgroundColor: 'white',
        margin: 8,
        borderRadius: 20,
        width: Dimensions.get('screen').width / 1.29,
        height: Dimensions.get('screen').height / 8,
        shadowColor: 'black',
        elevation: 2,
      }}>
      {/* text container */}
      <View
        style={{
          width: '60%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: RFValue(15, 580),
            // textAlign: 'center',
            // alignSelf: 'center',
            // alignItems: 'center',
            fontFamily: 'Alkatra-Bold',
            color: 'black',
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: RFValue(10, 580),
            // textAlign: 'center',
            fontFamily: 'Alkatra-Regular',
            color: 'black',
          }}>
          {item.text}
        </Text>
        <Text
          style={{
            fontSize: RFValue(10, 580),
            left: -40,
            color: 'green',
            fontFamily: 'Alkatra-Regular',
          }}>
          {item.price}
          <Text
            style={{
              fontSize: RFValue(10, 580),
              // textAlign: 'center',
              color: 'red',
              fontFamily: 'Alkatra-Regular',
              // color: 'black',
            }}>
            {item.quant}
          </Text>
        </Text>
      </View>
      {/* end of text container */}

      <View
        style={{
          width: '40%',
          // height: Dimensions.get('screen').height / 6,

          // borderWidth: 8,
        }}>
        <Image
          source={item.url}
          style={{
            // justifyContent: 'flex-end',
            alignSelf: 'center',
            width: Dimensions.get('screen').width / 3.4,
            height: Dimensions.get('screen').height / 8.4,
            borderRadius: 20,
          }}
        />
      </View>
    </View>
  );
  render() {
    return (
      <View style={styles.outer_container}>
        {/* header  component  */}
        <Header
          leftComponent={this.leftComponentRender}
          rightComponent={this.rightComponentRender}
          containerStyle={styles.header_style} //styling for header component
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* swiper list view */}
          <View
            style={{
              alignItems: 'center',
              margin: '3%',
              paddingBottom: '11%',
              //   borderWidth: 10,
            }}>
            <View
              style={{
                width: Dimensions.get('screen').width / 1.03,
                alignItems: 'center',
                // height: Dimensions.get('screen').height / 5,
              }}>
              <SwiperFlatList
                // showsHorizontalScrollIndicator={false}
                data={Data}
                renderItem={this.renderItemlist}
                autoplay
                autoplayDelay={2}
                keyExtractor={item => item.id}
                showPagination
                autoplayLoop
                paginationStyle={styles.pagination_style}
                paginationActiveColor="red"
                paginationDefaultColor="white"
                paginationStyleItem={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  shadowColor: 'black',
                  elevation: 5,
                }}
              />
            </View>
          </View>
          {/* end of swiper view */}

          {/* text input  */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: Dimensions.get('screen').width / 1.05,
              alignSelf: 'center',
              //   borderWidth: 3,
              backgroundColor: '#fff',
              borderRadius: 10,
            }}>
            <TextInput
              placeholder="search restaurant and dish"
              style={{
                marginLeft: 10,
                fontSize: RFValue(14, 580),
                fontFamily: 'Alkatra-Bold',
                color: 'black',
                width: '85%',
                // backgroundColor: '#fff',
              }}
            />
            <Icon
              name="search"
              type="ionicon"
              size={25}
              style={{marginRight: 10}}
            />
          </View>
          {/**/}

          {/* flatlist component */}
          <View
            style={{
              marginTop: 10,
            }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={Newdata}
              renderItem={this.flatlistRender}
              keyExtractor={item => item.id}
              numColumns={4}
            />
          </View>

          {/* popular container */}
          <View>
            {/*  for text and button of popular */}
            <View
              style={{
                paddingTop: 10,

                // padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  paddingLeft: 15,
                  fontSize: RFValue(15, 580),
                  color: 'black',
                  fontFamily: 'Alkatra-Bold',
                }}>
                Popular
              </Text>
              <View style={{alignContent: 'flex-end'}}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('Categorie');
                  }}
                  style={{
                    backgroundColor: 'white',
                    width: Dimensions.get('screen').width / 5.4,
                    height: Dimensions.get('screen').width / 10,
                    // justifyContent: 'center',
                    alignItems: 'center',
                    // alignContent: 'center',
                    // alignSelf: 'center',
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      // alignContent
                      // justifyContent: 'flex-end',
                      fontSize: RFValue(15, 580),
                      fontFamily: 'Alkatra-Bold',
                      color: 'black',
                    }}>
                    All
                  </Text>
                  <Icon name="arrow-forward-outline" type="ionicon" />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                alignItems: 'center',
                // backgroundColor: 'red',
                paddingLeft: 5,
              }}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={Image_data}
                renderItem={this.flatlistHorizontal}
                keyExtractor={item => item.id}
                horizontal={true}
              />
            </View>
          </View>
          {/* Square_image */}
          <View style={{marginBottom: 20}}>
            {/*  for text and button of new restorent */}
            <View
              style={{
                paddingTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                // alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: RFValue(15, 580),
                  fontFamily: 'Alkatra-Bold',
                  paddingLeft: 18,
                  color: 'black',
                }}>
                New Restaurant
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Categorie')}
                style={{
                  backgroundColor: 'white',
                  width: Dimensions.get('screen').width / 5.4,
                  height: Dimensions.get('screen').width / 10,
                  alignItems: 'center',
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: RFValue(15, 580),
                    // fontFamily: 'Roboto-Black',
                    fontFamily: 'Alkatra-Bold',
                    color: 'black',
                  }}>
                  All
                </Text>
                <Icon name="arrow-forward-outline" type="ionicon" />
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center', paddingLeft: 10}}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={Square_image}
                renderItem={this.newflatlistHorizontal}
                keyExtractor={item => item.id}
                horizontal={true}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header_style: {
    // padding: 55,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: 'black',
    // shadowOffset: {width: -4, height: 4},
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 20,
    // backgroundColor: '#f7eceb',
  },
  outer_container: {
    // padding: ,
    flex: 1,
    // backgroundColor: '#fff',
    // backgroundColor: 'grey',
  },
  tiles_view: {
    marginRight: 4,
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
  },
  pagination_style: {
    marginBottom: -30,

    // shadowOpacity: 1,
    // shadowRadius: 10,

    // top: 100,
  },
});
export default HomeScreen;
