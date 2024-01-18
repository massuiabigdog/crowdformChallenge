import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function Cashout({navigation}: {navigation: any})  {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Cashout</Text>
        <Button
          title="Go to Details"
        />
      </View>
    );
};

export default Cashout;
