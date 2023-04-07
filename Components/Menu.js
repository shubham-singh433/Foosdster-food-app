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
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  // Dimensions,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
const Data = [
  {
    key: 1,
    name: 'Sushi',
    sutext: '12 items',
    url: require('../image/sushi.png'),
    nav: 'Details',
  },
  {
    key: 2,
    name: 'Pizza',
    sutext: '13 items',
    url: require('../image/fullpizza.png'),
    nav: 'Pizza',
  },
  {
    key: 3,
    name: 'Salad',
    sutext: ' 11 items',
    url: require('../image/salad.png'),
    nav: 'Salad',
  },
  {
    key: 4,
    name: 'Speghati',
    sutext: ' 11 items',
    url: require('../image/noodle.png'),
    nav: 'Noodle',
  },
  {
    key: 5,
    name: 'Cupcake',
    sutext: ' 11 items',
    url: require('../image/icecream.png'),
    nav: 'Noodle',
  },
  {
    key: 5,
    name: 'Speghati',
    sutext: ' 11 items',
    url: require('../image/cupcake.png'),
    nav: 'Noodle',
  },
];
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Header} from 'react-native-elements';
// import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Icon} from 'react-native-elements';
class Menu extends Component {
  renderItemlist = ({item}) => (
    <View style={styles.row_container}>
      <View style={styles.tiles_view}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate(`${item.nav}`);
          }}>
          <View style={styles.image_container}>
            <Image source={item.url} style={{width: 180, height: 180}} />
          </View>
          <Text style={styles.tiles_text}>{item.name}</Text>
          <Text style={styles.tiles_subtext}>{item.sutext}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  renderLeftcomponent = () => (
    <View style={styles.header_container}>
      <View style={styles.header_text}>
        <Text style={styles.first_text}>We have</Text>
        <Text style={styles.second_text}>Great menu</Text>
      </View>
    </View>
  );
  renderRightComponent = () => (
    <TouchableOpacity
      style={styles.profile_view}
      onPress={() => {
        this.props.navigation.navigate('account');
      }}>
      <Image
        source={require('../image/profile.png')}
        style={{height: 50, width: 50, alignSelf: 'flex-end'}}
      />
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Header
          leftComponent={this.renderLeftcomponent}
          rightComponent={this.renderRightComponent}
          containerStyle={{
            backgroundColor: '#fff',
          }}
        />
        <ScrollView>
          <View style={styles.external_container}>
            <View style={styles.search_view}>
              <View style={styles.search}>
                <TextInput
                  placeholder="Search your fav food"
                  style={styles.text_input}></TextInput>
              </View>

              <View style={styles.filter}>
                <Icon name="filter-outline" type="ionicon" />
                {/* <Image
                  source={require('../image/filter.png')}
                  style={{
                    height: 40,
                    width: 40,
                    alignSelf: 'center',
                    marginTop: 5,
                  }}
                /> */}
              </View>
            </View>
            <View style={styles.items_view}>
              <Text style={styles.menu_items}>Main Dishes</Text>
              <Text style={styles.menu_items}>Dessert</Text>
              <Text style={styles.menu_items}>Drinks</Text>
            </View>

            {/* this View for flatlist */}
            <View
              style={{
                alignSelf: 'center',
              }}>
              <FlatList
                data={Data}
                renderItem={this.renderItemlist}
                numColumns={2}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  external_container: {
    flex: 1,
    // padding: 10,
    // backgroundColor: '#fff',
  },
  header_container: {
    justifyContent: 'space-between',
    // flex: 0.15,
    // backgroundColor: 'orange',
    flexDirection: 'row',
    width: Dimensions.get('screen').width / 1.4,
  },
  header_text: {
    // flex: 0.5,
    // backgroundColor: 'green',
    justifyContent: 'center',
  },
  first_text: {fontSize: RFValue(20, 580), fontWeight: '500'},
  second_text: {fontSize: RFValue(27, 580), fontWeight: 'bold', color: 'black'},
  profile_view: {
    justifyContent: 'center',
    // alignSelf: 'center',
    // flex: 0.5,
    paddingRight: '10%',
    // backgroundColor: 'blue',
  },
  search_view: {
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  search: {
    width: Dimensions.get('screen').width / 1.4,
  },
  text_input: {
    borderWidth: 2,
    borderRadius: 20,
    paddingLeft: '5%',
  },
  filter: {
    // paddingHorizontal: 4,
    width: Dimensions.get('screen').width / 8,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'grey',
    // flex: 0.3,
    justifyContent: 'center',
    // alignSelf: 'flex-end',
    // alignItems: 'flex-end',
    // alignContent: 'flex-end',
    // justifyContent: 'flex-start',
  },
  items_view: {
    // flex: 0.1,
    flexDirection: 'row',
    // backgroundColor: 'purple',
    alignItems: 'center',
    // paddingLeft: '5%',
    marginTop: '10%',
  },
  menu_items: {
    paddingRight: '10%',
    fontSize: RFValue(15, 580),
    fontWeight: '800',
    paddingHorizontal: 10,
    // backgroundColor: 'silver',
  },
  items_tiles: {
    // paddingHorizontal: 1,
    // justifyContent: 'space-between',
    // backgroundColor: 'silver',
    // alignContent: 'center',
  },
  image_container: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#f0c1bb',
  },
  row_container: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  tiles_view: {
    // flex: 0.5,
    // height: 50,
    borderRadius: 20,
    shadowColor: 'black',
    margin: 5,
    marginTop: '10%',
    // shadowOffset: {width: -4, height: 4},
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10,
    backgroundColor: '#f7eceb',
    // justifyContent: 'center',
  },
  tiles_text: {
    // justifyContent: 'flex-end',
    alignSelf: 'center',
    fontSize: RFValue(15, 580),
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  tiles_subtext: {
    alignSelf: 'center',
    // paddingRight: 20,
    fontSize: RFValue(10, 580),
    // textAlign: 'center',
  },
});

export default Menu;
