import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React from 'react'
import Login from './Login';

function App() {
  return (
    <View>
      <Text style={{color: 'blue', fontSize: 32, fontWeight: 'bold'}}>Jeewantha Fernando</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
      />
      <Login/>
      <Button
        title="Save"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;