import { registerRootComponent } from "expo";

import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import { AppNavigation } from "./config/Navigation";

function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppNavigation />
    </View>
  );
}

export default registerRootComponent(App);