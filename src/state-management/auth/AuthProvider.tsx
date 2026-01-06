import { useContext } from 'react';
import { ReactNode, useReducer } from 'react';
import { AuthContext } from './authContext';

interface Props {
  children: ReactNode;
}

interface Login {
  type: 'LOGIN';
  username: string;
}

interface Logout {
  type: 'LOGOUT';
}

export const useAuth = () => useContext(AuthContext);

export type Authorized = Login | Logout;

export const authReducer = (user: string, action: Authorized): string => {
  switch (action.type) {
    case 'LOGIN':
      return action.username;
    case 'LOGOUT':
      return '';
    default:
      return user;
  }
};

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, '');
  return (
    <div>
      <AuthContext.Provider value={{ user, dispatch }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
