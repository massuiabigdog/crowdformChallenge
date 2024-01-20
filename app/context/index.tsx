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
  const [userName, setUserName] = useState('') as any[];
  const [users, setUsers] = useState([
    {
      email: 'Test@test.com',
      password: '12341234',
      firstName: 'John',
      lastName: 'Doe',
    }
  ]) as any[];

  const tranformEmailToLowerCaseAndCompare = (receivedEmail: string, userMail: string) => {
    console.log(userMail, receivedEmail)
    return userMail.toLowerCase() === receivedEmail.toLowerCase();
   }

  const authContextValue: AuthContextType = {
    signIn: (email, password) => {
      const user = users.find((user: { email: string, password: string }) => tranformEmailToLowerCaseAndCompare(email, user.email));
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
      setUserName(`${user.firstName} ${user.lastName}`);
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
    userName: userName
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
