import React, { useContext } from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';
import styled from 'styled-components/native';
import { AuthContext } from '../context';

function Dashboard({navigation}: {navigation: any})  {
  const {signOut} = useContext(AuthContext);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Dashboard</Text>
        <Button
          
          onPress={() => signOut()}
        >Go to Details</Button>
      </View>
    );
};

export default Dashboard;
