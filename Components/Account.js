import React, {Component} from 'react';
import {ScrollView, TouchableOpacity, Text, View, Image} from 'react-native';

export class Account extends Component {
  render() {
    return (
      <ScrollView style={{flex: 1, padding: 20}}>
        <View
          style={{
            flex: 0.3,
            padding: 20,
            // backgroundColor: 'green',
            // width: 20,
            // height: 20,
          }}>
          <Image
            source={require('../image/profile.png')}
            style={{width: 50, height: 50}}
          />
        </View>
        <View
          style={{
            flex: 0.2,
            // backgroundColor: 'blue'
            marginBottom: 10,
          }}>
          <Text style={{fontSize: 25, color: 'black'}}>
            Name : Shubham Singh Bisht
          </Text>
          <Text style={{fontSize: 25, color: 'black'}}>
            Phone number : +91-955*******
          </Text>
        </View>
        <View
          style={{
            flex: 0.4,
            // backgroundColor: 'red'
          }}>
          <Text
            style={{
              fontSize: 25,
              margin: 20,
              borderBottomWidth: 4,
              color: 'black',
            }}>
            Acoount Details {'>'}
          </Text>
          <Text
            style={{
              fontSize: 25,
              margin: 20,
              borderBottomWidth: 4,
              color: 'black',
            }}>
            Orders {'>'}
          </Text>
          <Text
            style={{
              fontSize: 25,
              margin: 20,
              borderBottomWidth: 4,
              color: 'black',
            }}>
            Saved cards & Wallets {'>'}
          </Text>
          <Text
            style={{
              fontSize: 25,
              margin: 20,
              borderBottomWidth: 4,
              color: 'black',
            }}>
            Saved Address {'>'}
          </Text>
          <Text
            style={{
              fontSize: 25,
              margin: 20,
              borderBottomWidth: 4,
              color: 'black',
            }}>
            Acoount Details {'>'}
          </Text>
          <Text
            style={{
              fontSize: 25,
              margin: 20,
              borderBottomWidth: 4,
              color: 'black',
            }}>
            Acoount Details {'>'}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            // flex: 0.4,
            width: 100,
            height: 45,
            backgroundColor: 'blue',
            borderRadius: 8,
            justifyContent: 'center',
            alignSelf: 'center',
            margin: 20,
          }}
          onPress={() => {
            this.props.navigation.navigate('SignUp');
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              color: 'white',
            }}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default Account;
