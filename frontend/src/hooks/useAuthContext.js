import { authContext } from '../context/';
import { useContext } from 'react';

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error('userAuthContext must be used inside an AuthContextProvider');
  }
  return context;
};
