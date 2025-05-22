import React, { useState } from 'react';
import { toast, Toaster } from './lib';
import { AlertCircle, CheckCircle, Clock, Info, Loader2, MessageSquare, Settings } from 'lucide-react';

function App() {
  const [position, setPosition] = useState<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'>('top-right');
  const [loading, setLoading] = useState(false);

  const showToast = (type: 'success' | 'error' | 'warning' | 'info' | 'loading' | 'custom') => {
    const messages = {
      success: 'Successfully saved changes!',
      error: 'An error occurred while saving.',
      warning: 'This action might cause issues.',
      info: 'Your profile was updated.',
      loading: 'Processing your request...',
      custom: 'Custom message with JSX content',
    };

    const icons = {
      success: <CheckCircle className="w-5 h-5" />,
      error: <AlertCircle className="w-5 h-5" />,
      warning: <AlertCircle className="w-5 h-5" />,
      info: <Info className="w-5 h-5" />,
      loading: <Loader2 className="w-5 h-5 animate-spin" />,
      custom: <MessageSquare className="w-5 h-5" />,
    };

    if (type === 'custom') {
      toast(
        <div className="flex items-center">
          <Settings className="mr-2 h-4 w-4 animate-spin" />
          <span>Custom content with <strong>formatting</strong></span>
        </div>,
        { duration: 5000 }
      );
    } else {
      toast[type](messages[type], { 
        icon: icons[type],
        position,
        duration: type === 'loading' ? Infinity : 5000,
      });
    }
  };

  const handlePromise = () => {
    setLoading(true);
    
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        // Always resolve the promise
        resolve({ name: 'John Doe' });
        setLoading(false);
      }, 2000);
    });

    toast.promise(promise, {
      loading: {
        message: 'Fetching data...',
        options: {
          icon: <Loader2 className="w-5 h-5 animate-spin" />,
        }
      },
      success: {
        message: (data: any) => `Welcome back ${data.name}!`,
        options: {
          icon: <CheckCircle className="w-5 h-5" />,
        }
      },
      error: {
        message: (error: Error) => `Error: ${error.message}`,
        options: {
          icon: <AlertCircle className="w-5 h-5" />,
        }
      }
    });

    return promise;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Tinkr</h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            A lightweight, accessible toast notification library for React
          </p>
        </div>

        <div className="bg-white p-6 shadow rounded-lg">
          <div className="mb-6">
            <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
              Toast Position
            </label>
            <select
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value as any)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="top-right">Top Right</option>
              <option value="top-left">Top Left</option>
              <option value="top-center">Top Center</option>
              <option value="bottom-right">Bottom Right</option>
              <option value="bottom-left">Bottom Left</option>
              <option value="bottom-center">Bottom Center</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <button
              onClick={() => showToast('success')}
              className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              Success
            </button>

            <button
              onClick={() => showToast('error')}
              className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <AlertCircle className="mr-2 h-4 w-4" />
              Error
            </button>

            <button
              onClick={() => showToast('warning')}
              className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >
              <AlertCircle className="mr-2 h-4 w-4" />
              Warning
            </button>

            <button
              onClick={() => showToast('info')}
              className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Info className="mr-2 h-4 w-4" />
              Info
            </button>

            <button
              onClick={() => showToast('loading')}
              className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading
            </button>

            <button
              onClick={() => showToast('custom')}
              className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Custom
            </button>
          </div>

          <button
            onClick={handlePromise}
            disabled={loading}
            className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Clock className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Clock className="mr-2 h-4 w-4" />
                Promise Toast
              </>
            )}
          </button>

          <button
            onClick={() => toast.removeAll()}
            className="w-full mt-4 inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Dismiss All
          </button>
        </div>
      </div>
      
      <div className="mt-8 max-w-md w-full space-y-8">
        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Usage Examples</h2>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <pre className="text-xs overflow-auto">
              <code>
{`// Basic toast
toast.success("Successfully saved!");

// Toast with options
toast.error("Failed to save", {
  duration: 5000,
  position: "top-right",
});

// Promise toast
toast.promise(fetchData(), {
  loading: {
    message: "Loading...",
  },
  success: {
    message: (data) => \`Success: \${data.message}\`,
  },
  error: {
    message: (err) => \`Error: \${err.message}\`,
  },
});

// Custom JSX toast
toast(
  <div>Custom <b>Toast</b></div>,
  { duration: 5000 }
);`}
              </code>
            </pre>
          </div>
        </div>
      </div>

      <Toaster position={position} />
    </div>
  );
}

export default App;