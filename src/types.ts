export type ToastType = 'success' | 'error' | 'warning' | 'info' | 'default';

export interface ToastOptions {
  type?: ToastType;
  duration?: number;
}

export interface ToastProps extends ToastOptions {
  id: string;
  message: string;
}

export interface ToastContextValue {
  toasts: ToastProps[];
  addToast: (message: string, options?: ToastOptions) => string;
  removeToast: (id: string) => void;
}