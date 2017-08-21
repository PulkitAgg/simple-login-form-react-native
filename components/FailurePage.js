import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Button} from 'react-native-elements'
import { StackNavigator } from 'react-navigation';
export default class FailurePage extends Component {
     constructor(props) {
          super(props);
     }
     render() {
          return (
               <View>
                    <Text>
                         Login Fail
                    </Text>
                    <Button title='Go To Login Page' onPress= {() => this.props.navigation.navigate('Home')}/>
               </View>
          )
     }

}
