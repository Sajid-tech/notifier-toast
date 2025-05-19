import { useContext } from 'react';
import { ToastContext } from '../components/Toast';
import { ToastOptions } from '../types';

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    // For singleton usage outside of React components
    const addToast = (message: string, options?: ToastOptions) => {
      // Implementation will be provided by the Provider
      console.warn('Toast used outside ToastProvider');
    };

    return {
      toasts: [],
      addToast,
      removeToast: () => {},
      success: (message: string, options?: Omit<ToastOptions, 'type'>) => 
        addToast(message, { ...options, type: 'success' }),
      error: (message: string, options?: Omit<ToastOptions, 'type'>) => 
        addToast(message, { ...options, type: 'error' }),
      warning: (message: string, options?: Omit<ToastOptions, 'type'>) => 
        addToast(message, { ...options, type: 'warning' }),
      info: (message: string, options?: Omit<ToastOptions, 'type'>) => 
        addToast(message, { ...options, type: 'info' })
    };
  }

  const { addToast, removeToast, toasts } = context;

  return {
    toasts,
    addToast,
    removeToast,
    success: (message: string, options?: Omit<ToastOptions, 'type'>) => 
      addToast(message, { ...options, type: 'success' }),
    error: (message: string, options?: Omit<ToastOptions, 'type'>) => 
      addToast(message, { ...options, type: 'error' }),
    warning: (message: string, options?: Omit<ToastOptions, 'type'>) => 
      addToast(message, { ...options, type: 'warning' }),
    info: (message: string, options?: Omit<ToastOptions, 'type'>) => 
      addToast(message, { ...options, type: 'info' })
  };
};