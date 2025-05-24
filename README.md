# Tinkr-React

A modern, lightweight toast notification library for React applications.

![Tinkr React](https://via.placeholder.com/1200x630/f8f9fa/212529?text=Tinkr+React)

## Features

✅ **Lightweight** - Under 5kb minified and gzipped  
✅ **Customizable** - Success, error, warning, info toast types  
✅ **Accessible** - ARIA labels and keyboard navigation  
✅ **Animated** - Smooth enter/exit transitions  
✅ **Positionable** - Multiple positions: top-left, top-center, top-right, bottom-left, bottom-center, bottom-right  
✅ **TypeScript** - Full TypeScript support with comprehensive types  

## Installation

```bash
npm install tinkr-react
# or
yarn add tinkr-react
# or
pnpm add tinkr-react
```

## Quick Start

```jsx
import { toast, Toaster } from 'tinkr-react';

function App() {
  return (
    <div>
      <button onClick={() => toast.success('Hello World!')}>
        Show Toast
      </button>

      {/* Add the Toaster component to your app */}
      <Toaster />
    </div>
  );
}
```

## Usage

### Basic Toasts

```jsx
// Success toast
toast.success('Successfully saved!');

// Error toast
toast.error('Failed to save');

// Warning toast
toast.warning('This action cannot be undone');

// Info toast
toast.info('Your profile was updated');
```

### Positioning

You can position your toasts in six different locations:

```jsx
toast.success('Message', { position: 'top-right' }); // default
toast.success('Message', { position: 'top-left' });
toast.success('Message', { position: 'top-center' });
toast.success('Message', { position: 'bottom-right' });
toast.success('Message', { position: 'bottom-left' });
toast.success('Message', { position: 'bottom-center' });
```

### Custom Duration

Control how long a toast appears:

```jsx
// Display for 5 seconds (5000ms)
toast.info('This will stay longer', { duration: 5000 });

// Display until manually dismissed
toast.warning('Important notice', { duration: Infinity });
```

### Toaster Component Props

Customize the global behavior of toasts:

```jsx
<Toaster
  position="top-right" // Default position for all toasts
  autoClose={true} // Auto dismiss toasts
  autoCloseDuration={3000} // Default duration for all toasts
  limit={5} // Maximum number of toasts displayed at once
/>
```

### Using Inside React Components

You can use the hook version inside React components for more control:

```jsx
import { useToast, Toaster } from 'tinkr-react';

function MyComponent() {
  const toast = useToast();
  
  const handleSave = async () => {
    try {
      // Your save logic
      toast.success('Saved successfully!');
    } catch (error) {
      toast.error('Failed to save');
    }
  };
  
  return (
    <div>
      <button onClick={handleSave}>Save</button>
      <Toaster />
    </div>
  );
}
```

## TypeScript Support

Tinkr-React comes with full TypeScript support:

```tsx
import { toast, Toaster, Toast, ToastPosition } from 'tinkr-react';

// You can use the provided types
const customToast = (message: string, position: ToastPosition) => {
  toast.info(message, { position });
};
```

## License

MIT