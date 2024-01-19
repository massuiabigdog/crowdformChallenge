import { Avatar, Box, Checkbox, HStack, ScrollView } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity, } from 'react-native';
import { CustomButton, CustomInput, CustomText, MainContainer } from '../components';

import BackArrowIcon from '../assets/BackArrowIcon';
import BankIcon from '../assets/BankIcon';
import UserIcon from '../assets/UserIcon';
import AddIcon from '../assets/AddIcon';
import ArrowInput from '../assets/ArrowInput';

function Cashout({ navigation }: { navigation: any }) {

  const contacts = [
    {
      name: 'Kitty',
      image: 'https://randomuser.me/api/portraits/women/56.jpg',
    },
    {
      name: 'Joy',
      image: 'https://randomuser.me/api/portraits/women/86.jpg',
    },
    {
      name: 'Jacqueline',
      image: 'https://randomuser.me/api/portraits/women/16.jpg',
    },
  ]
  const transactionTypes = [
    {
      name: 'Transfer via card number',
      icon: <BankIcon />,
    },
    {
      name: 'Transfer to the same bank',
      icon: <UserIcon />,
    },
    {
      name: 'Transfer to another bank',
      icon: <BankIcon />,
    },
  ]


  const [selectedTransactionType, setSelectedTransactionType] = React.useState(transactionTypes[2].name)
  const [selectedContact, setSelectedContact] = React.useState(contacts[0].name)
  const [amount, setAmount] = React.useState('')
  const [saveDetails, setSaveDetails] = React.useState(false)

  return (
    <>
      <Box safeAreaTop bg="violet.400" />
      <HStack h={20} bg="violet.800" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" >

        <HStack alignItems="center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrowIcon />
          </TouchableOpacity>
          <CustomText>
            Send Money
          </CustomText>
        </HStack>
      </HStack>
      <ScrollView>

        <MainContainer>
          <CustomInput label="Email" onChange={(e) => { }} value='VISA **** **** **** 1234' />
          <CustomText>Available balance : $3469.52</CustomText>
          <CustomText>Choose transaction</CustomText>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row' }}>
            {transactionTypes.map((item, index) => <TouchableOpacity key={index} onPress={() => setSelectedTransactionType(item.name)}
              style={{ backgroundColor: selectedTransactionType === item.name ? '#cccccc' : '#000000', padding: 10, borderRadius: '15px', width: 120, height: 100, alignItems: 'center', margin: 10 }}>
              <Box >
                {item.icon}
                <CustomText>{item.name}</CustomText>
              </Box>

            </TouchableOpacity>)}
          </ScrollView>
          <Box flexDir='row' justifyContent='space-around'>
            <CustomText >Choose payee</CustomText>
            <CustomText>Search payee</CustomText>
          </Box>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <Box style={styles.contactBox} >
                <Box bg='amber.100' w='60px' h='60px' margin='auto' borderRadius='100%'>
                  <Box m='auto'>
                    <AddIcon />
                  </Box>
                </Box>
              </Box>
            </TouchableOpacity>
            {contacts.map((item, index) => <TouchableOpacity key={index} onPress={() => setSelectedContact(item.name)}>
              <Box style={styles.contactBox} bg={item.name === selectedContact ? '#cccccc' : 'amber.100' }>
                <Box m='auto' textAlign='center'>
                  <Avatar size='50px' source={{
                    uri: item.image
                  }} />
                  <CustomText>{item.name}</CustomText>
                </Box>
              </Box>
            </TouchableOpacity>)}
          </ScrollView>
          <Box style={styles.sendMoneyFormContainer} padding={4} shadow='3'>
            <CustomInput rightElement={<ArrowInput />} label="Choose bank" onChange={(e) => null} value='Citibank' />
            <CustomInput rightElement={<ArrowInput />} label="Choose branch" onChange={(e) => null} value='New York' />
            <CustomInput label="Payee name" onChange={(e) => setSelectedContact(e)} value={selectedContact} />
            <CustomInput label="Card number" onChange={() => null} value='1235 6478 990' />
            <CustomInput label="Amount" onChange={(e: string) => setAmount(e)} value={amount} />
            <CustomInput label="Reference" onChange={() => null} value='Cinema Tickets' />
            <Box flexDir='row'>
              <Checkbox isChecked={saveDetails} colorScheme="green" value='' onChange={setSaveDetails}> <CustomText>Save Payee details</CustomText></Checkbox>
            </Box>
            <CustomButton onPress={() => null}>Confirm</CustomButton>
          </Box>
        </MainContainer>
      </ScrollView>

    </>
  );
};

const styles = StyleSheet.create({
  sendMoneyFormContainer: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  contactBox: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
     padding: 10, borderRadius: 15, width: 100, height: 120, alignItems: 'center', margin: 10
  },
  container: {
    backgroundColor: 'lightblue',
    auto: 10,
    margin: 'auto',
    textAlign: 'center',
    alignItems: 'center',

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Cashout;
