import { useContext } from 'react';
import { WorkoutsContext } from '../context/WorkoutContext';

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);
  if (!context) {
    throw Error(
      'userWorkoutsContext must be used inside an WorkoutsContextProvider'
    );
  }
  return context;
};
