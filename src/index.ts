import { Toast, ToastProvider } from './components/Toast';
import { useToast } from './hooks/useToast';
import type { ToastProps, ToastOptions } from './types';

export { Toast, ToastProvider, useToast };
export type { ToastProps, ToastOptions };

// Create a singleton instance
const toast = useToast();
export { toast };