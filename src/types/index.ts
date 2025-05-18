export type ToastType = 'success' | 'error' | 'warning' | 'info';

export type ToastPosition = 
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'bottom-center';

export interface ToastOptions {
  /**
   * Type of toast
   * @default 'info'
   */
  type?: ToastType;
  
  /**
   * Duration in milliseconds
   * @default 4000
   */
  duration?: number;
  
  /**
   * Custom icon component
   */
  icon?: React.ReactNode;
  
  /**
   * Whether to show the close button
   * @default true
   */
  closable?: boolean;
  
  /**
   * Custom action button
   */
  action?: {
    label: string;
    onClick: () => void;
  };
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Handle on close
   */
  onClose?: () => void;
  
  /**
   * Handle on auto close (when duration expires)
   */
  onAutoClose?: () => void;
}

export interface Toast extends ToastOptions {
  id: string;
  message: React.ReactNode;
  createdAt: number;
}

export interface NotifierContextValue {
  toasts: Toast[];
  position: ToastPosition;
  setPosition: (position: ToastPosition) => void;
  toast: (message: React.ReactNode, options?: ToastOptions) => string;
  success: (message: React.ReactNode, options?: Omit<ToastOptions, 'type'>) => string;
  error: (message: React.ReactNode, options?: Omit<ToastOptions, 'type'>) => string;
  warning: (message: React.ReactNode, options?: Omit<ToastOptions, 'type'>) => string;
  info: (message: React.ReactNode, options?: Omit<ToastOptions, 'type'>) => string;
  remove: (id: string) => void;
  removeAll: () => void;
}