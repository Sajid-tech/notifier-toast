import { ReactNode } from 'react';

export type ToastType = 'success' | 'error' | 'warning' | 'info' | 'loading' | 'custom';

export type ToastPosition = 
  | 'top-left' 
  | 'top-center' 
  | 'top-right' 
  | 'bottom-left' 
  | 'bottom-center' 
  | 'bottom-right';

export interface ToastOptions {
  id?: string;
  type?: ToastType;
  title?: string;
  duration?: number;
  position?: ToastPosition;
  onDismiss?: (id: string) => void;
  onAutoClose?: (id: string) => void;
  dismissible?: boolean;
  className?: string;
  icon?: ReactNode;
  action?: {
    label: string;
    onClick: (id: string) => void;
  };
}

export interface Toast extends ToastOptions {
  id: string;
  type: ToastType;
  message: ReactNode;
  createdAt: number;
  visible: boolean;
  promise?: Promise<any>;
  loading?: {
    message: ReactNode;
    options?: Omit<ToastOptions, 'id' | 'duration'>;
  };
  success?: {
    message: ReactNode | ((data: any) => ReactNode);
    options?: Omit<ToastOptions, 'id' | 'duration'>;
  };
  error?: {
    message: ReactNode | ((error: any) => ReactNode);
    options?: Omit<ToastOptions, 'id' | 'duration'>;
  };
}

export interface ToastProviderProps {
  children: ReactNode;
}

export interface ToastContextValue {
  toasts: Toast[];
  addToast: (message: ReactNode, options?: ToastOptions) => string;
  updateToast: (id: string, message: ReactNode, options?: ToastOptions) => void;
  dismissToast: (id: string) => void;
  removeToast: (id: string) => void;
  removeAllToasts: () => void;
}

export interface ToasterProps {
  position?: ToastPosition;
  limit?: number;
  closeButton?: boolean;
  offset?: string;
  gap?: string;
  visibleToasts?: number;
  newestOnTop?: boolean;
  reverseOrder?: boolean;
  expand?: boolean;
  containerClassName?: string;
  toastClassName?: string;
  theme?: 'light' | 'dark' | 'system';
  richColors?: boolean;
  duration?: number;
  component?: React.ComponentType<{ toast: Toast }>;
}