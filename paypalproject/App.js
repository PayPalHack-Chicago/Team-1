import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
    Button,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Registration from './src/registration.js';

import Cosmetics from './src/Cosmetics.js';
import NotificationPopup from 'react-native-push-notification-popup';

var PushNotification = require("react-native-push-notification");

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



class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Text style={{ color:'red' }}>Hi</Text>
                <Button onPress={() => this.props.navigation.navigate('Registration')} title="Go To Registration"/>
                <Button onPress={() => this.props.navigation.navigate('screen4')} title="Go To Co"/>
                <Button onPress={() => {
                    // PushNotification.localNotification({
                    //     /* iOS only properties */
                    //
                    //     /* iOS and Android properties */
                    //     title: "My Notification Title", // (optional)
                    //         message: "My Notification Message", // (required)
                    //     playSound: false, // (optional) default: true
                    //     soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
                    //
                    //     repeatType: 'day', // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
                    //     actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more
                    // });


                    PushNotification.localNotificationSchedule({
                        //... You can use all the options from localNotifications
                        message: "My Notification Message", // (required)
                        date: new Date(Date.now() + 10 * 1000) // in 10 secs
                    });
                    this.popup.show({
                        onPress: function() {console.log('Pressed')},
                        appTitle: 'Glim',
                        timeText: 'Now',
                        title: 'Hey',
                        body: 'This is a sample message.',
                        slideOutTime: 5000
                    });
                }} title="GET NOTIFICATIONS"/>
                <NotificationPopup ref={ref => this.popup = ref} />

            </View>
        );
    }


}

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Registration: {
        screen: Registration,
    },
    screen4: {
        screen: Cosmetics,
    }

}, {
  initialRouteName: 'Home',
});

const App = createAppContainer(AppNavigator);
export default App;

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//               <Text>Hello from Yves</Text>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

