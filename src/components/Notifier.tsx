import React from 'react';
import { useNotifier } from '../hooks/useNotifier';
import ToastContainer from './ToastContainer';

export interface NotifierProps {
  /**
   * Custom className for the toast container
   */
  className?: string;
}

export const Notifier: React.FC<NotifierProps> = ( ) => {
  const { toasts, position, remove } = useNotifier();

  return (
    <ToastContainer
      toasts={toasts}
      position={position}
      onRemove={remove}
    />
  );
};
