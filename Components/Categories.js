import React, {Component} from 'react';
import {Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import {View, Text, FlatList, Image} from 'react-native';
import {Header, Icon, ListItem} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
const Square_image = [
  {
    key: 1,
    name: 'Rajma',
    url: require('../image/HomeScreen/1.png'),
    price: '250 ₹ ',
    quant: '/250g',
    type: 'indian',
    text: 'You don’t need a silver fork to eat good food.',
  },
  {
    key: 2,
    name: 'Biryani',
    url: require('../image/HomeScreen/3.png'),
    price: '200 ₹ ',
    quant: '/250g',
    type: 'indian',
    text: 'You don’t need a silver fork to eat good food.',
  },
  {
    key: 3,
    name: 'Malai chapp',
    url: require('../image/HomeScreen/5.png'),
    price: '80 ₹ ',
    quant: '/250g',
    type: 'indian',
    text: 'You don’t need a silver fork to eat good food.',
  },
  {
    key: 4,
    name: 'Pasta',
    url: require('../image/HomeScreen/7.png'),
    price: '150 ₹ ',
    quant: '/250g',
    type: 'indian',
    text: 'You don’t need a silver fork to eat good food.',
  },
  {
    key: 1,
    name: 'Rajma',
    url: require('../image/HomeScreen/1.png'),
    price: '250 ₹ ',
    quant: '/250g',
    type: 'indian',
    text: 'You don’t need a silver fork to eat good food.',
  },
  {
    key: 2,
    name: 'Biryani',
    url: require('../image/HomeScreen/3.png'),
    price: '200 ₹ ',
    quant: '/250g',
    type: 'indian',
    text: 'You don’t need a silver fork to eat good food.',
  },
  {
    key: 3,
    name: 'Malai chapp',
    url: require('../image/HomeScreen/5.png'),
    price: '80 ₹ ',
    quant: '/250g',
    type: 'indian',
    text: 'You don’t need a silver fork to eat good food.',
  },
  {
    key: 4,
    name: 'Pasta',
    url: require('../image/HomeScreen/7.png'),
    price: '150 ₹ ',
    quant: '/250g',
    type: 'indian',
    text: 'You don’t need a silver fork to eat good food.',
  },
];
class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toogle_categories: false,
    };
  }
  // list render function
  renderListItems = ({item}) => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        // paddingTop: 20,
        marginHorizontal: 15,
        marginTop: 10,
        width: Dimensions.get('screen').width / 1.1,
        height: Dimensions.get('screen').height / 8,
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowColor: 'black',
        elevation: 5,
      }}>
      <View
        style={{
          width: Dimensions.get('screen').width / 1.8,
          justifyContent: 'center',
          //   backgroundColor: 'blue'
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
            textAlign: 'center',
            fontFamily: 'Alkatra-Regular',
            fontSize: RFValue(13, 580),
            margin: 5,
            color: 'black',
          }}>
          {item.text}
        </Text>
      </View>
      <View style={{alignSelf: 'center', justifyContent: 'center'}}>
        <Image
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            // backgroundColor: 'blue',
            width: Dimensions.get('screen').width / 2.9,
            height: Dimensions.get('screen').height / 8.6,
          }}
          source={item.url}
        />
      </View>
    </View>
  );

  //flat list menu items
  renderListItemsMenu = ({item}) => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
        marginHorizontal: 10,
        width: Dimensions.get('screen').width / 2.3,
        height: Dimensions.get('screen').height / 4,
        // backgroundColor: '#fff',
        // borderRadius: 20,
        // shadowColor: 'black',
        // elevation: 5,
      }}>
      <View
        style={{
          justifyContent: 'center',
          // alignContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          marginTop: 30,
          shadowColor: 'black',
          elevation: 10,
          backgroundColor: '#fff',
          width: Dimensions.get('screen').width / 2.4,
          height: Dimensions.get('screen').height / 4.9,
        }}>
        <Image
          style={{
            // marginTop: 10,
            alignSelf: 'center',
            borderRadius: 20,
            width: Dimensions.get('screen').width / 2.5,
            height: Dimensions.get('screen').height / 5,
            // marginBottom: 3,
          }}
          source={item.url}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: 20,
          shadowColor: 'black',
          elevation: 5,
        }}>
        <Text
          style={{
            fontFamily: 'Alkatra-Bold',
            fontSize: RFValue(12, 580),
            color: 'black',
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            paddingHorizontal: 10,
            textAlign: 'center',
            fontFamily: 'Alkatra-Regular',
            fontSize: RFValue(10, 580),
            color: 'black',
          }}>
          {item.text}
        </Text>
      </View>
    </View>
  );
  // header left render function
  leftRenderComponent = () => (
    <TouchableOpacity
      onPress={() => {
        this.props.navigation.goBack(null);
      }}>
      <Icon
        name="arrow-back-outline"
        type="ionicon"
        size={25}
        style={{justifyContent: 'center'}}
      />
    </TouchableOpacity>
  );
  // header center render component function
  centerRenderComponent = () => (
    <Text
      style={{
        color: 'black',
        fontSize: RFValue(15, 580),
        fontFamily: 'Alkatra-Bold',
        justifyContent: 'center',
      }}>
      All Categories
    </Text>
  );
  //  header right render function
  rightRenderComponent = () => (
    <Icon
      name="search"
      type="ionicon"
      size={25}
      style={{justifyContent: 'center'}}
    />
  );

  render() {
    return (
      // external view
      <View>
        {/* Top header component */}
        <Header
          leftComponent={this.leftRenderComponent}
          rightComponent={this.rightRenderComponent}
          centerComponent={this.centerRenderComponent}
          containerStyle={{
            backgroundColor: 'white',
            // justifyContent: 'center',
            // alignContent: 'center',
            backgroundColor: '#fff',
            borderRadius: 20,
            shadowColor: 'black',
            // shadowOffset: {width: -4, height: 4},
            shadowOpacity: 1,
            shadowRadius: 15,
            elevation: 20,
            alignItems: 'center',
          }}
        />
        {/* end of header component
         */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* toggle and tittle view  
        
        */}
          <View
            style={{
              padding: 20,
              // backgroundColor: 'red',
              flexDirection: 'row',
              justifyContent: 'space-between',
              // alignContent: 'space-around',
            }}>
            {/* categories text */}
            <Text
              style={{
                color: 'black',
                fontSize: RFValue(18, 580),
                fontFamily: 'Alkatra-Bold',
                justifyContent: 'center',
              }}>
              Categories
            </Text>

            {/* toggle categories view */}
            <View
              style={{
                flexDirection: 'row',
                //   backgroundColor: 'red',

                justifyContent: 'center',
                //   alignContent: 'center',
                alignItems: 'center',
                //   width: Dimensions.get('screen').width / 3,
              }}>
              {/* icons container 
            
            
            */}
              <View
                style={{
                  width: Dimensions.get('screen').width / 8,
                  backgroundColor: this.state.toogle_categories
                    ? 'orange'
                    : 'white',
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      toogle_categories: true,
                    });
                  }}>
                  <Icon name="list-outline" type="ionicon" size={33} />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  width: Dimensions.get('screen').width / 8,
                  backgroundColor: !this.state.toogle_categories
                    ? 'orange'
                    : 'white',
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      toogle_categories: false,
                    });
                  }}>
                  <Icon name="grid-outline" type="ionicon" size={33} />
                </TouchableOpacity>
              </View>
            </View>
            {/*  end of icons conatiner  */}
          </View>
          {/*  end of tittle and icon conatiner  */}

          {/* Start of flat list */}
          <View
            style={{
              // alignContent: 'center',

              justifyContent: 'center',
              marginBottom: 140,
              alignItems: 'center',
            }}>
            {this.state.toogle_categories ? (
              <FlatList
                showsVerticalScrollIndicator={false}
                key={'-'}
                keyExtractor={item => {
                  '-' + item.id;
                }}
                data={Square_image}
                renderItem={this.renderListItems}
              />
            ) : (
              <FlatList
                showsVerticalScrollIndicator={false}
                key={'#'}
                keyExtractor={item => {
                  '#' + item.id;
                }}
                data={Square_image}
                numColumns={2}
                renderItem={
                  this.renderListItemsMenu
                  // this.state.toogle_categories
                  //   ? this.renderListItems
                  //   : this.renderListItemsMenu
                }
              />
            )}
          </View>
        </ScrollView>
      </View>
      // EXTERNALVIEW
    );
  }
}
export default Categories;
