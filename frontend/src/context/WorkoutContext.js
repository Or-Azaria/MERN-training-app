import { createContext } from 'react';

export const WorkoutsContext = createContext();

const WorkoutsContextProvider = ({ children }) => {
  return <WorkoutsContext.Provider>{children}</WorkoutsContext.Provider>;
};
