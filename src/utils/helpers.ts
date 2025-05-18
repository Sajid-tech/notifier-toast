/**
 * Generate a unique ID for each toast
 */
export const generateId = (): string => {
  return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
};

/**
 * Get CSS class for toast position
 */
export const getPositionClasses = (position: string): string => {
  switch (position) {
    case 'top-left':
      return 'top-4 left-4';
    case 'top-center':
      return 'top-4 left-1/2 -translate-x-1/2';
    case 'top-right':
      return 'top-4 right-4';
    case 'bottom-left':
      return 'bottom-4 left-4';
    case 'bottom-center':
      return 'bottom-4 left-1/2 -translate-x-1/2';
    case 'bottom-right':
      return 'bottom-4 right-4';
    default:
      return 'top-4 right-4';
  }
};

/**
 * Determine if a position is at the bottom
 */
export const isBottomPosition = (position: string): boolean => {
  return position.startsWith('bottom');
};
