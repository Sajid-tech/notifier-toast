import React, { useState } from 'react';
import notifier from '../../../src/Notifier';
import { Position } from '../../../src/types';
import { X, AlertCircle, CheckCircle, AlertTriangle, Info } from 'lucide-react';

const positions: Position[] = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right'
];

const Playground = () => {
  const [position, setPosition] = useState<Position>('top-right');
  const [duration, setDuration] = useState<number>(3000);
  const [message, setMessage] = useState<string>('This is a notification message!');

  // Configure notifier with current settings
  React.useEffect(() => {
    notifier.configure({ position, duration, maxNotifications: 5 });
  }, [position, duration]);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Live Demo</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Configuration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Position
            </label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md"
              value={position}
              onChange={(e) => setPosition(e.target.value as Position)}
            >
              {positions.map((pos) => (
                <option key={pos} value={pos}>
                  {pos}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Duration (ms)
            </label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              min="0"
              step="500"
            />
            <span className="text-xs text-gray-500"> Use 0 for no auto-dismiss </span>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter notification message"
            />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Show Notifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            className="flex items-center justify-center gap-2 p-3 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors"
            onClick={() => notifier.info(message)}
          >
            <Info size={18} />
            <span>Info</span>
          </button>
          <button
            className="flex items-center justify-center gap-2 p-3 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors"
            onClick={() => notifier.success(message)}
          >
            <CheckCircle size={18} />
            <span>Success</span>
          </button>
          <button
            className="flex items-center justify-center gap-2 p-3 bg-yellow-100 text-yellow-700 rounded-md hover:bg-yellow-200 transition-colors"
            onClick={() => notifier.warning(message)}
          >
            <AlertTriangle size={18} />
            <span>Warning</span>
          </button>
          <button
            className="flex items-center justify-center gap-2 p-3 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors"
            onClick={() => notifier.error(message)}
          >
            <AlertCircle size={18} />
            <span>Error</span>
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Actions</h2>
        <div className="flex flex-wrap gap-4">
          <button
            className="flex items-center justify-center gap-2 p-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
            onClick={() => notifier.clear()}
          >
            <X size={18} />
            <span>Clear All</span>
          </button>
          <button
            className="flex items-center justify-center gap-2 p-3 bg-purple-100 text-purple-700 rounded-md hover:bg-purple-200 transition-colors"
            onClick={() => {
              const id = notifier.info('This is a custom duration toast (10s)', { duration: 10000 });
              console.log('Toast ID:', id);
            }}
          >
            <span>Custom Duration (10s)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Playground;
