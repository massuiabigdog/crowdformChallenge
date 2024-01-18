import React, { useState } from 'react';

export const AuthContext = React.createContext({} as AuthContextType);

export interface AuthContextType {
  signIn: () => void;
  signOut: () => void;
  isSignedIn: boolean;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const authContextValue: AuthContextType = {
    signIn: () => setIsSignedIn(true),
    signOut: () => setIsSignedIn(false),
    isSignedIn,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
