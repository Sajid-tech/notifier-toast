import React, { createContext, useState, useCallback, useEffect } from 'react';
import { ToastProps, ToastOptions, ToastContextValue } from '../types';
import { generateId } from '../utils/helpers';
import { ToastContainer } from './ToastContainer';

export const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = useCallback((message: string, options?: ToastOptions) => {
    const id = generateId();
    const toast: ToastProps = {
      id,
      message,
      type: options?.type || 'default',
      duration: options?.duration || 4000,
      ...options
    };

    setToasts(prev => [...prev, toast]);
    return id;
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  useEffect(() => {
    toasts.forEach(toast => {
      if (toast.duration) {
        const timer = setTimeout(() => {
          removeToast(toast.id);
        }, toast.duration);
        return () => clearTimeout(timer);
      }
    });
  }, [toasts, removeToast]);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

export const Toast: React.FC = () => {
  return <ToastContainer />;
};