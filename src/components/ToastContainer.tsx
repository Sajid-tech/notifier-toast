import React from 'react';
import { Toast, ToastPosition } from '../types';
import ToastItem from './ToastItem';
import { getPositionClasses, isBottomPosition } from '../utils/helpers';

interface ToastContainerProps {
  toasts: Toast[];
  position: ToastPosition;
  onRemove: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  position,
  onRemove,
}) => {
  const positionClasses = getPositionClasses(position);
  const isBottom = isBottomPosition(position);
  
  // Sort toasts based on position - for bottom positions, newest first
  const sortedToasts = [...toasts].sort((a, b) => {
    if (isBottom) {
      return b.createdAt - a.createdAt;
    }
    return a.createdAt - b.createdAt;
  });

  return (
    <div
      className={`fixed z-50 flex flex-col gap-3 w-full max-w-md p-4 sm:p-0 pointer-events-none ${positionClasses}`}
      aria-live="assertive"
    >
      {sortedToasts.map((toast, index) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          onRemove={onRemove}
          position={position}
          index={index}
        />
      ))}
    </div>
  );
};

export default ToastContainer;
