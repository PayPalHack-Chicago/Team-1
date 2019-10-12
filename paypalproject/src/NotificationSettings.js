import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, Switch, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-navigation';
import { withNavigation } from 'react-navigation';
import Slider from '@react-native-community/slider';

export default class Settings extends React.Component {
    render() {
      return (
        <View stlye={{flex:1,alignItems:'center', justifyContent:'center'}}>
            <SafeAreaView>
            </SafeAreaView>

            <View style={{display:'flex', flexDirection:'row', borderBottomWidth:1, borderBottomColor:'grey', width:'100%', position:'absolute', top:30}}>
                <Icon.Button backgroundColor='white' name="arrow-left" color="black" size={39} style={{marginRight:23, marginLeft:23, marginTop: 20, marginBottom: 20}} onPress={() => this.props.navigation.goBack()}/>
                <Text style={{marginRight:45, marginLeft:25, marginTop: 25, marginBottom: 20, fontSize:39, fontWeight:'bold'}}>Settings</Text>
            </View>

            <Text>
                Lorem Ipsum
            </Text>

            <Slider
                style={{width: 200, height: 40}}
                minimumValue={0}
                maximumValue={5}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
            />

        </View>

      )
    }
}
