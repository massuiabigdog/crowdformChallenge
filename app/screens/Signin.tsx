import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function SignIn({navigation}: {navigation: any})  {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SignIn</Text>
        <Button
          title="Go to Details"
        />
      </View>
    );
};

export default SignIn;
