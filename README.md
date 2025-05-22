# Tinkr

A modern, lightweight toast notification library for React applications.

![Tinkr Toast Library](https://www.example.com/placeholder-image.jpg)

## Features

- ✅ **Lightweight** - Under 5kb minified and gzipped
- ✅ **Customizable** - Success, error, warning, info, loading toast types
- ✅ **Promise-aware** - Auto-handle loading/success/error states
- ✅ **Accessible** - ARIA labels and keyboard navigation
- ✅ **Animated** - Smooth enter/exit transitions
- ✅ **Positionable** - Multiple positions: top, bottom, left, right, center
- ✅ **Headless-friendly** - Custom component rendering support
- ✅ **TypeScript** - Full TypeScript support with comprehensive types

## Installation

```bash
npm install tinkr
# or
yarn add tinkr
# or
pnpm add tinkr
```

## Quick Start

```jsx
import { toast, Toaster } from 'tinkr';

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

// Loading toast
toast.loading('Processing your request...');

// Default toast
toast('Hello world!');

// Custom toast with JSX content
toast(
  <div className="flex items-center">
    <img src="/icon.png" alt="" className="mr-2 h-4 w-4" />
    <span>Custom content with <strong>formatting</strong></span>
  </div>
);
```

### Toast with Options

```jsx
toast.success('Successfully saved!', {
  duration: 5000,              // Duration in milliseconds
  position: 'top-right',       // Position of the toast
  dismissible: true,           // Allow manual dismissal
  title: 'Success',            // Optional title
  icon: <CustomIcon />,        // Custom icon
  action: {                    // Optional action button
    label: 'Undo',
    onClick: (id) => {
      // Handle undo action
      toast.dismiss(id);
    }
  }
});
```

### Promise Handling

```jsx
const promise = fetch('/api/data');

toast.promise(promise, {
  loading: {
    message: 'Loading data...',
    options: {
      icon: <LoadingIcon />,
    }
  },
  success: {
    message: (data) => `Successfully loaded ${data.length} items`,
    options: {
      duration: 5000,
    }
  },
  error: {
    message: (err) => `Error: ${err.message}`,
    options: {
      duration: 5000,
    }
  }
});
```

### Update and Dismiss

```jsx
// Create a toast and get its ID
const toastId = toast.loading('Uploading file...');

// Update an existing toast
toast.update(toastId, 'Upload progress: 50%');

// Dismiss a toast
toast.dismiss(toastId);

// Remove all toasts
toast.removeAll();
```

## Toaster Component Props

The `<Toaster />` component accepts the following props:

```jsx
<Toaster
  position="top-right"       // Toast position
  limit={5}                  // Maximum number of toasts
  closeButton={true}         // Show close button
  offset="32px"              // Distance from the edge of the viewport
  gap="14px"                 // Gap between toasts
  visibleToasts={3}          // Number of visible toasts at once
  newestOnTop={false}        // Show newest toasts on top
  reverseOrder={false}       // Reverse the order of toasts
  expand={false}             // Expand toasts to fill container
  containerClassName=""      // Custom class for the container
  toastClassName=""          // Custom class for toasts
  duration={5000}            // Default duration for all toasts
  component={CustomToast}    // Custom toast component
/>
```

## Custom Toast Component

You can provide a custom toast component to completely customize the appearance:

```jsx
const CustomToast = ({ toast }) => {
  const { id, type, message } = toast;
  
  return (
    <div className="my-custom-toast">
      {type === 'success' && <SuccessIcon />}
      <div>{message}</div>
      <button onClick={() => toast.dismiss(id)}>Close</button>
    </div>
  );
};

// Then use it in the Toaster
<Toaster component={CustomToast} />
```

## API Reference

### Toast Function

| Method | Description |
| --- | --- |
| `toast(message, options?)` | Show a default toast |
| `toast.success(message, options?)` | Show a success toast |
| `toast.error(message, options?)` | Show an error toast |
| `toast.warning(message, options?)` | Show a warning toast |
| `toast.info(message, options?)` | Show an info toast |
| `toast.loading(message, options?)` | Show a loading toast |
| `toast.custom(message, options?)` | Show a custom toast |
| `toast.promise(promise, options)` | Show toast based on promise state |
| `toast.update(id, message, options?)` | Update an existing toast |
| `toast.dismiss(id)` | Dismiss a specific toast |
| `toast.removeAll()` | Remove all toasts |

### Toast Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | Auto-generated | Unique identifier for the toast |
| `type` | `'success' \| 'error' \| 'warning' \| 'info' \| 'loading' \| 'custom'` | `'default'` | Type of toast |
| `title` | `string` | `undefined` | Optional title for the toast |
| `duration` | `number` | `5000` | Duration in milliseconds |
| `position` | `ToastPosition` | `'top-right'` | Position of the toast |
| `dismissible` | `boolean` | `true` | Allow manual dismissal |
| `className` | `string` | `''` | Custom CSS class |
| `icon` | `ReactNode` | Default icon | Custom icon |
| `action` | `{ label: string, onClick: (id: string) => void }` | `undefined` | Action button |
| `onDismiss` | `(id: string) => void` | `undefined` | Callback when toast is dismissed |
| `onAutoClose` | `(id: string) => void` | `undefined` | Callback when toast auto-closes |

## TypeScript Support

Tinkr is built with TypeScript and provides full type definitions:

```tsx
import { toast, Toaster, ToastPosition, ToastOptions } from 'tinkr';

// Use type-safe options
const options: ToastOptions = {
  position: 'top-right' as ToastPosition,
  duration: 5000,
};

toast.success('Hello World!', options);
```

## Accessibility

Tinkr is built with accessibility in mind:

- ARIA attributes for screen readers
- Keyboard support (ESC to dismiss)
- Focus management
- Appropriate roles and live regions

## Browser Support

Tinkr supports all modern browsers (Chrome, Firefox, Safari, Edge).

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.