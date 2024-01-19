import React, { useContext, useState } from 'react';
import { AuthContext } from '../context';
import { BottomContent, CustomButton, CustomInput, CustomLink, CustomText, MainContainer, MainHeader } from '../components';
import { Box, Checkbox } from 'native-base';
import { emailIsValid } from '../utils';

function SignUp({ navigation }: { navigation: any }) {
  const { signUp } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [agreeWithTerms, setAgreeWithTerms] = useState(false);

  const formIsValid = () => {
    return firstName.length > 0 && email.length > 0 && password.length > 7 && emailIsValid(email) && agreeWithTerms;
  }
  const allowedToLogin = formIsValid();

  const handleSignup = (user: any) => {
    signUp(user);
    navigation.navigate('Login');
  }

  return (
    <>
      <MainHeader label='Sign up' />
      <MainContainer>
        <>
          <CustomText>Create an account</CustomText>
          <CustomText>Add your personal details below</CustomText>
          <CustomInput label="First Name" onChange={(e) => setFirstName(e)} value={firstName} />
          <CustomInput label="Last Name" onChange={(e) => setLastName(e)} value={lastName} />
          <CustomInput label="Email" onChange={(e) => setEmail(e)} value={email} />
          <CustomInput isPassword={true} label="Password" placeholder='Password (Min. 8 characters)'  onChange={(e) => setPassword(e)} value={password} />
          <Box flexDir='row'>
            <Checkbox isChecked={agreeWithTerms} colorScheme="green" value='' onChange={setAgreeWithTerms} />
            <CustomText>By creating an account your agree
              to our <CustomLink onPress={() => alert('ss')}> Term and Condtions </CustomLink></CustomText>
          </Box>
        </>

      </MainContainer>
      <BottomContent>
        <CustomButton disabled={!allowedToLogin} onPress={() => handleSignup({email, password, firstName, lastName})}>Sign Up </CustomButton>
        <Box flexDir='row'>
          <CustomText>{'Already have an account?  '}</CustomText>
          <CustomLink onPress={() => navigation.navigate('Login')}>Log in</CustomLink>
        </Box>
      </BottomContent></>
  );
};

export default SignUp;
