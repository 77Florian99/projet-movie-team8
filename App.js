import React from 'react';
import {GenreScreen} from "./src/screen/GenreScreen";
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>

    <GenreScreen />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});