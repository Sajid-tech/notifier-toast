import React from 'react';
import notifier from '../../../src/Notifier';

const Demo = () => {
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
  );
};

export default Demo;
