import { ReactNode } from 'react';
import { ToastType, ToastPosition } from '../types';
import { useToastContext } from './ToastContext';

// Default values
const DEFAULT_DURATION = 3000; // 3 seconds
const DEFAULT_POSITION: ToastPosition = 'top-right';

// Queue to store toasts before context is initialized
let toastQueue: Array<{
  type: ToastType;
  message: ReactNode;
  duration?: number;
  position?: ToastPosition;
  onClose?: () => void;
}> = [];

let isContextInitialized = false;

// Function to create toast instance when outside of React component
let addToastFn: (options: {
  type: ToastType;
  message: ReactNode;
  duration?: number;
  position?: ToastPosition;
  onClose?: () => void;
}) => string = (options) => {
  if (!isContextInitialized) {
    toastQueue.push(options);
    return 'queued';
  }
  throw new Error('Toast context not initialized. Make sure to render the Toaster component.');
};

// Hook to use inside React components
export const useToast = () => {
  const { addToast, removeToast, removeAllToasts } = useToastContext();

  // Update the global function and process queued toasts
  if (!isContextInitialized) {
    isContextInitialized = true;
    addToastFn = addToast;
    
    // Process any queued toasts
    while (toastQueue.length > 0) {
      const queuedToast = toastQueue.shift();
      if (queuedToast) {
        addToast(queuedToast);
      }
    }
  }

  return {
    success: (message: ReactNode, options = {}) => 
      addToast({ type: 'success', message, ...options }),
    error: (message: ReactNode, options = {}) => 
      addToast({ type: 'error', message, ...options }),
    warning: (message: ReactNode, options = {}) => 
      addToast({ type: 'warning', message, ...options }),
    info: (message: ReactNode, options = {}) => 
      addToast({ type: 'info', message, ...options }),
    remove: removeToast,
    removeAll: removeAllToasts,
  };
};

// External API
export const toast = {
  success: (message: ReactNode, options = {}) => 
    addToastFn({ 
      type: 'success', 
      message, 
      duration: DEFAULT_DURATION, 
      position: DEFAULT_POSITION, 
      ...options 
    }),
  error: (message: ReactNode, options = {}) => 
    addToastFn({ 
      type: 'error', 
      message, 
      duration: DEFAULT_DURATION, 
      position: DEFAULT_POSITION, 
      ...options 
    }),
  warning: (message: ReactNode, options = {}) => 
    addToastFn({ 
      type: 'warning', 
      message, 
      duration: DEFAULT_DURATION, 
      position: DEFAULT_POSITION, 
      ...options 
    }),
  info: (message: ReactNode, options = {}) => 
    addToastFn({ 
      type: 'info', 
      message, 
      duration: DEFAULT_DURATION, 
      position: DEFAULT_POSITION, 
      ...options 
    }),
};

// Initialize toast function
export const setToastHandler = (handler: typeof addToastFn) => {
  addToastFn = handler;
  isContextInitialized = true;
};