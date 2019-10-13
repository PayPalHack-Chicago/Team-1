import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, Switch, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-navigation';
import { withNavigation } from 'react-navigation';
import Slider from '@react-native-community/slider';
var PushNotification = require("react-native-push-notification");
import NotificationPopup from 'react-native-push-notification-popup';

PushNotification.configure({

    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function(token) {
        console.log( 'TOKEN:', token );
    },

    // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
    },

    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
        alert: true,
        badge: true,
        sound: true
    },

    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,

    /**
     * (optional) default: true
     * - Specified if permissions (ios) and token (android and ios) will requested or not,
     * - if not, you must call PushNotificationsHandler.requestPermissions() later
     */
    requestPermissions: true,
});


export default class Settings extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        harshness: 1
      }
    }

    onBackPress = () => {
        this.props.navigator.navigate('Home');
    }

    render() {
      return (
        <View stlye={{flex:1,alignItems:'center', justifyContent:'center'}}>
            <SafeAreaView>
            </SafeAreaView>

            <View style={{display:'flex', flexDirection:'row', borderBottomWidth:1, borderBottomColor:'grey', width:'100%', position:'absolute', top:30}}>
                <Icon.Button backgroundColor='white' name="arrow-left" color="black" size={39} style={{marginRight:23, marginLeft:23, marginTop: 20, marginBottom: 20}} onPress={() => {this.onBackPress(); console.log('b')}}></Icon.Button>
                <Text style={{marginRight:45, marginLeft:25, marginTop: 25, marginBottom: 20, fontSize:39, fontWeight:'bold'}}>Settings</Text>
            </View>
            <View style={{display:'flex', flexDirection:'column', width:'100%', justifyContent:'center',}}>
                <Text style={{marginTop: 300, fontSize: 32, textAlign:'center'}}>
                    Select notification harshness
                </Text>
                <Slider
                   style={{width: 200, height: 40, marginLeft:85}}
                   minimumValue={1}
                   step={1}
                   maximumValue={3}
                   minimumTrackTintColor="#FF0000"
                   maximumTrackTintColor="#000000"
                   onValueChange={value => this.setState({harshness: value})}
                 />
                 <Text style={{textAlign:'center'}}>{this.state.harshness}</Text>
                 <Button title="Test me" onPress={() => {this.buttonPressed()}}/>
              </View>
              <NotificationPopup ref={ref => this.popup = ref} />
        </View>
    )}

    buttonPressed() {
      // return a random notification message in string
      let harshness = this.state.harshness.toString();
        function getMsg(harshness) {
          let notifications = {
            "1": [
              "Try to get in your next credit card payment! It's due November 25!",
              "Pay off your monthly instalment before it grows!"
            ],
            "2": [
              "You owe $638.27, this will grow $0.48 if you don't pay today!",
              "Debt racks up quick! You'll have to pay $0.48 more if you don't pay today!",
              "Only three things are inevitable in life: death, taxes and debt. Maybe not that last one if you pay off this month’s debt on October 12",
              "You’re not responding to these notifications. That’s fine, I’ll just stop bothering you then.",
              "Why won’t you text me back? I miss you.",
              "I miss our little rendezvous every month. Come pay your debt off."
            ],
            "3": [
              "You really should be paying this back. You racked up $14.47 in interest the past month.",
              "Every month you don’t pay off your debt is another month your otter goes hungry. But I guess you like that, don’t you?",
              "You aren't paying your debts and I am going tell your Mom!"
            ]
          }

          return notifications[harshness][Math.floor(Math.random() * notifications[harshness].length)]
        }
        let msg = getMsg(harshness);
        PushNotification.localNotification({
            title: "Hey!", // (optional)
            message: msg, // (required)
            playSound: true, // (optional) default: true
            soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)*/}

            repeatType: 'day', // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.*/}
            actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more*/}
        });
        let greetings = ["Hey, Angela!", "Hey, it's me, Otto!", "Hey, did you forget about me?"]

        this.popup.show({
            appIconSource: require('./assets/icon.jpg'),
            onPress: function() {console.log('Pressed')},
            appTitle: 'Glim',
            timeText: 'Now',
            title: greetings[Math.floor(Math.random() * 3)],
            body: msg,
            slideOutTime: 5000
        });
    }
}
