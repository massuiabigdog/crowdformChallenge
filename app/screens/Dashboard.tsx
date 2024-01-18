import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

function Dashboard({navigation}: {navigation: any})  {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Dashboard</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    );
};

export default Dashboard;
