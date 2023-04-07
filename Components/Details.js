/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  // TextInput,
  TouchableOpacity,
  // ScrollView,
  Alert,
  Image,
  Dimensions,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// Icon.loadFont();
import {CheckBox, Icon} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
// import {Icon} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
// import MaterialCommunityIcons from 'react-native-icons/MaterialCommunityIcons';
class Details extends Component {
  // this.state: {
  //   isPasswordHidden: boolean,
  //   toggleText: string,
  // // }
  constructor() {
    super();
    this.state = {
      // isPasswordHidden: 'true',
      items: 0,
      liked: false,
    };
  }
  render() {
    return (
      <View style={styles.external_container}>
        <View style={styles.top_view}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Main');
            }}>
            <View style={styles.image_view}>
              <Icon name="chevron-back-sharp" type="ionicon" size={45} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.image_view}>
              <FontAwesome name="shopping-cart" size={30} />
              <Text style={styles.basket_text}>{this.state.items}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.item_image}>
          <Image
            source={require('../image/sushiplate.png')}
            style={{width: 300, height: 300, alignSelf: 'center'}}
          />
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.minusbutton_text}
            onPress={() => {
              if (this.state.items) {
                this.setState({items: this.state.items - 1});
              }
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontWeight: 'bold',
                fontSize: 25,
                color: 'white',
              }}>
              -
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_text}>
            <Text
              style={{
                color: 'white',
                alignSelf: 'center',
                fontWeight: 'bold',
                fontSize: 25,
              }}>
              {this.state.items}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.plusbutton_text}
            onPress={() => {
              this.setState({items: this.state.items + 1});
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontWeight: 'bold',
                fontSize: 25,
                color: 'white',
              }}>
              +
            </Text>
          </TouchableOpacity>
          <View style={styles.newitem}>
            <CheckBox
              checked={this.state.liked}
              checkedIcon="heart"
              uncheckedIcon="heart-o"
              checkedColor="red"
              onPress={() => {
                this.setState({
                  liked: !this.state.liked,
                });
              }}
              style={{
                right: 20,
                alignSelf: 'flex-end',
              }}
              size={50}
            />
          </View>
        </View>

        <View style={styles.order_item}>
          <View style={styles.foodname_view}>
            <View style={styles.foodname}>
              <Text style={{fontSize: 20, fontWeight: '700'}}>
                Special Sushi(Full Set)
              </Text>
              <Text style={{fontSize: 20}}>₹ 200</Text>
            </View>
            <View style={styles.foodprice}>
              <Text style={{fontSize: 20, fontWeight: '900'}}></Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../image/star.png')}
                  style={{width: 15, height: 15, marginTop: 5}}
                />
                <Text style={{fontSize: 15, margin: 4}}>4.8(523)</Text>
              </View>
            </View>
          </View>
          <View style={styles.time_deatils}>
            <View style={styles.containera1}>
              <Image
                source={require('../image/fire.png')}
                style={{width: 20, height: 20, marginTop: 5}}
              />
              <Text
                style={{
                  fontSize: 15,
                  margin: 4,
                }}>
                190 cal
              </Text>
            </View>
            <View style={styles.containera1}>
              <Image
                source={require('../image/rools.png')}
                style={{width: 20, height: 20, marginTop: 5}}
              />
              <Text style={{fontSize: RFValue(10, 580), margin: 4}}>
                8 rools
              </Text>
            </View>
            <View style={styles.containera1}>
              <Image
                source={require('../image/clock.jpg')}
                style={{width: 20, height: 20, marginTop: 5}}
              />
              <Text style={{fontSize: 15, margin: 4}}>15-20 min</Text>
            </View>
          </View>
          <Text
            style={{
              padding: 10,
              fontSize: RFValue(10, 580),
              fontWeight: '900',
            }}>
            Ingridients
          </Text>
          <View style={styles.ingridients}>
            <View style={styles.ing_box}>
              <Image
                source={require('../image/avocado.png')}
                style={{width: 40, height: 40}}
              />
            </View>
            <View style={styles.ing_box}>
              <Image
                source={require('../image/eye.jpg')}
                style={{width: 40, height: 40}}
              />
            </View>
            <View style={styles.ing_box}>
              <Image
                source={require('../image/eye2.jpg')}
                style={{width: 40, height: 40}}
              />
            </View>
            <View style={styles.ing_box}>
              <Image
                source={require('../image/ing2.png')}
                style={{width: 40, height: 40}}
              />
            </View>
            <View style={styles.ing_box}>
              <Image
                source={require('../image/in1.png')}
                style={{width: 40, height: 40}}
              />
            </View>
            <View style={styles.ing_box}>
              <Image
                source={require('../image/add.png')}
                style={{width: 40, height: 40}}
              />
            </View>
          </View>
          {/* <View> */}
          <View style={styles.details}>
            <Text style={{fontSize: RFValue(15, 580), fontWeight: '900'}}>
              Details
            </Text>
            <Text style={{fontSize: 20, fontWeight: '900'}}> {'>'} </Text>
          </View>
          <View style={styles.details}>
            <Text style={{fontSize: 20, fontWeight: '900'}}>
              Free Deliver and return
            </Text>
            <Text style={{fontSize: RFValue(15, 580), fontWeight: '900'}}>
              {'>'}
            </Text>
          </View>
          <View style={styles.details}>
            <Text style={{fontSize: RFValue(15, 580), fontWeight: '900'}}>
              See Reviews
            </Text>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              style={{
                padding: 20,
                // flex: 0.7,
                // justifyContent: 'center',
                backgroundColor: '#BA2B66',
                borderRadius: 20,
                width: Dimensions.get('screen').width / 1.3,
                height: Dimensions.get('screen').height / 14,
                // marginBottom: 10,
                alignContent: 'center',
                // marginVertical: 5,
                paddingVertical: 15,
              }}
              onPress={() => {
                Alert.alert('Item added successfully');
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: RFValue(14, 580),
                  fontWeight: 'bold',
                  color: 'white',
                  // paddingVertical: 2,
                  // marginVertical: 5,
                  // marginVertical: 1,
                }}>
                Add to cart
              </Text>
            </TouchableOpacity>
          </View>
          {/* </View> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  external_container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F0E6CB',
  },
  top_view: {
    flex: 0.1,
    width: Dimensions.get('screen').width / 1.05,
    // backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image_view: {
    opacity: 0.6,
    // alignContent: 'center',
    // justifyContent: 'center',
    // alignContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    height: 50,
    width: 40,
  },
  basket_text: {
    alignSelf: 'center',
    fontSize: RFValue(10, 580),
    color: 'green',
  },
  item_image: {
    alignContent: 'center',
    // justifyContent:
    flex: 0.3,
    margin: 5,
  },
  buttons: {
    // backgroundColor: '#BA2B66',
    flex: 0.1,
    flexDirection: 'row',
    // width: Dimensions.get('screen').width /,
    // justifyContent: 'center',
    // position: 'absolute',
    // alignContent: 'space-between',
    // justifyContent: 'space-around',
    borderRadius: 10,
  },
  newitem: {
    // backgroundColor: 'green',
    // flex: 0.3,
    // alignContent: 'flex-end',
    // justifyContent: 'space-around',
    // alignContent: 'flex-end',
    alignSelf: 'flex-end',
    // borderRadius: 10,
    left: 280,
    zIndex: 1,
    bottom: -40,
  },
  button_text: {
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#BA2B66',
    width: Dimensions.get('screen').width / 4,
    height: 40,
    position: 'absolute',
    zIndex: 1,
    left: 136,
    bottom: -20,
    // alignSelf: 'center',
    justifyContent: 'center',
    // bottom:-15,
  },
  minusbutton_text: {
    // flex: 0.1,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#e3367e',
    width: Dimensions.get('screen').width / 14,
    height: 40,
    position: 'absolute',
    zIndex: 2,
    left: '32%',
    bottom: -20,
    justifyContent: 'center',
  },
  plusbutton_text: {
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#e3367e',
    width: Dimensions.get('screen').width / 14,
    height: 40,
    position: 'absolute',
    zIndex: 1,
    right: '33%',
    bottom: -20,
    justifyContent: 'center',
  },
  order_item: {
    flex: 0.5,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: 'black',
    // margin: 5,
    // shadowOffset: {width: -4, height: 4},
    shadowOpacity: 2,
    shadowRadius: 15,
    elevation: 10,
  },
  foodname_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  foodname: {
    padding: 20,
  },
  foodprice: {
    padding: 20,
  },
  time_deatils: {
    // padding: 5,
    margin: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containera1: {
    flexDirection: 'row',
  },
  ingridients: {
    // flex: 0.1,
    width: Dimensions.get('screen').width / 6,
    flexDirection: 'row',
    marginBottom: 25,
    // backgroundColor: 'green',
  },
  ing_box: {
    paddingRight: 50,
    // paddingBottom: 20,
    // flex: 0.1,9
    width: Dimensions.get('screen').width / 6,
    borderRadius: 10,
    // backgroundColor: ',
  },
  details: {
    paddingLeft: 10,
    // marginTop: 22,
    // flex: 0.2,
    width: Dimensions.get('screen').width / 1.1,
    height: Dimensions.get('screen').height / 21,
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  footer: {
    // paddingLeft: ,
    flex: 0.4,
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Details;
