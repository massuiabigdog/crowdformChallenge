import { Box, useToast } from 'native-base';
import React, { useState } from 'react';

export const UserContext = React.createContext({} as UserContextType);

export interface UserContextType {
  transactions: Transaction[];
  availableAmount: number;
  transactionsAmount: number[];
  sendMoney: (amount: number, contact: string) => void;
}

export interface Transaction {
  id: string;
  date: string;
  isIncome: boolean;
  label: string;
  type: string;
  amount: number;
}

export function UserProvider({ children }: { children: React.ReactNode }) {

  const [transactions, setTransactions] = useState<Transaction[]>(mockTransactions);
  const [availableAmount, setAvailableAmount] = useState(1000);
  const toast = useToast();
  const [transactionsAmount, setTransactionsAmount] = useState(transactionsAmountInPeriod);

  const userContextValue: UserContextType = {
    transactions,
    availableAmount,
    transactionsAmount,
    sendMoney: (amount, contact) => {
      let newChart = transactionsAmount
      newChart[newChart.length - 1] = newChart[newChart.length - 1] + amount;
      setTransactions([{
        id: String(Math.random()),
        date: 'Today',
        isIncome: false,
        label: `Sent to ${contact}`,
        type: 'income',
        amount,
      }, ...transactions])
      setAvailableAmount(availableAmount - amount);
      setTransactionsAmount(newChart);
      toast.show({
        render: () => {
          return <Box bg="green.500" px="2" py="1" rounded="sm" mb={5}>
            Money sent successfully!
          </Box>;
        }
      });
    },

  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
}


const mockTransactions = [
  {
    id: '1',
    date: "Today",
    isIncome: true,
    label: "Salary Oct",
    type: "income",
    amount: 1200,
  },
  {
    id: '2',
    date: "Yesterday",
    isIncome: false,
    label: "Water Bill",
    type: "water",
    amount: 280,
  },
  {
    id: '3',
    date: "Yesterday",
    label: "Groceries",
    isIncome: false,
    type: "groceries",
    amount: 32,
  },
] as Transaction[];

const transactionsAmountInPeriod = [
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
] as number[];