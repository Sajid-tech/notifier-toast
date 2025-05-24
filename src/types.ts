import { ReactNode } from 'react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export type ToastPosition = 
  | 'top-left' 
  | 'top-center' 
  | 'top-right' 
  | 'bottom-left' 
  | 'bottom-center' 
  | 'bottom-right';

export interface Toast {
  id: string;
  type: ToastType;
  message: ReactNode;
  duration?: number;
  position?: ToastPosition;
  onClose?: () => void;
}

export interface ToastContextValue {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => string;
  removeToast: (id: string) => void;
  removeAllToasts: () => void;
}

export interface ToasterProps {
  position?: ToastPosition;
  autoClose?: boolean;
  autoCloseDuration?: number;
  limit?: number;
}