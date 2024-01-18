import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../context';

function Login({navigation}: {navigation: any})  {
  const {signIn} = useContext(AuthContext);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login</Text>
        <Button
          title="Go to Details"
          onPress={signIn}
        />
      </View>
    );
};

export default Login;
