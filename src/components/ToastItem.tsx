import React, { useEffect, useState, useRef } from 'react';
import { Toast as ToastType } from '../types';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';

interface ToastItemProps {
  toast: ToastType;
  onClose: () => void;
}

export const ToastItem: React.FC<ToastItemProps> = ({ toast, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef<number | undefined>();

  useEffect(() => {
 
    requestAnimationFrame(() => {
      setIsVisible(true);
    });

    // Auto close
    if (toast.duration) {
      timerRef.current = window.setTimeout(() => {
        handleClose();
      }, toast.duration);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [toast.duration]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
      if (toast.onClose) {
        toast.onClose();
      }
    }, 300); 
  };

  
  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle className="w-5 h-5" />;
      case 'error':
        return <XCircle className="w-5 h-5" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5" />;
      case 'info':
        return <Info className="w-5 h-5" />;
      default:
        return null;
    }
  };

 
  const getColors = () => {
    switch (toast.type) {
      case 'success':
        return {
          bg: 'bg-emerald-50 dark:bg-emerald-900/90',
          text: 'text-emerald-800 dark:text-emerald-100',
          icon: 'text-emerald-500 dark:text-emerald-400',
          border: 'border-emerald-500 dark:border-emerald-400',
        };
      case 'error':
        return {
          bg: 'bg-red-50 dark:bg-red-900/90',
          text: 'text-red-800 dark:text-red-100',
          icon: 'text-red-500 dark:text-red-400',
          border: 'border-red-500 dark:border-red-400',
        };
      case 'warning':
        return {
          bg: 'bg-amber-50 dark:bg-amber-900/90',
          text: 'text-amber-800 dark:text-amber-100',
          icon: 'text-amber-500 dark:text-amber-400',
          border: 'border-amber-500 dark:border-amber-400',
        };
      case 'info':
        return {
          bg: 'bg-blue-50 dark:bg-blue-900/90',
          text: 'text-blue-800 dark:text-blue-100',
          icon: 'text-blue-500 dark:text-blue-400',
          border: 'border-blue-500 dark:border-blue-400',
        };
      default:
        return {
          bg: 'bg-gray-50 dark:bg-gray-900/50',
          text: 'text-gray-800 dark:text-gray-100',
          icon: 'text-gray-500 dark:text-gray-400',
          border: 'border-gray-500 dark:border-gray-400',
        };
    }
  };

  const colors = getColors();

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={`
        relative
        ${colors.bg} 
        border-l-4 
        ${colors.border} 
        rounded-lg 
        shadow-md 
        py-4 
        px-6 
        pr-12
        flex 
        items-start 
        gap-3
        min-w-[320px]
        max-w-[420px]
        transition-all 
        duration-300 
        ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
      `}
    >
      <div className={`${colors.icon} flex-shrink-0`}>
        {getIcon()}
      </div>
      <div className={`flex-1 ${colors.text} text-sm font-medium`}>
        {toast.message}
      </div>
      <button
        onClick={handleClose}
        className={`
          absolute 
          right-2 
          top-1/2 
          -translate-y-1/2
          ${colors.text}
          opacity-60 
          hover:opacity-100 
          transition-opacity
          p-1
          rounded-full
          hover:bg-black/5
        `}
        aria-label="Close"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};