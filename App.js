import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, Button, Alert} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''}
  }

  render() {
    return (
      <View>
          <TextInput 
            style={{height: 100}}
            placeholder="Input your schedule here"
            onChangeText={(text) => this.setState({text})}
          />
        <ScrollView>
          <Text style={var_styles.text1}>
            {this.state.text}
          </Text>
        </ScrollView>
          <Button
            onPress={() => {
              // Alert.alert('You tapped the button!');
              this.setState({text: "you pressed the button heh"});
            }}
            title="Press Me"
          />
      </View>
    );
  }
}

var var_styles = StyleSheet.create({
  text1: {
    paddingTop: 20, 
    fontSize: 42
  }
});