import { Dispatch } from 'react';
import { Authorized } from './AuthProvider';
import React from 'react';

interface AuthContextType {
  user: string;
  dispatch: Dispatch<Authorized>;
}

export const AuthContext = React.createContext<AuthContextType>(
  {} as AuthContextType
);
