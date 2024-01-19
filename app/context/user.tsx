import React, { useState } from 'react';

export const UserContext = React.createContext({} as UserContextType);

export interface UserContextType {
  transactions: Transaction[];
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

  const [transactions, setTransactions] = useState<Transaction[]>([
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
  ]);

  const userContextValue: UserContextType = {
    transactions,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
}
