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
    // Appear animation
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
    }, 300); // Wait for animation to complete
  };

  // Define icon based on toast type
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

  // Define colors based on toast type
  const getColors = () => {
    switch (toast.type) {
      case 'success':
        return {
          bg: 'bg-emerald-50',
          icon: 'text-emerald-500',
          border: 'border-emerald-500',
        };
      case 'error':
        return {
          bg: 'bg-red-50',
          icon: 'text-red-500',
          border: 'border-red-500',
        };
      case 'warning':
        return {
          bg: 'bg-amber-50',
          icon: 'text-amber-500',
          border: 'border-amber-500',
        };
      case 'info':
        return {
          bg: 'bg-blue-50',
          icon: 'text-blue-500',
          border: 'border-blue-500',
        };
      default:
        return {
          bg: 'bg-gray-50',
          icon: 'text-gray-500',
          border: 'border-gray-500',
        };
    }
  };

  const colors = getColors();

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={`
        ${colors.bg} border-l-4 ${colors.border} rounded-md shadow-sm py-3 px-4 pr-10 
        flex items-start max-w-sm w-full
        transition-all duration-300 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
      `}
    >
      <div className={`${colors.icon} flex-shrink-0 mr-3 mt-0.5`}>
        {getIcon()}
      </div>
      <div className="flex-1 text-sm text-gray-700">
        {toast.message}
      </div>
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Close"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};