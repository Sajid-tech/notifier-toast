# React Toast Notifications

A lightweight, customizable toast notification library for React applications.

## Installation

```bash
npm install @yourusername/toast-notifications
# or
yarn add @yourusername/toast-notifications
# or
pnpm add @yourusername/toast-notifications
```

## Usage

1. Wrap your app with `ToastProvider`:

```jsx
import { ToastProvider } from '@yourusername/toast-notifications';

function App() {
  return (
    <ToastProvider>
      {/* Your app content */}
    </ToastProvider>
  );
}
```

2. Add the `Toast` component where you want the notifications to appear:

```jsx
import { Toast } from '@yourusername/toast-notifications';

function App() {
  return (
    <div>
      <Toast />
      {/* Your app content */}
    </div>
  );
}
```

3. Use the toast functions:

```jsx
import { useToast } from '@yourusername/toast-notifications';

function MyComponent() {
  const toast = useToast();

  const handleClick = () => {
    // Basic usage
    toast.success('Operation successful!');

    // With options
    toast.error('Something went wrong', { duration: 5000 });

    // Available methods
    toast.success('Success message');
    toast.error('Error message');
    toast.warning('Warning message');
    toast.info('Info message');
  };

  return (
    <button onClick={handleClick}>
      Show Toast
    </button>
  );
}
```

## Options

```typescript
interface ToastOptions {
  type?: 'success' | 'error' | 'warning' | 'info' | 'default';
  duration?: number; // Duration in milliseconds, default: 4000
}
```

## License

MIT