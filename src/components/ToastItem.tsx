import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Toast } from '../types';
import ToastIcon from './ToastIcon';

interface ToastItemProps {
  toast: Toast;
  onRemove: (id: string) => void;
  position: string;
  index: number;
}

export const ToastItem: React.FC<ToastItemProps> = ({ 
  toast, 
  onRemove,
  position,
  index
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const getTypeStyles = () => {
    switch (toast.type) {
      case 'success':
        return 'border-l-green-500 bg-green-50 dark:bg-green-950/30';
      case 'error':
        return 'border-l-red-500 bg-red-50 dark:bg-red-950/30';
      case 'warning':
        return 'border-l-amber-500 bg-amber-50 dark:bg-amber-950/30';
      case 'info':
      default:
        return 'border-l-blue-500 bg-blue-50 dark:bg-blue-950/30';
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onRemove(toast.id);
      toast.onClose?.();
    }, 200);
  };

  useEffect(() => {
    // Trigger entrance animation
    const enterTimer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => {
      clearTimeout(enterTimer);
    };
  }, []);

  const isBottom = position.startsWith('bottom');
  const animationClasses = isBottom
    ? (isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0')
    : (isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0');

  return (
    <div
      className={`
        pointer-events-auto min-w-80 max-w-md border-l-4 rounded-md shadow-lg
        transform transition-all duration-200 ${animationClasses} ${getTypeStyles()}
        ${toast.className || ''}
      `}
      style={{
        zIndex: 9999 - index
      }}
    >
      <div className="flex items-start p-4">
        <div className="flex-shrink-0 pt-0.5">
          <ToastIcon type={toast.type || 'info'} customIcon={toast.icon} />
        </div>
        <div className="ml-3 flex-1">
          <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
            {toast.message}
          </div>
          {toast.action && (
            <div className="mt-2">
              <button
                onClick={toast.action.onClick}
                className="rounded bg-white dark:bg-gray-800 px-2 py-1 text-xs font-medium text-gray-900 dark:text-gray-100 
                  hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                {toast.action.label}
              </button>
            </div>
          )}
        </div>
        {toast.closable !== false && (
          <button
            onClick={handleClose}
            className="ml-4 flex-shrink-0 rounded hover:bg-gray-200 dark:hover:bg-gray-700 p-1 transition-colors"
          >
            <X className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ToastItem;
