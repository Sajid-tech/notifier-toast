import { useContext } from 'react';
import { NotifierContext } from '../context/NotifierContext';

export const useNotifier = () => {
  const context = useContext(NotifierContext);
  
  if (context === undefined) {
    throw new Error('useNotifier must be used within a NotifierProvider');
  }
  
  return context;
};
