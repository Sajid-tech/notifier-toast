import React from 'react';
import { toast, Toaster } from '../index';
import '../index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Tinkr React Toasts</h1>
        
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => toast.success('Successfully saved changes!')}
            className="py-2 px-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md transition-colors"
          >
            Success
          </button>
          
          <button
            onClick={() => toast.error('An error occurred. Please try again.')}
            className="py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
          >
            Error
          </button>
          
          <button
            onClick={() => toast.warning('This action cannot be undone!')}
            className="py-2 px-4 bg-amber-500 hover:bg-amber-600 text-white rounded-md transition-colors"
          >
            Warning
          </button>
          
          <button
            onClick={() => toast.info('Your profile has been updated.')}
            className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
          >
            Info
          </button>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">Position Options</h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => toast.success('Top Left Toast', { position: 'top-left' })}
              className="py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition-colors"
            >
              Top Left
            </button>
            
            <button
              onClick={() => toast.success('Top Right Toast', { position: 'top-right' })}
              className="py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition-colors"
            >
              Top Right
            </button>
            
            <button
              onClick={() => toast.success('Bottom Left Toast', { position: 'bottom-left' })}
              className="py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition-colors"
            >
              Bottom Left
            </button>
            
            <button
              onClick={() => toast.success('Bottom Right Toast', { position: 'bottom-right' })}
              className="py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition-colors"
            >
              Bottom Right
            </button>
          </div>
        </div>
      </div>
      
      {/* Add the Toaster component */}
      <Toaster />
    </div>
  );
}

export default App;