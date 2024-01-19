import React, { useContext, useState } from 'react';
import { Pressable } from 'react-native';
import { AuthContext } from '../context';
import { BottomContent, CustomButton, CustomInput, CustomLink, CustomText, MainContainer, MainHeader } from '../components';
import { Box } from 'native-base';

import LoginItem from '../assets/LoginIcon';
import EyeIcon from '../assets/EyeIcon';
import { emailIsValid } from '../utils';

function Login({ navigation }: { navigation: any }) {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const formIsValid = () => {
    return email.length > 0 && password.length > 7 && emailIsValid(email);
  }
  const allowedToLogin = formIsValid();

  return (
    <>
      <MainHeader label='Log in' />
      <MainContainer>
        <>
          <CustomText>Login</CustomText>
          <CustomText>Log in to continue</CustomText>
          <LoginItem />
          <CustomInput label="Email" onChange={(e) => setEmail(e)} value={email} />
          <CustomInput isPassword={isPasswordVisible} label="Password" rightElement={<Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Box opacity={isPasswordVisible ? 1 : .5}>
              <EyeIcon />
            </Box>
          </Pressable>} onChange={(e) => setPassword(e)} value={password} />
          <Box marginLeft='auto' marginTop={3} >
            <CustomLink onPress={() => navigation.navigate('SignUp')}>Forgot your password ?</CustomLink>
          </Box>
        </>

      </MainContainer>
      <BottomContent>
        <CustomButton disabled={!allowedToLogin} onPress={signIn}>Log in</CustomButton>
        <Box flexDir='row'>
          <CustomText>{'Dont have an account? '}</CustomText>
          <CustomLink onPress={() => navigation.navigate('SignUp')}>Sign Up</CustomLink>
        </Box>
      </BottomContent>
    </>


  );
};

export default Login;
