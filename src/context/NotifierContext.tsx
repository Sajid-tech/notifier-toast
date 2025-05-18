import React, { createContext, useState, useCallback, useMemo, useEffect } from 'react';
import { NotifierContextValue, Toast, ToastOptions, ToastPosition } from '../types';
import { generateId } from '../utils/helpers';

export const NotifierContext = createContext<NotifierContextValue | undefined>(undefined);

interface NotifierProviderProps {
  children: React.ReactNode;
  defaultPosition?: ToastPosition;
}

export const NotifierProvider: React.FC<NotifierProviderProps> = ({
  children,
  defaultPosition = 'top-right',
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [position, setPosition] = useState<ToastPosition>(defaultPosition);

  const removeToast = useCallback((id: string) => {
    setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));
  }, []);

  const createToast = useCallback(
    (message: React.ReactNode, options?: ToastOptions): string => {
      const id = generateId();
      const toast: Toast = {
        id,
        message,
        createdAt: Date.now(),
        duration: 4000,
        closable: true,
        ...options,
      };

      setToasts((currentToasts) => [...currentToasts, toast]);
      return id;
    },
    []
  );

  // Auto dismiss toasts
  useEffect(() => {
    const timers = toasts.map((toast) => {
      if (toast.duration !== Infinity) {
        const timer = setTimeout(() => {
          removeToast(toast.id);
          toast.onAutoClose?.();
        }, toast.duration);
        return { id: toast.id, timer };
      }
      return null;
    }).filter(Boolean);

    return () => {
      timers.forEach((timer) => {
        if (timer) {
          clearTimeout(timer.timer);
        }
      });
    };
  }, [toasts, removeToast]);

  const contextValue = useMemo(
    () => ({
      toasts,
      position,
      setPosition,
      toast: createToast,
      success: (message: React.ReactNode, options?: Omit<ToastOptions, 'type'>) => 
        createToast(message, { ...options, type: 'success' }),
      error: (message: React.ReactNode, options?: Omit<ToastOptions, 'type'>) => 
        createToast(message, { ...options, type: 'error' }),
      warning: (message: React.ReactNode, options?: Omit<ToastOptions, 'type'>) => 
        createToast(message, { ...options, type: 'warning' }),
      info: (message: React.ReactNode, options?: Omit<ToastOptions, 'type'>) => 
        createToast(message, { ...options, type: 'info' }),
      remove: removeToast,
      removeAll: () => setToasts([]),
    }),
    [toasts, position, createToast, removeToast]
  );

  return (
    <NotifierContext.Provider value={contextValue}>
      {children}
    </NotifierContext.Provider>
  );
};
