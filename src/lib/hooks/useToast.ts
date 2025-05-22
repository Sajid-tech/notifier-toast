import { useContext } from 'react';
import { ToastContext } from '../core/store';
import { ReactNode } from 'react';
import { ToastOptions } from '../core/types';

export const useToast = () => {
  const context = useContext(ToastContext);
  
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider or after Toaster is mounted');
  }
  
  const { addToast, updateToast, dismissToast, removeToast, removeAllToasts, toasts } = context;

  const toast = (message: ReactNode, options?: ToastOptions) => {
    return addToast(message, options);
  };

  toast.success = (message: ReactNode, options?: ToastOptions) => 
    addToast(message, { ...options, type: 'success' });
    
  toast.error = (message: ReactNode, options?: ToastOptions) => 
    addToast(message, { ...options, type: 'error' });
    
  toast.warning = (message: ReactNode, options?: ToastOptions) => 
    addToast(message, { ...options, type: 'warning' });
    
  toast.info = (message: ReactNode, options?: ToastOptions) => 
    addToast(message, { ...options, type: 'info' });
    
  toast.loading = (message: ReactNode, options?: ToastOptions) => 
    addToast(message, { ...options, type: 'loading', duration: Infinity });

  toast.custom = (message: ReactNode, options?: ToastOptions) => 
    addToast(message, { ...options, type: 'custom' });
    
  toast.update = updateToast;
  toast.dismiss = dismissToast;
  toast.remove = removeToast;
  toast.removeAll = removeAllToasts;

  toast.promise = <T,>(
    promise: Promise<T>,
    {
      loading,
      success,
      error,
    }: {
      loading: {
        message: ReactNode;
        options?: Omit<ToastOptions, 'id' | 'duration'>;
      };
      success: {
        message: ReactNode | ((data: T) => ReactNode);
        options?: Omit<ToastOptions, 'id' | 'duration'>;
      };
      error: {
        message: ReactNode | ((error: any) => ReactNode);
        options?: Omit<ToastOptions, 'id' | 'duration'>;
      };
    }
  ) => {
    const id = addToast(loading.message, {
      ...loading.options,
      type: 'loading',
      duration: Infinity,
    });

    promise
      .then((data) => {
        const message = typeof success.message === 'function'
          ? success.message(data)
          : success.message;
          
        updateToast(id, message, {
          ...success.options,
          type: 'success',
          duration: 5000,
        });
        
        return data;
      })
      .catch((err) => {
        const message = typeof error.message === 'function'
          ? error.message(err)
          : error.message;
          
        updateToast(id, message, {
          ...error.options,
          type: 'error',
          duration: 5000,
        });
        
        throw err;
      });

    return promise;
  };

  return {
    toast,
    toasts,
  };
};