import React from 'react';
import { View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;

export default class Topbar extends React.Component {
    render() {
        return (
            <View style={{flex:1, flexDirection:"row", justifyContent:"center", borderBottomWidth: 2, height: 100}}>
                    {/*<Icon name="bars" color="grey" size={50} ></Icon>*/}
                <Image source={require('../assets/logo.png')} style={{width: 80, height: 80}}/>
                {/*<Icon name="plus" color="grey" size={50} ></Icon>*/}
            </View>
        )
    }
}