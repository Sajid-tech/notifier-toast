# Notifier

A beautiful, customizable toast notification library for React.

![npm](https://img.shields.io/npm/v/@yourusername/notifier)
![license](https://img.shields.io/npm/l/@yourusername/notifier)
![downloads](https://img.shields.io/npm/dm/@yourusername/notifier)

## Features

- 🎨 Beautiful out-of-the-box
- 🌓 Light & Dark mode support
- 🔄 Multiple positions
- 🎭 Different types (success, error, warning, info)
- ⌛ Custom durations
- 🎯 Action buttons
- 🚀 Simple API
- 🧩 TypeScript support
- 🔍 Version checking

## Installation

```bash
npm install @yourusername/notifier
# or
yarn add @yourusername/notifier
# or
pnpm add @yourusername/notifier
```

## Quick Start

```tsx
import { NotifierProvider, Notifier, useNotifier } from '@yourusername/notifier';

// Wrap your app with NotifierProvider
function App() {
  return (
    <NotifierProvider>
      <Notifier />
      <MyComponent />
    </NotifierProvider>
  );
}

// Use the hook in your components
function MyComponent() {
  const { toast, success, error, warning, info } = useNotifier();
  
  return (
    <div>
      <button onClick={() => success('Operation successful!')}>
        Show Success Toast
      </button>
    </div>
  );
}
```

## Documentation

Visit our [documentation site](https://yourusername.github.io/notifier) for more information.

## License

MIT