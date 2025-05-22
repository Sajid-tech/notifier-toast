import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ToastContext, toastStore } from '../core/store';
import { Toast as ToastComponent } from './Toast';
import { Toast, ToasterProps } from '../core/types';

export const Toaster: React.FC<ToasterProps> = ({
  position = 'top-right',
  limit = 5,
  closeButton = true,
  offset = '1rem',
  gap = '0.5rem',
  visibleToasts = 3,
  newestOnTop = false,
  reverseOrder = false,
  expand = false,
  containerClassName = '',
  toastClassName = '',
  duration = 5000,
  component: CustomToast,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    return toastStore.subscribe(() => {
      setToasts(toastStore.getState().filter(toast => toast.visible !== false));
    });
  }, []);

  if (!mounted) return null;

  const [vertical, horizontal] = position.split('-') as ['top' | 'bottom', 'left' | 'center' | 'right'];
  
  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    zIndex: 9999,
    display: 'flex',
    flexDirection: vertical === 'top' ? 'column' : 'column-reverse',
    gap,
    maxHeight: expand ? undefined : `calc(100vh - ${offset} * 2)`,
    maxWidth: '100vw',
    pointerEvents: 'none',
  };

  switch (vertical) {
    case 'top':
      containerStyle.top = offset;
      break;
    case 'bottom':
      containerStyle.bottom = offset;
      break;
  }

  switch (horizontal) {
    case 'left':
      containerStyle.left = offset;
      containerStyle.alignItems = 'flex-start';
      break;
    case 'center':
      containerStyle.left = '50%';
      containerStyle.transform = 'translateX(-50%)';
      containerStyle.alignItems = 'center';
      break;
    case 'right':
      containerStyle.right = offset;
      containerStyle.alignItems = 'flex-end';
      break;
  }

  let filteredToasts = [...toasts];
  
  if (newestOnTop) {
    filteredToasts.reverse();
  }
  
  if (reverseOrder) {
    filteredToasts.reverse();
  }
  
  if (limit > 0) {
    filteredToasts = filteredToasts.slice(0, limit);
  }

  return createPortal(
    <ToastContext.Provider 
      value={{
        toasts,
        addToast: toastStore.addToast,
        updateToast: toastStore.updateToast,
        dismissToast: toastStore.dismissToast,
        removeToast: toastStore.removeToast,
        removeAllToasts: toastStore.removeAllToasts,
      }}
    >
      <div 
        className={`tinkr-toast-container ${containerClassName}`}
        style={containerStyle} 
        role="region" 
        aria-label="Notifications"
      >
        <style jsx global>{`
          .animate-enter {
            animation: enter 0.2s cubic-bezier(0.21, 1.02, 0.73, 1) forwards;
          }
          
          .animate-leave {
            animation: leave 0.15s cubic-bezier(0.21, 1.02, 0.73, 1) forwards;
          }
          
          @keyframes enter {
            0% { transform: translateY(10px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          
          @keyframes leave {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(-10px); opacity: 0; }
          }
        `}</style>
        {filteredToasts.map((toast) => {
          const ToastToRender = CustomToast || ToastComponent;
          return (
            <ToastToRender
              key={toast.id}
              toast={{
                ...toast,
                dismissible: closeButton && (toast.dismissible !== false),
                duration: toast.duration ?? duration,
              }}
              className={toastClassName}
            />
          );
        })}
      </div>
    </ToastContext.Provider>,
    document.body
  );
};