import React from 'react';
import { ToastProps } from '../types';
import { useToast } from '../hooks/useToast';

export const ToastItem: React.FC<ToastProps> = ({ id, message, type }) => {
  const { removeToast } = useToast();

  const baseClasses = "px-4 py-2 rounded-lg shadow-lg text-white min-w-[300px] flex items-center justify-between";
  const typeClasses = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
    default: "bg-gray-700"
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type]}`}>
      <span>{message}</span>
      <button 
        onClick={() => removeToast(id)}
        className="ml-2 text-white hover:text-gray-200"
      >
        ×
      </button>
    </div>
  );
};