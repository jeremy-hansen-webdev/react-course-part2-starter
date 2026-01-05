import { Dispatch } from 'react';
import { LoginOut } from '../reducers/authReducer';
import React from 'react';

interface AuthContextType {
  user: string;
  authDispatch: Dispatch<LoginOut>;
}

export const AuthContext = React.createContext<AuthContextType>(
  {} as AuthContextType
);
