# Notifier

A beautiful, customizable toast notification library for React.

## Features

-   🎨 Beautiful out-of-the-box
-   🌓 Light & Dark mode support
-   🔄 Multiple positions
-   🎭 Different types (success, error, warning, info)
-   ⌛ Custom durations
-   🚀 Simple API
-   🧩 TypeScript support

## Installation

```bash
npm install notifier
# or
yarn add notifier
# or
pnpm add notifier
```

## Quick Start

```tsx
import notifier from 'notifier';

function MyComponent() {
  const showSuccess = () => {
    notifier.success('Operation completed successfully!');
  };
  
  return (
    <button onClick={showSuccess}>
      Show Notification
    </button>
  );
}
```

## License

MIT
