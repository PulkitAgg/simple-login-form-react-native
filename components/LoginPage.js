import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FormLabel, FormInput, Button} from 'react-native-elements'
export default class LoginPage extends Component {
     constructor(props) {
          super(props);
          this.state = {
               showText: true,
               input:'',
               password:''
          };
     }
     setPassword(pass) {
          console.log("in someFunction",pass);
          this.setState({password:pass});
     }
     setEmail(input) {
          console.log("i ma in show",input);
          this.setState({input:input});
     }
     login(a,b){
          if(this.state.password == this.state.input){
               console.log("success");
               this.props.navigation.navigate('Success')
               this
          }else {
               console.log("fail");
               this.props.navigation.navigate('Failure')
          }
     }
     render() {
          var input;
          return (
               <View >
                    <FormLabel>Email Id</FormLabel>
                    <FormInput style={{
                         margin: 15,
                         height: 40,
                         borderColor: '#7a42f4',
                         borderWidth: 1
                    }} onChangeText={(text) => this.setEmail(text)}
                    />
                    <FormLabel>Password</FormLabel>

                    <FormInput style={{
                         margin: 15,
                         height: 40,
                         borderColor: '#7a42f4',
                         borderWidth: 1
                    }} onChangeText={(text) => this.setPassword(text)} secureTextEntry={this.state.showText}
                    />

                    <Text onPress={() => {
                         this.setState({
                              'showText': !this.state.showText
                         })
                    }}>Show</Text>

                    <Button title='Login' onPress= {this.login.bind(this,"test",this.input)}/>

               </View>
          );
     }
}

// const styles = StyleSheet.create({
//      container: {
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'center',
//           backgroundColor: '#F5FCFF'
//      },
//      welcome: {
//           fontSize: 20,
//           textAlign: 'center',
//           margin: 10
//      },
//      instructions: {
//           textAlign: 'center',
//           color: '#333333',
//           marginBottom: 5
//      },
//      input: {
//           margin: 15,
//           height: 40,
//           borderColor: '#7a42f4',
//           borderWidth: 1
//      }
// });
