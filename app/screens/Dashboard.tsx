import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { AuthContext } from '../context';

function Dashboard({navigation}: {navigation: any})  {
  const {signOut} = useContext(AuthContext);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Dashboard</Text>
        <Button
          title="Go to Details"
          onPress={() => signOut()}
        />
      </View>
    );
};

export default Dashboard;
