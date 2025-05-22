import { useEffect } from 'react';

export const useAccessibility = (
  dismissToast: () => void, 
  dismissible: boolean = true
) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && dismissible) {
        dismissToast();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dismissToast, dismissible]);
};

export const getAriaAttributes = (type: string) => {
  const baseAttributes = {
    role: 'alert',
    'aria-atomic': 'true',
  };

  if (type === 'error') {
    return {
      ...baseAttributes,
      'aria-live': 'assertive',
    };
  }

  return {
    ...baseAttributes,
    'aria-live': 'polite',
  };
};

export const getFocusableElements = (element: HTMLElement): HTMLElement[] => {
  return Array.from(
    element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ) as HTMLElement[];
};

export const trapFocus = (element: HTMLElement) => {
  const focusableElements = getFocusableElements(element);
  
  if (focusableElements.length === 0) return;
  
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;
    
    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  };
  
  element.addEventListener('keydown', handleTabKey);
  return () => element.removeEventListener('keydown', handleTabKey);
};