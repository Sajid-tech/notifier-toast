import React from 'react';
import { AlertCircle, AlertTriangle, CheckCircle, Info, XCircle } from 'lucide-react';
import { ToastType } from '../types';

interface ToastIconProps {
  type: ToastType;
  customIcon?: React.ReactNode;
}

export const ToastIcon: React.FC<ToastIconProps> = ({ type, customIcon }) => {
  if (customIcon) {
    return <>{customIcon}</>;
  }

  const iconClasses = 'h-5 w-5';

  switch (type) {
    case 'success':
      return <CheckCircle className={`${iconClasses} text-green-500`} />;
    case 'error':
      return <XCircle className={`${iconClasses} text-red-500`} />;
    case 'warning':
      return <AlertTriangle className={`${iconClasses} text-amber-500`} />;
    case 'info':
    default:
      return <Info className={`${iconClasses} text-blue-500`} />;
  }
};

export default ToastIcon;
