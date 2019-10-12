import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, Switch, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-navigation';
import { withNavigation } from 'react-navigation';
import Hat from './components/hat.js';
import NoHat from './components/noHat.js'


export default class Shop extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        hat: false
      }
    }

    onAddPress = () => {
        this.setState({hat: true});
    }


    render() {
          const { res } = this.state
          return (
            <View stlye={{flex:1,alignItems:'center', justifyContent:'center'}}>
                <SafeAreaView>
                </SafeAreaView>
                <View style={{display:'flex', flexDirection:'row', borderBottomWidth:1, borderBottomColor:'grey', width:'100%', position:'absolute', top:30}}>
                    <Icon.Button backgroundColor='white' name="arrow-left" color="black" size={39} style={{marginRight:23, marginLeft:23, marginTop: 20, marginBottom: 20}} onPress={() => this.props.navigation.goBack()}/>
                    <Text style={{marginRight:45, marginLeft:25, marginTop: 25, marginBottom: 20, fontSize:39, fontWeight:'bold'}}>Shop</Text>
                    <Image source={require('./assets/500clams.jpg')} style={{width: 100, height:50, marginTop:25, marginLeft: -10}}/>
                </View>
                <Image source={require('./assets/Item.jpg')} style={{width:350, height: 100, marginTop:100, marginLeft:13, marginRight: 10}}/>

                {this.state.hat ? <Hat/> : <NoHat/>}

                <TouchableOpacity
                    style={{backgroundColor:'#3c9bed',
                        borderRadius:10,
                        borderWidth: 1,
                        borderColor: '#3c9bed',
                        width:'90%',
                        marginLeft:20,
                        marginTop:15
                      }}
                    onPress={() => this.onAddPress()}
                    underlayColor='#fff'>
                    <Text style={{textAlign:'center', color:"white", fontSize:15, paddingTop:15, paddingBottom:15}}>ADD TO CLOSET</Text>
                </TouchableOpacity>
            </View>

          )
    }
}
