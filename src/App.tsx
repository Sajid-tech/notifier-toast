import React from 'react';
import { NotifierProvider, Notifier, useNotifier } from './index';

function DemoButtons() {
  const { success, error, warning, info } = useNotifier();

  return (
    <div className="flex flex-wrap gap-4">
      <button
        onClick={() => success('Operation completed successfully!')}
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
      >
        Success Toast
      </button>
      <button
        onClick={() => error('Something went wrong!')}
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
      >
        Error Toast
      </button>
      <button
        onClick={() => warning('This is a warning message.')}
        className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
      >
        Warning Toast
      </button>
      <button
        onClick={() => info('This is an informational message.')}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Info Toast
      </button>
    </div>
  );
}

function App() {
  return (
    <NotifierProvider>
      <Notifier />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Notifier Demo</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Try out different toast types</h2>
          <DemoButtons />
        </div>
      </div>
    </NotifierProvider>
  );
}

export default App;