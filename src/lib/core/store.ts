import { ReactNode, createContext, useContext } from 'react';
import { Toast, ToastContextValue, ToastOptions, ToastType } from './types';

const createToastStore = () => {
  let toasts: Toast[] = [];
  let listeners: Array<() => void> = [];

  const subscribe = (listener: () => void) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  const getState = () => toasts;

  const setState = (newToasts: Toast[]) => {
    toasts = newToasts;
    listeners.forEach(listener => listener());
  };

  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const addToast = (message: ReactNode, options: ToastOptions = {}): string => {
    const id = options.id || generateId();
    const newToast: Toast = {
      id,
      message,
      type: options.type || 'info',
      duration: options.duration === undefined ? 5000 : options.duration,
      createdAt: Date.now(),
      visible: true,
      dismissible: options.dismissible === undefined ? true : options.dismissible,
      title: options.title,
      position: options.position || 'top-right',
      onDismiss: options.onDismiss,
      onAutoClose: options.onAutoClose,
      className: options.className,
      icon: options.icon,
      action: options.action,
    };

    setState([...toasts, newToast]);
    return id;
  };

  const updateToast = (id: string, message: ReactNode, options: ToastOptions = {}) => {
    setState(
      toasts.map(toast => 
        toast.id === id
          ? { ...toast, message, ...options }
          : toast
      )
    );
  };

  const dismissToast = (id: string) => {
    const toast = toasts.find(t => t.id === id);
    
    if (toast?.onDismiss) {
      toast.onDismiss(id);
    }

    setState(
      toasts.map(toast => 
        toast.id === id
          ? { ...toast, visible: false }
          : toast
      )
    );

    // After animation completes, remove the toast
    setTimeout(() => {
      removeToast(id);
    }, 300);
  };

  const removeToast = (id: string) => {
    setState(toasts.filter(toast => toast.id !== id));
  };

  const removeAllToasts = () => {
    setState([]);
  };

  const promiseToast = <T,>(
    promise: Promise<T>,
    {
      loading,
      success,
      error,
      id = generateId(),
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
      id?: string;
    }
  ) => {
    const loadingToast = addToast(loading.message, {
      id,
      type: 'loading',
      duration: Infinity,
      ...loading.options,
    });

    promise
      .then((data) => {
        const successMessage = typeof success.message === 'function'
          ? success.message(data)
          : success.message;

        updateToast(loadingToast, successMessage, {
          type: 'success',
          duration: 5000,
          ...success.options,
        });

        return data;
      })
      .catch((err) => {
        const errorMessage = typeof error.message === 'function'
          ? error.message(err)
          : error.message;

        updateToast(loadingToast, errorMessage, {
          type: 'error',
          duration: 5000,
          ...error.options,
        });

        throw err;
      });

    return promise;
  };

  return {
    getState,
    subscribe,
    addToast,
    updateToast,
    dismissToast,
    removeToast,
    removeAllToasts,
    promiseToast,
  };
};

// Create a singleton store
export const toastStore = createToastStore();

// React Context
export const ToastContext = createContext<ToastContextValue>({
  toasts: [],
  addToast: () => '',
  updateToast: () => {},
  dismissToast: () => {},
  removeToast: () => {},
  removeAllToasts: () => {},
});

export const useToastContext = () => useContext(ToastContext);

export const createToastTypes = (addToast: (message: ReactNode, options?: ToastOptions) => string) => {
  const createToastTypeMethod = (type: ToastType) => 
    (message: ReactNode, options?: ToastOptions) => 
      addToast(message, { ...options, type });

  return {
    success: createToastTypeMethod('success'),
    error: createToastTypeMethod('error'),
    warning: createToastTypeMethod('warning'),
    info: createToastTypeMethod('info'),
    loading: createToastTypeMethod('loading'),
    custom: createToastTypeMethod('custom'),
  };
};