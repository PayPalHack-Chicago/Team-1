import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, Switch, Button, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-navigation';
import { withNavigation } from 'react-navigation';

export default class NewCard extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        stage: 1,
        stage1text: 'Enter a name',
        stage2text: 'Enter a date',
        stage3text: 'Enter an APR percentage',
        stage4text: 'Enter amount in dollars'

      }
    }

    render() {
          let progress = this.state.stage;
          if (progress === 1) {
            return (
              <View stlye={{flex:1,alignItems:'center', justifyContent:'center'}}>
                  <SafeAreaView>
                  </SafeAreaView>
                  <View style={{display:'flex', flexDirection:'row', borderBottomWidth:1, borderBottomColor:'grey', width:'100%', position:'absolute', top:30}}>
                      <Icon.Button backgroundColor='white' name="arrow-left" color="black" size={39} style={{marginRight:23, marginLeft:23, marginTop: 20, marginBottom: 20}} onPress={() => this.props.navigation.goBack()}/>
                      <Image source={require('./assets/prog1.jpg')} style={{width:240, height:30, marginLeft:0, marginTop:33  }}/>
                  </View>

                  <Text style={{marginTop:100, marginLeft: 25, fontFamily:'arial'}}>Let's get you back on track, Angela</Text>
                  <Text style={{marginTop:5, marginLeft: 25, fontFamily: 'arial', fontSize:21, fontWeight:'bold'}}>Give a name for your card</Text>
                  <TextInput
                      style={{ height: 40, borderColor: 'gray', borderWidth: 1 , marginLeft: 25, marginTop: 50, marginRight: 25}}
                      onChangeText={(text) => this.setState({stage1text: text})}
                      value={this.state.stage1text}
                  />
                  <Button title="next" onPress={() => {this.setState({stage: 2})}}/>

              </View>
            )
          }
          else if (progress === 2) {
            return (
              <View stlye={{flex:1,alignItems:'center', justifyContent:'center'}}>
                  <SafeAreaView>
                  </SafeAreaView>
                  <View style={{display:'flex', flexDirection:'row', borderBottomWidth:1, borderBottomColor:'grey', width:'100%', position:'absolute', top:30}}>
                      <Icon.Button backgroundColor='white' name="arrow-left" color="black" size={39} style={{marginRight:23, marginLeft:23, marginTop: 20, marginBottom: 20}} onPress={() => this.props.navigation.goBack()}/>
                      <Image source={require('./assets/prog2.jpg')} style={{width:240, height:30, marginLeft:0, marginTop:33  }}/>
                  </View>

                  <Text style={{marginTop:100, marginLeft: 25, fontFamily:'arial'}}>Awesome!</Text>
                  <Text style={{marginTop:5, marginLeft: 25, fontFamily: 'arial', fontSize:21, fontWeight:'bold'}}>When is your payment due?</Text>
                  <TextInput
                      style={{ height: 40, borderColor: 'gray', borderWidth: 1 , marginLeft: 25, marginTop: 50, marginRight: 25}}
                      onChangeText={(text) => this.setState({stage2text: text})}
                      value={this.state.stage2text}
                  />
                  <Button title="previous" onPress={() => {this.setState({stage:1})}}/>
                  <Button title="next" onPress={() => {this.setState({stage: 3})}}/>

              </View>
            )

          }
          else if (progress === 3) {
              return (
                <View stlye={{flex:1,alignItems:'center', justifyContent:'center'}}>
                    <SafeAreaView>
                    </SafeAreaView>
                    <View style={{display:'flex', flexDirection:'row', borderBottomWidth:1, borderBottomColor:'grey', width:'100%', position:'absolute', top:30}}>
                        <Icon.Button backgroundColor='white' name="arrow-left" color="black" size={39} style={{marginRight:23, marginLeft:23, marginTop: 20, marginBottom: 20}} onPress={() => this.props.navigation.goBack()}/>
                        <Image source={require('./assets/prog3.jpg')} style={{width:240, height:30, marginLeft:0, marginTop:33  }}/>
                    </View>

                    <Text style={{marginTop:100, marginLeft: 25, fontFamily:'arial'}}>Gotcha, gotcha!</Text>
                    <Text style={{marginTop:5, marginLeft: 25, fontFamily: 'arial', fontSize:21, fontWeight:'bold'}}>What's the APR</Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 , marginLeft: 25, marginTop: 50, marginRight: 25}}
                        onChangeText={(text) => this.setState({stage3text: text})}
                        value={this.state.stage3text}
                    />
                    <Button title="previous" onPress={() => {this.setState({stage:2})}}/>
                    <Button title="next" onPress={() => {this.setState({stage: 4})}}/>

                </View>
              )

          }
          else if (progress === 4) {
            return (
              <View stlye={{flex:1,alignItems:'center', justifyContent:'center'}}>
                  <SafeAreaView>
                  </SafeAreaView>
                  <View style={{display:'flex', flexDirection:'row', borderBottomWidth:1, borderBottomColor:'grey', width:'100%', position:'absolute', top:30}}>
                      <Icon.Button backgroundColor='white' name="arrow-left" color="black" size={39} style={{marginRight:23, marginLeft:23, marginTop: 20, marginBottom: 20}} onPress={() => this.props.navigation.goBack()}/>
                      <Image source={require('./assets/prog4.jpg')} style={{width:240, height:30, marginLeft:0, marginTop:33  }}/>
                  </View>

                  <Text style={{marginTop:100, marginLeft: 25, fontFamily:'arial'}}>Almost done...</Text>
                  <Text style={{marginTop:5, marginLeft: 25, fontFamily: 'arial', fontSize:21, fontWeight:'bold'}}>How much do you owe now?</Text>
                  <TextInput
                      style={{ height: 40, borderColor: 'gray', borderWidth: 1 , marginLeft: 25, marginTop: 50, marginRight: 25}}
                      onChangeText={(text) => this.setState({stage4text: text})}
                      value={this.state.stage4text}
                  />
                  <Button title="previous" onPress={() => {this.setState({stage:3})}}/>
                  <Button title="next" onPress={() => {this.setState({stage: 4})}}/>

              </View>
            )


          }


    }
}
