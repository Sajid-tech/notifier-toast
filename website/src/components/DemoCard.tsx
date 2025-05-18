import React from 'react';
import { useNotifier } from '@yourusername/notifier';

interface DemoCardProps {
  title: string;
  description: string;
  code?: string;
  children: React.ReactNode;
}

const DemoCard: React.FC<DemoCardProps> = ({ title, description, children }) => {
  return (
    <div className="rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export const SimpleDemo: React.FC = () => {
  const { success, error, warning, info } = useNotifier();

  return (
    <DemoCard
      title="Basic Notification Types"
      description="Simple notifications with different types: success, error, warning, and info."
    >
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => success('Operation completed successfully!')}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          Success
        </button>
        <button
          onClick={() => error('An error occurred!')}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          Error
        </button>
        <button
          onClick={() => warning('This is a warning message.')}
          className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
        >
          Warning
        </button>
        <button
          onClick={() => info('This is an informational message.')}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Info
        </button>
      </div>
    </DemoCard>
  );
};

export const PositionDemo: React.FC = () => {
  const { toast, setPosition } = useNotifier();

  const positions = [
    { value: 'top-left', label: 'Top Left' },
    { value: 'top-center', label: 'Top Center' },
    { value: 'top-right', label: 'Top Right' },
    { value: 'bottom-left', label: 'Bottom Left' },
    { value: 'bottom-center', label: 'Bottom Center' },
    { value: 'bottom-right', label: 'Bottom Right' },
  ];

  return (
    <DemoCard
      title="Position Control"
      description="Change the position of all toast notifications."
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {positions.map((pos) => (
          <button
            key={pos.value}
            onClick={() => {
              setPosition(pos.value as string);
              toast(`Position set to: ${pos.label}`);
            }}
            className="px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm"
          >
            {pos.label}
          </button>
        ))}
      </div>
    </DemoCard>
  );
};

export const DurationDemo: React.FC = () => {
  const { toast } = useNotifier();

  return (
    <DemoCard
      title="Duration Control"
      description="Set custom durations for toast notifications."
    >
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => toast('Very quick toast (1s)', { duration: 1000 })}
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
        >
          1 Second
        </button>
        <button
          onClick={() => toast('Default toast (4s)')}
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
        >
          4 Seconds
        </button>
        <button
          onClick={() => toast('Long toast (8s)', { duration: 8000 })}
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
        >
          8 Seconds
        </button>
        <button
          onClick={() => toast('Persistent toast (until clicked)', { duration: Infinity })}
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
        >
          Persistent
        </button>
      </div>
    </DemoCard>
  );
};

export const ActionDemo: React.FC = () => {
  const { toast } = useNotifier();

  const showActionToast = () => {
    toast('Would you like to undo this action?', {
      action: {
        label: 'Undo',
        onClick: () => {
          toast('Action undone!', { type: 'success' });
        },
      },
      duration: 8000,
    });
  };

  return (
    <DemoCard
      title="Action Buttons"
      description="Add interactive action buttons to your toast notifications."
    >
      <button
        onClick={showActionToast}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
      >
        Show Action Toast
      </button>
    </DemoCard>
  );
};

export default DemoCard;
