import React from 'react';
import notifier from './Notifier';

function App() {
  const showSuccess = () => {
    notifier.success('Operation completed successfully!');
  };

  const showError = () => {
    notifier.error('Something went wrong!');
  };

  const showWarning = () => {
    notifier.warning('This is a warning message.');
  };

  const showInfo = () => {
    notifier.info('This is an informational message.');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Notifier Demo</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Try out different toast types</h2>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={showSuccess}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Success Toast
          </button>
          <button
            onClick={showError}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Error Toast
          </button>
          <button
            onClick={showWarning}
            className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
          >
            Warning Toast
          </button>
          <button
            onClick={showInfo}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Info Toast
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
