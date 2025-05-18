import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Notification, NotifierOptions, Position, NotificationType } from './types';
import './style.css';

// Default options
let options: NotifierOptions = {
  position: 'top-right',
  duration: 3000,
  maxNotifications: 3
};

// Local state
let notifications: Notification[] = [];
let listeners: (() => void)[] = [];

// Helper to notify listeners when notifications change
const notifyListeners = () => {
  listeners.forEach(listener => listener());
};

// Main Notifier component
const NotifierContainer: React.FC = () => {
  const [notificationsState, setNotificationsState] = useState<Notification[]>([]);
  const [position, setPosition] = useState<Position>(options.position || 'top-right');

  // Subscribe to notification changes
  useEffect(() => {
    const updateNotifications = () => {
      setNotificationsState([...notifications]);
      setPosition(options.position || 'top-right');
    };

    listeners.push(updateNotifications);
    updateNotifications();

    return () => {
      listeners = listeners.filter(l => l !== updateNotifications);
    };
  }, []);

  // Dismiss a notification
  const handleDismiss = (id: string) => {
    const notification = document.getElementById(`notifier-${id}`);
    if (notification) {
      notification.classList.add('exit');
      setTimeout(() => {
        notifications = notifications.filter(n => n.id !== id);
        notifyListeners();
      }, 200); // Match animation duration
    }
  };

  return createPortal(
    <div className={`notifier-container ${position}`}>
      {notificationsState.map((notification) => (
        <div
          id={`notifier-${notification.id}`}
          key={notification.id}
          className={`notifier ${notification.type}`}
        >
          <span className="notifier-message">{notification.message}</span>
          <button
            className="notifier-close"
            onClick={() => handleDismiss(notification.id)}
            aria-label="Close notification"
          >
            ×
          </button>
        </div>
      ))}
    </div>,
    document.body
  );
};

// Initialize Notifier
let isInitialized = false;

const initNotifier = () => {
  if (isInitialized) return;

  if (typeof document !== 'undefined') {
    const rootElement = document.createElement('div');
    rootElement.id = 'notifier-root';
    document.body.appendChild(rootElement);

    const root = document.getElementById('notifier-root');
    if (root) {
      import('react-dom/client').then(({ createRoot }) => {
        const reactRoot = createRoot(root);
        reactRoot.render(<NotifierContainer />);
        isInitialized = true;
      });
    }
  }
};

// Auto dismiss notification
const autoDismiss = (id: string, duration: number) => {
  if (duration > 0) {
    setTimeout(() => {
      notifier.dismiss(id);
    }, duration);
  }
};

// Main API
export const notifier = {
  configure: (newOptions: NotifierOptions) => {
    options = { ...options, ...newOptions };
    notifyListeners();
    return notifier;
  },

  show: (message: string, type: NotificationType = 'info', notificationOptions?: Partial<Notification>) => {
    // Make sure the component is initialized
    if (!isInitialized) {
      initNotifier();
    }

    const id = Math.random().toString(36).substring(2, 9);
    const duration = notificationOptions?.duration ?? options.duration;

    const newNotification: Notification = { id, message, type, ...notificationOptions };

    // Add to the beginning and limit the number
    notifications = [newNotification, ...notifications].slice(0, options.maxNotifications);
    notifyListeners();

    if (duration && duration > 0) {
      autoDismiss(id, duration);
    }

    return id;
  },

  info: (message: string, notificationOptions?: Partial<Notification>) => {
    return notifier.show(message, 'info', notificationOptions);
  },

  success: (message: string, notificationOptions?: Partial<Notification>) => {
    return notifier.show(message, 'success', notificationOptions);
  },

  warning: (message: string, notificationOptions?: Partial<Notification>) => {
    return notifier.show(message, 'warning', notificationOptions);
  },

  error: (message: string, notificationOptions?: Partial<Notification>) => {
    return notifier.show(message, 'error', notificationOptions);
  },

  dismiss: (id: string) => {
    const notification = document.getElementById(`notifier-${id}`);
    if (notification) {
      notification.classList.add('exit');
      setTimeout(() => {
        notifications = notifications.filter(n => n.id !== id);
        notifyListeners();
      }, 200);
    }
  },

  clear: () => {
    notifications.forEach(n => {
      const notification = document.getElementById(`notifier-${n.id}`);
      if (notification) {
        notification.classList.add('exit');
      }
    });

    setTimeout(() => {
      notifications = [];
      notifyListeners();
    }, 200);

    return notifier;
  }
};

export default notifier;
