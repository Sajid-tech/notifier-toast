import { ReactNode } from 'react';
import { ToastOptions } from './types';
import { createToastTypes, toastStore } from './store';

// Main toast function
const createToast = (message: ReactNode, options?: ToastOptions) => 
  toastStore.addToast(message, options);

// Toast type methods
const typedToasts = createToastTypes(createToast);

// Create the enhanced toast function with methods
interface ToastFunction {
  (message: ReactNode, options?: ToastOptions): string;
  success: (message: ReactNode, options?: ToastOptions) => string;
  error: (message: ReactNode, options?: ToastOptions) => string;
  warning: (message: ReactNode, options?: ToastOptions) => string;
  info: (message: ReactNode, options?: ToastOptions) => string;
  loading: (message: ReactNode, options?: ToastOptions) => string;
  custom: (message: ReactNode, options?: ToastOptions) => string;
  dismiss: (id: string) => void;
  update: (id: string, message: ReactNode, options?: ToastOptions) => void;
  promise: typeof toastStore.promiseToast;
  removeAll: () => void;
}

// Combine base function with typed methods
export const toast = Object.assign(createToast, {
  ...typedToasts,
  dismiss: toastStore.dismissToast,
  update: toastStore.updateToast,
  promise: toastStore.promiseToast,
  removeAll: toastStore.removeAllToasts,
}) as ToastFunction;