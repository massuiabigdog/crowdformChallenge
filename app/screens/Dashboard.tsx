import React, { useContext, useState } from 'react';
import { Dimensions } from 'react-native';
import { Box, ScrollView } from 'native-base';
import { UserContext } from '../context/user';
import { CustomButton, CustomText, ListTransactions, MainContainer, MainHeader } from '../components';
import CreditCardIcon from '../assets/CreditCardIcon';
import SendMoneyIcon from '../assets/SendMoneyIcon';
import ArrowIcon from '../assets/ArrowIcon';
import {
  LineChart,
} from "react-native-chart-kit";


function Dashboard({ navigation }: { navigation: any }) {
  const {transactions} = useContext(UserContext);

  const [indexPuntoSeleccionado, setIndexPuntoSeleccionado] = useState(0);
  const white = 'transparent';
  const primary = '#295EFF';

  const dates = Array.from({ length: 6 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i * 5);
    const formatter = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short' });

    return formatter.format(date);
  });
  

  return (
    <>
    <ScrollView>
      <MainHeader isDashboard label='Current account' />
      <MainContainer>
        <Box  marginTop={-20} zIndex={99}>
          <CreditCardIcon />
        </Box>
        <CustomButton startIcon={<SendMoneyIcon />} onPress={() => navigation.navigate('Cashout')}>Send Money </CustomButton>

        <Box flexDir='row'>
          <Box>
            <CustomText>Insights</CustomText>
            <Box flexDir='row'>
              <CustomText>745</CustomText>
              <CustomText>USD</CustomText>
            </Box>
          </Box>
          <Box marginLeft='auto' flexDir='row'>
            <CustomText>20 Jan 24</CustomText>
            <ArrowIcon />
          </Box>
        </Box>
        <Box marginLeft={'-60px'}>

          <LineChart
            onDataPointClick={(info) => {
              const {
                index,
              } = info;
              console.log('IndexMarkerChart', index);
              setIndexPuntoSeleccionado(index);
            }}
            getDotColor={(value, index) => (index !== indexPuntoSeleccionado ? (white) : (primary))} 
            data={{
              labels: dates,
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                  ]
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
              color: (opacity = 1) => `rgba(0, 0, 10, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`,

              propsForDots: {
                r: "6",
              },


            }}
            bezier

          />
        </Box>

        <Box flexDir='row' width='100%' flexBasis='fit-content' justifyContent='space-between' alignItems='center' marginTop={2}>

          {
            dates.map((item, index) => {
              return (
                <CustomText key={index}>{item}</CustomText>
              )
            }
            )}
        </Box>
        <ListTransactions transactions={transactions} />

      </MainContainer>
    </ScrollView>

    </>
  );
};

export default Dashboard;
