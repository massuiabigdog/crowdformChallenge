import React, { useState } from 'react';
import { Box, useToast } from 'native-base';

export const AuthContext = React.createContext({} as AuthContextType);

export interface AuthContextType {
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  isSignedIn: boolean;
  userName: string;
  signUp: (user: any) => void;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const toast = useToast();

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [users, setUsers] = useState([
    {
      email: 'Test@test.com',
      password: '12341234',
      firstName: 'Test',
      lastName: 'Last',
    }
  ]) as any[];

  const authContextValue: AuthContextType = {
    signIn: (email, password) => {
      const user = users.find((user: { email: string, password: string }) => user.email === email);
      if (!user) {
        toast.show({
          render: () => {
            return <Box bg="red.500" px="2" py="1" rounded="sm" mb={5}>
              User not found!
            </Box>;
          }
        });
        return;
      }
      if (user.password !== password) return toast.show({
        render: () => {
          return <Box bg="red.500" px="2" py="1" rounded="sm" mb={5}>
            Wrong password!
          </Box>;
        }
      });
      return setIsSignedIn(true)
    },
    signOut: () => setIsSignedIn(false),
    signUp: (user: any) => {
      toast.show({
        render: () => {
          return <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
            Account created successfully!
          </Box>;
        }
      });

      setUsers([...users, user]);
    },
    isSignedIn,
    userName: `${users[0].firstName} ${users[0].lastName}`
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
