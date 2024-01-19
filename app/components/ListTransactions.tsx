import { Box, FlatList, HStack, Avatar, VStack, Spacer, Divider } from 'native-base';
import React from 'react';
import GroceriesIcon from '../assets/GroceriesIcon';
import WaterIcon from '../assets/WaterBillIcon';
import IncomeIcon from '../assets/IncomeIcon';
import CustomText from './CustomText';

const icons: { [key: string]: JSX.Element } = {
  income: <IncomeIcon />,
  water: <WaterIcon />,
  groceries: <GroceriesIcon />
}

function ListTransactions({ transactions }: { transactions: any }) {

  function ListItem({ item, index }: { item: any, index: number }) {
    const isNewDay = index === 0 || item.date !== transactions[index - 1].date;
    const lastItemOfTheDay = index === transactions.length - 1 || item.date !== transactions[index + 1].date;
    return <Box marginBottom={2}>
      {isNewDay && <CustomText marginBottom={4} marginTop={4} small gray bold>{item.date}</CustomText>}
      <HStack space={3} alignItems="center">
        <Avatar bg="blue.500" bgColor={'white'} size="50px" >
          {icons[item.type]}
        </Avatar>
        <VStack>
          <CustomText marginTop={-3} h3>{item.isIncome && 'Income: '} {item.label}</CustomText>
        </VStack>
        <Spacer />
        <CustomText marginTop={-3} h3  bold sucess={item.isIncome}>{item.isIncome && '+' }${item.amount}</CustomText>
      </HStack>
  
      {lastItemOfTheDay && <Divider />}
    </Box>
  }

  return <Box>

    <FlatList data={transactions}
      renderItem={({ item, index }) => <ListItem item={item} index={index} />}

      keyExtractor={item => item.id} />
  </Box>;
}

export default ListTransactions;
