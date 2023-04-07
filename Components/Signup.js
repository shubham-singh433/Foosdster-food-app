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
  // Image,
  Dimensions,
  // CheckBox,
} from 'react-native';
import {CheckBox, Icon} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
// import {Icon} from 'react-native-elements';
class Signup extends Component {
  // this.state: {
  //   isPasswordHidden: boolean,
  //   toggleText: string,
  // // }
  // constructor(props) {
  //   super(props);
  //   thisstate = {
  //     isPasswordHidden: 'true',
  //   };
  // }
  constructor() {
    super();
    this.state = {
      checked: false,
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.external_conatiner}>
          {/* <Icon name="add-circle-outline" type="ionicon" size={30} style={{}} /> */}

          <View style={styles.header_conatiner}>
            <Text style={styles.welcome_text}>Welcome Back !</Text>
            <Text style={styles.sign_intext}>
              Sign in to continue{' '}
              <Icon
                name="thumbs-up-outline"
                type="ionicon"
                style={{
                  size: 35,
                  // color: 'green',
                  // backgroundColor: 'green',
                }}
              />
            </Text>
          </View>

          <View style={styles.content_container}>
            <Text style={styles.email_text}>Email</Text>
            <TextInput
              placeholder="Email"
              keyboardType="default"
              style={styles.email_input}
            />
            <Text style={styles.pswd_text}>Password</Text>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              keyboardType="default"
              style={styles.pswd_input}>
              {/* <Image  source={{ if(this.state.isPasswordHidden):'./'}}/> */}
            </TextInput>

            <View style={styles.sub_container}>
              <View style={styles.forget_pwd}>
                <CheckBox
                  checked={this.state.checked}
                  onPress={() => {
                    this.setState({
                      checked: !this.state.checked,
                    });
                  }}
                />
                <Text
                  style={{
                    fontSize: RFValue(15, 580),
                    marginRight: 25,
                    marginLeft: -20,
                    color: 'black',
                  }}>
                  Remember Me
                </Text>
                <Text style={styles.forget_text}>Forget Password ?</Text>
              </View>
              <TouchableOpacity
                style={styles.btn_container}
                onPress={() => {
                  this.props.navigation.navigate('HomeScreen');
                }}>
                <Text style={styles.btn_text}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.footer_container}>
            <Text style={styles.footer_text}>Or sign in with</Text>
          </View>
          <View
            style={{
              // marginTop: 50,
              flexDirection: 'row',
              // backgroundColor: 'grey',
              justifyContent: 'space-evenly',
              alignSelf: 'center',
              // alignContent: 'center',
              width: Dimensions.get('screen').width / 1.5,
            }}>
            <View
              style={{
                // backgroundColor: 'red',
                // justifyContent: 'flex-start'
                height: 80,
                width: 80,
                justifyContent: 'center',
              }}>
              <Icon name="logo-google" type="ionicon" size={45} />
            </View>
            <View
              style={{
                // backgroundColor: 'red',
                // justifyContent: 'flex-start'
                height: 80,
                width: 80,
                justifyContent: 'center',
              }}>
              <Icon
                name="logo-facebook"
                type="ionicon"
                size={45}
                color="blue"
              />
            </View>
            <View
              style={{
                // backgroundColor: 'red',
                // justifyContent: 'flex-start'
                height: 80,
                width: 80,
                justifyContent: 'center',
              }}>
              <Icon name="logo-apple" type="ionicon" size={55} />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  external_conatiner: {
    flex: 1,
    // backgroundColor: 'lightgreen',
    padding: 20,
  },
  header_conatiner: {
    // flex: 0.2,
    // backgroundColor: 'pink',
    marginTop: 50,
    justifyContent: 'center',
  },
  welcome_text: {
    fontSize: RFValue(35, 580),
    color: 'black',
    fontFamily: 'Alkatra-Bold',
  },
  sign_intext: {
    fontSize: RFValue(20, 580),
    margin: 4,
    fontFamily: 'DeliciousHandrawn-Regular',
    color: 'black',
  },
  content_container: {
    // flex: 0.6,
    padding: 4,
    // backgroundColor: 'blue',
    justifyContent: 'flex-start',
  },
  email_text: {color: 'black', fontSize: RFValue(18, 580), marginTop: 10},
  email_input: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: 'grey',
    // backgroundColor: 'red',
  },
  pswd_text: {color: 'black', fontSize: RFValue(18, 580), marginTop: 10},
  pswd_input: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  sub_container: {
    paddingTop: 20,
    // justifyContent: 'flex-end',
  },
  forget_pwd: {
    // paddingLeft: -20,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignSelf: 'center',
    alignItems: 'center',
  },
  forget_text: {
    // marginLeft: -4,
    fontSize: RFValue(15, 580),
    marginLeft: -15,
    color: 'blue',
    textAlign: 'center',
    // top: 20,
  },
  btn_container: {
    justifyContent: 'center',
    backgroundColor: '#0000ffff',
    borderRadius: 10,
    // justifyContent: 'flex-end',
    height: 60,
    top: 30,
  },
  btn_text: {fontSize: RFValue(20, 580), textAlign: 'center', color: 'white'},
  footer_container: {
    // flex: 0.4,
    // backgroundColor: 'skyblue',
    justifyContent: 'center',
  },
  footer_text: {
    fontFamily: 'DeliciousHandrawn-Regular',
    textAlign: 'center',
    fontSize: RFValue(20, 580),
    marginTop: 60,
    color: 'black',
  },
});

export default Signup;
