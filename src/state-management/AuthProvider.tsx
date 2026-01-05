import { ReactNode, useReducer } from 'react';
import { autReducer } from './reducers/authReducer';
import { AuthContext } from './contexts/authContext';

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, authDispatch] = useReducer(autReducer, '');

  return (
    <AuthContext.Provider value={{ user, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
