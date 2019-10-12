import React from 'react';
import { View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;



export default class Card extends React.Component {
    onPress = () => {
        this.props.navigation.navigate('CardDetails', this.props.navigation)
    }

    render() {
        return (
            <View >
                <TouchableOpacity
                    onPress={this.onPress}
                    style={{borderBottomWidth: 1, height: 90, width:336, display:'flex', flexDirection:'row'}}
                >
                    <Icon name='cog' size={40} style={{marginLeft: 10, marginTop:28, marginRight: 22, marginBottom: 25 }}
                          onPress={() => {
                              console.log('test');
                          }}
                    />
                    <Text style={{fontSize:25, fontFamily:'arial', marginLeft: 0, marginTop: 33, marginBottom: 6}}>{this.props.cardTitle}</Text>
                    <Text style={{fontSize:13, fontFamily:'arial', color:'#4A4A4A', marginLeft: 23, marginTop:39}}>Credit {this.props.last4digits}</Text>
                    <Text style={{fontSize:20, fontFamily:'arial', color:'#D0021B', marginLeft: 23, marginTop:34}}>${this.props.debt}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
