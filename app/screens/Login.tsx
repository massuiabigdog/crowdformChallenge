import React, { useContext } from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { AuthContext } from '../context';
import { BottomContent, CustomText, MainContainer, MainHeader } from '../components';
import { View } from 'native-base';

import LoginItem from '../assets/LoginIcon';
import CreditCardIcon from '../assets/CreditCardIcon';

function Login({ navigation }: { navigation: any }) {
  const { signIn } = useContext(AuthContext);


  return (
    <>
      <MainHeader />
      <MainContainer>
        <>
          <CustomText>Login</CustomText>
          <CustomText>Log in to continue</CustomText>
          <LoginItem />

        </>

      </MainContainer>
      <BottomContent>
        <Button
          title="Go to Details"
          onPress={signIn}
        />
      </BottomContent>
    </>


  );
};

export default Login;
