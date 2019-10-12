import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    StatusBar,
    Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Card from './src/components/Card.js'
import AsyncStorage from '@react-native-community/async-storage';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Registration from './src/registration.js';

import Cosmetics from './src/Cosmetics.js';
import NotificationPopup from 'react-native-push-notification-popup';
import Topbar from './src/components/Topbar'

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
        this.state = {
          Current: 'HOME', // Current refers page being displayed
        };
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <SafeAreaView>
                </SafeAreaView>

                <View style={{display:'flex', flexDirection:'row', borderBottomWidth:1, borderBottomColor:'grey', width:'100%', position:'absolute', top:30}}>
                    <Icon name="bars" color="grey" size={39} style={{marginRight:94, marginLeft:23, marginTop: 20, marginBottom: 20}}></Icon>
                    <Image source={require('./src/assets/logo.png')} style={{width: 62.41, height: 62.32, marginRight: 86.59, marginTop:10, marginBottom: 0, marginLeft: 8 }}/>
                    <Icon name="plus" color="grey" size={39} style={{marginTop: 20, marginBottom: 20, marginRight: 30, marginLeft: 22}} ></Icon>
                </View>

                <View style={{backgroundColor: '#f7f7f7', width:'100%', marginTop:0}}>
                    <Text style={{marginLeft: 23, marginRight: 239, marginTop: 23, fontFamily:'arial', fontSize: 17}}>Howdy, Angela</Text>
                    <Text style={{marginLeft: 23, marginTop:5, marginBottom:31, fontSize: 25, fontFamily: 'arial'}}>Let's get crackin'!</Text>
                </View>

                <Card cardTitle='AMEX1' last4digits='1234' debt='638.27' card='amex' navigation={this.props.navigation}/>

                <View style={ styles.bottomView}>
                  <Button title="HOME" onPress={() => this.setState({Current: 'HOME'})} />
                  <Button title="SHOP" onPress={() => this.setState({Current: 'SHOP'})}/>
                </View>

                <NotificationPopup ref={ref => this.popup = ref} />
            </View>
        );
    }

    async componentDidMount() {
        await AsyncStorage.setItem('@card-IDS', '["AMEX1"]');
        await AsyncStorage.setItem('@card-AMEX1-id', 'AMEX1');
        await AsyncStorage.setItem('@card-AMEX1-last4digits', '1234');
        await AsyncStorage.setItem('@card-AMEX1-debt', '638.27');
        await AsyncStorage.setItem('@card-AMEX1-card', 'amex');

        let cardIDs = await AsyncStorage.getItem('@card-IDS')
        cardIDs = JSON.parse(cardIDs);
        console.log(cardIDs);
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
  headerMode: 'none',
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
  bottomView:{
    width: '100%',
    height: '12%',
    backgroundColor: '#FF9800',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    // justifyContent: 'center',
  },

  textStyle:{

    color: '#fff',
    fontSize:22
  }
});
