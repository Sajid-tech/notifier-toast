import React, { useEffect, useState } from 'react';
import { Toast as ToastType } from '../core/types';
import { toastStore } from '../core/store';
import { CheckCircle, AlertCircle, Info, AlertTriangle, X, Loader2 } from 'lucide-react';

interface ToastProps {
  toast: ToastType;
  className?: string;
}

export const Toast: React.FC<ToastProps> = ({ 
  toast, 
  className = '' 
}) => {
  const [progress, setProgress] = useState(100);
  const { id, type, message, title, duration, dismissible, action, icon } = toast;
  
  useEffect(() => {
    if (!toast.visible) return;
    
    if (duration === Infinity || type === 'loading') return;

    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = 100 - (elapsed / duration! * 100);
      
      if (newProgress <= 0) {
        clearInterval(timer);
        if (toast.onAutoClose) {
          toast.onAutoClose(id);
        }
        toastStore.dismissToast(id);
      } else {
        setProgress(newProgress);
      }
    }, 10);

    return () => clearInterval(timer);
  }, [id, duration, type, toast.visible, toast.onAutoClose]);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && dismissible) {
        toastStore.dismissToast(id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [id, dismissible]);

  const getIcon = () => {
    if (icon) return icon;
    
    const iconClasses = "w-4 h-4";
    
    switch (type) {
      case 'success':
        return <CheckCircle className={`${iconClasses} text-emerald-600`} />;
      case 'error':
        return <AlertCircle className={`${iconClasses} text-rose-600`} />;
      case 'warning':
        return <AlertTriangle className={`${iconClasses} text-amber-600`} />;
      case 'info':
        return <Info className={`${iconClasses} text-sky-600`} />;
      case 'loading':
        return <Loader2 className={`${iconClasses} text-indigo-600 animate-spin`} />;
      default:
        return null;
    }
  };

  const getToastClasses = () => {
    const baseClasses = "max-w-sm w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black/5 overflow-hidden";
    const typeClasses = {
      success: "border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-700/90",
      error: "border-l-4 border-rose-500 bg-rose-50 dark:bg-rose-700/90",
      warning: "border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-700/90",
      info: "border-l-4 border-sky-500 bg-sky-50 dark:bg-sky-700/90",
      loading: "border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-700/90",
      custom: "border-l-4 border-gray-500 bg-gray-50 dark:bg-gray-700/90"
    };
    
    return `${baseClasses} ${typeClasses[type]} ${className} ${toast.visible ? 'animate-enter' : 'animate-leave'}`;
  };

  return (
    <div
      className={getToastClasses()}
      role="alert"
      aria-live={type === 'error' ? 'assertive' : 'polite'}
      aria-atomic="true"
    >
      <div className="relative">
        {duration !== Infinity && type !== 'loading' && (
          <div 
            className={`absolute bottom-0 left-0 h-0.5 ${
              type === 'success' ? 'bg-emerald-500' :
              type === 'error' ? 'bg-rose-500' :
              type === 'warning' ? 'bg-amber-500' :
              type === 'info' ? 'bg-sky-500' :
              'bg-indigo-500'
            }`}
            style={{ width: `${progress}%`, transition: 'width 100ms linear' }}
          />
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 pt-0.5">{getIcon()}</div>
          <div className="flex-1 min-w-0">
            {title && (
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</p>
            )}
            <div className={`text-sm ${title ? 'mt-1' : ''} ${
              type === 'success' ? 'text-emerald-900 dark:text-red-100' :
              type === 'error' ? 'text-rose-900 dark:text-rose-100' :
              type === 'warning' ? 'text-amber-900 dark:text-amber-100' :
              type === 'info' ? 'text-sky-900 dark:text-sky-100' :
              'text-gray-900 dark:text-gray-100'
            }`}>
              {message}
            </div>
            {action && (
              <div className="mt-2">
                <button
                  type="button"
                  onClick={() => action.onClick(id)}
                  className={`inline-flex items-center px-2.5 py-1.5 text-xs font-medium rounded-md ${
                    type === 'success' ? 'text-emerald-900 bg-emerald-100 hover:bg-emerald-200' :
                    type === 'error' ? 'text-rose-900 bg-rose-100 hover:bg-rose-200' :
                    type === 'warning' ? 'text-amber-900 bg-amber-100 hover:bg-amber-200' :
                    type === 'info' ? 'text-sky-900 bg-sky-100 hover:bg-sky-200' :
                    'text-gray-900 bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {action.label}
                </button>
              </div>
            )}
          </div>
          {dismissible && (
            <button
              type="button"
              className="flex-shrink-0 ml-4 text-white hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={() => toastStore.dismissToast(id)}
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};