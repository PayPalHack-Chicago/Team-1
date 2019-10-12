import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, Switch, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-navigation';
import { withNavigation } from 'react-navigation';

export default class NoHat extends React.Component {
    render() {
      return (
        <Image source={require('../assets/Otter.png')} style={{width:380,height:450, marginTop:30}}/>
      )
    }
}
