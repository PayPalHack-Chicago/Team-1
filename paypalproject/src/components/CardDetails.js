import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-navigation';
import { withNavigation } from 'react-navigation';

export default class CardDetails extends React.Component {

    render() {
        return (
            <ScrollView stlye={{flex:1,alignItems:'center', justifyContent:'center'}}>
                <SafeAreaView>
                </SafeAreaView>
                <View style={{display:'flex', flexDirection:'row', borderBottomWidth:1, borderBottomColor:'grey', width:'100%', position:'absolute', top:30}}>
                    <Icon.Button backgroundColor='white' name="arrow-left" color="black" size={39} style={{marginRight:23, marginLeft:23, marginTop: 20, marginBottom: 20}} onPress={() => this.props.navigation.goBack()}/>
                    <Text style={{marginRight:45, marginLeft:25, marginTop: 25, marginBottom: 20, fontSize:39, fontWeight:'bold'}}>AMEX1</Text>
                    <Icon name="edit" color="black" size={39} style={{marginTop: 30, marginBottom: 25, marginRight: 40, marginLeft: 12}} ></Icon>
                </View>

                <Text style={{position:'relative', marginTop:100, marginLeft: 130, fontFamily:'arial'}}>As of Oct 8, 6:37pm</Text>
                <Text style={{fontWeight:'bold', fontSize:23, marginLeft:73}}>Here's what you owe:</Text>

                <View style={{
                    width: 250,
                    height: 250,
                    borderRadius: 250/2,
                    marginLeft: 65,
                    marginTop: 20,
                    backgroundColor:'#3c9bed',
                  }}>
                    <Text style={{marginLeft: 11, marginTop: 94, fontSize:60, color:'white', fontWeight:'200'}}>$638.27</Text>
                </View>
                <View style={{borderTopWidth: 1, marginTop: 30, borderTopColor:'grey'}}>

                </View>
                <Text style={{ marginTop: 25, fontSize:23, marginLeft: 25}}>You're on a roll!</Text>
                <Text style={{marginLeft: 25, marginTop: 3}}>Keep making those repayments!</Text>

                <Image source={require('../assets/graph.jpg')} style={{width: 310, height: 170, marginRight: 25, marginTop:10, marginBottom: 0, marginLeft: 25 }}/>

                <View style={{marginTop:25, borderTopWidth:1, borderTopColor:'grey', width:'85%', marginLeft:'7.5%'}}></View>
                <Text style={{marginTop:25, marginLeft:25, fontSize:23}}>Remind Yourself</Text>
                <Text style={{marginLeft:25, marginTop:2}}>Given an APR of 10%, you want nudges..</Text>

                <View style={{borderWidth: 0.5, flex: 1, flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', height: 50, marginTop:10}}>
                    <Text style={{ fontSize:20, paddingLeft: 25}}>Daily</Text>
                    <Switch style={{marginRight: 30}}/>
                </View>
                <View style={{borderWidth: 0.5, flex: 1, flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', height: 50}}>
                    <Text style={{ fontSize:20, paddingLeft: 25}}>Weekly</Text>
                    <Switch style={{marginRight: 30}}/>
                </View>
                <View style={{borderWidth: 0.5, flex: 1, flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', height: 50}}>
                    <Text style={{ fontSize:20, paddingLeft: 25}}>Biweekly</Text>
                    <Switch style={{marginRight: 30}}/>
                </View>
            </ScrollView>
        )
    }
}
