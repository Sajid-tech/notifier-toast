import  { useState } from 'react';
import notifier from './Notifier';
import {  Package, Coffee, GitBranch } from 'lucide-react';


type ToastType = 'success' | 'error' | 'warning' | 'info';

function App() {
  const [animateButton, setAnimateButton] = useState<ToastType | null>(null);

  const showToast = (type: ToastType): void => {
    setAnimateButton(type);
    setTimeout(() => setAnimateButton(null), 300);
    
    switch(type) {
      case 'success':
        notifier.success('Operation completed successfully!');
        break;
      case 'error':
        notifier.error('Something went wrong!');
        break;
      case 'warning':
        notifier.warning('This is a warning message.');
        break;
      case 'info':
        notifier.info('This is an informational message.');
        break;
      default:
        break;
    }
  };

  const buttonClasses = (type: ToastType): string => {
    const baseClasses = "px-5 py-3 rounded-lg font-medium shadow-md flex items-center justify-center gap-2 transition-all duration-300 transform";
    const colorClasses: Record<ToastType, string> = {
      success: "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700",
      error: "bg-gradient-to-r from-red-500 to-rose-600 text-white hover:from-red-600 hover:to-rose-700",
      warning: "bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700",
      info: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700"
    };
    const animationClass = animateButton === type ? "scale-95" : "scale-100";
    
    return `${baseClasses} ${colorClasses[type]} ${animationClass}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Notifier Demo</h1>
          <p className="text-gray-300">A beautiful toast notification system</p>
        </div>
        
        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white border-opacity-20">
          <h2 className="text-xl font-semibold text-white mb-6">Try out different toast types</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => showToast('success')}
              className={buttonClasses('success')}
            >
              Success Toast
            </button>
            <button
              onClick={() => showToast('error')}
              className={buttonClasses('error')}
            >
              Error Toast
            </button>
            <button
              onClick={() => showToast('warning')}
              className={buttonClasses('warning')}
            >
              Warning Toast
            </button>
            <button
              onClick={() => showToast('info')}
              className={buttonClasses('info')}
            >
              Info Toast
            </button>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center">
          <p className="text-white text-opacity-80 mb-4">Created with ❤️ by Sajid</p>
          <div className="flex gap-6">
            <a href="https://github.com/sajid-tech" target="_blank" rel="noopener noreferrer" 
               className="text-white hover:text-blue-400 transition-colors flex items-center gap-2">
              <GitBranch size={20} />
              <span>GitHub</span>
            </a>
            <a href="https://www.npmjs.com/package/sajid-notifier" target="_blank" rel="noopener noreferrer" 
               className="text-white hover:text-red-400 transition-colors flex items-center gap-2">
              <Package size={20} />
              <span>NPM Package</span>
            </a>
            <a href="https://www.buymeacoffee.com/sajid" target="_blank" rel="noopener noreferrer" 
               className="text-white hover:text-yellow-400 transition-colors flex items-center gap-2">
              <Coffee size={20} />
              <span>Support</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;