import React, { useEffect } from 'react';
import { ToastItem } from './ToastItem';
import { ToastProvider, useToastContext } from './ToastContext';
import { ToasterProps, ToastPosition } from '../types';
import { setToastHandler } from './toast';

const positionClasses: Record<ToastPosition, string> = {
  'top-left': 'top-0 left-0',
  'top-center': 'top-0 left-1/2 -translate-x-1/2',
  'top-right': 'top-0 right-0',
  'bottom-left': 'bottom-0 left-0',
  'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2',
  'bottom-right': 'bottom-0 right-0',
};

const getStackDirection = (position: ToastPosition) => {
  return position.startsWith('top') ? 'flex-col' : 'flex-col-reverse';
};

const ToasterInner: React.FC<ToasterProps> = ({
  position = 'top-right',
  autoClose = true,
  autoCloseDuration = 3000,
  limit = 5,
}) => {
  const { toasts, removeToast, addToast } = useToastContext();

  useEffect(() => {
    // Set the global handler for toast outside of React components
    setToastHandler(addToast);
  }, [addToast]);

  // Limit the number of visible toasts
  const visibleToasts = toasts.slice(0, limit);

  return (
    <div 
      className={`fixed ${positionClasses[position]} p-4 z-50 flex ${getStackDirection(position)} gap-3 max-w-md pointer-events-none`}
      aria-live="polite"
    >
      {visibleToasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <ToastItem 
            toast={{
              ...toast,
              duration: autoClose ? (toast.duration || autoCloseDuration) : undefined,
            }}
            onClose={() => removeToast(toast.id)}
          />
        </div>
      ))}
    </div>
  );
};

export const Toaster: React.FC<ToasterProps> = (props) => {
  return (
    <ToastProvider>
      <ToasterInner {...props} />
    </ToastProvider>
  );
};