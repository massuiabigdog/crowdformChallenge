import React, { useContext, useState } from 'react';
import { Dimensions } from 'react-native';
import { Box, ScrollView } from 'native-base';
import { UserContext } from '../context/user';
import { AuthContext } from '../context';
import { CustomButton, CustomText, ListTransactions, MainContainer, MainHeader } from '../components';
import CreditCardIcon from '../assets/CreditCardIcon';
import SendMoneyIcon from '../assets/SendMoneyIcon';
import ArrowIcon from '../assets/ArrowIcon';
import { colors } from '../utils';
import {
  LineChart,
} from "react-native-chart-kit";

function Dashboard({ navigation }: { navigation: any }) {
  const { transactions, availableAmount, transactionsAmount } = useContext(UserContext);
  const { userName } = useContext(AuthContext);
  const [indexSelectedPoint, setIndexSelectedPoint] = useState(0);
  const white = 'white';
  const primary = '#295EFF';

  const dates = Array.from({ length: 6 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i * 5);
    const formatter = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short' });
    return formatter.format(date);
  });

  const today = new Date();
  const formatter = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: '2-digit' });
  const formattedDate = formatter.format(today);


  return (
    <>
      <ScrollView>
        <MainHeader showAvailableAmount={`$ ${availableAmount.toFixed(2)}`} label='Current account' />
        <MainContainer>
          <Box pointerEvents="none" margin='auto' width='fit-content' style={{
            transform: [{ scale: 1.17 }],
          }} marginTop={-20} marginBottom={30}>
            <CreditCardIcon owner={userName} />
          </Box>
          <CustomButton _text={{
            color: colors.neutral1
          }} bg={colors.secondary} startIcon={<SendMoneyIcon />} onPress={() => navigation.navigate('Cashout')}>Send Money </CustomButton>
          <Box marginTop={4} flexDir='row'>
            <Box>
              <CustomText>Insights</CustomText>
              <Box flexDir='row'>
                <CustomText h1 bold primary >{transactionsAmount[indexSelectedPoint].toFixed(2)}</CustomText>
                <CustomText bold marginTop={3} marginLeft={1} gray >USD</CustomText>
              </Box>
            </Box>
            <Box alignContent='center' marginLeft='auto' flexDir='row'>
              <CustomText gray marginTop={4} marginRight={1}>{formattedDate}</CustomText>
              <Box m='auto'>
                <ArrowIcon />
              </Box>
            </Box>
          </Box>
          <Box overflow='hidden' marginLeft={'-60px'}>
            <LineChart
              onDataPointClick={(info) => {
                const {
                  index,
                } = info;
                setIndexSelectedPoint(index);
              }}
              getDotColor={(value, index) => (index !== indexSelectedPoint ? (white) : (primary))}
              data={{
                labels: dates,
                datasets: [
                  {
                    data: transactionsAmount
                  }
                ]
              }}
              width={Dimensions.get("window").width + 80} // from react-native
              height={220}

              withShadow={false}
              withVerticalLines={false}
              withHorizontalLabels={false}
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "white",
                backgroundGradientTo: "white",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(21,115,255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(21,115,255, ${opacity})`,
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: colors.blue,
                },
              }}
              bezier

            />
          </Box>
          <ListTransactions transactions={transactions} />

        </MainContainer>
      </ScrollView>

    </>
  );
};

export default Dashboard;
