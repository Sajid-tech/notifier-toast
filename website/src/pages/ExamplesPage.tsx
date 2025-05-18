import React from 'react';
import CodeBlock from '../components/CodeBlock';
import { SimpleDemo, PositionDemo, DurationDemo, ActionDemo } from '../components/DemoCard';

const ExamplesPage: React.FC = () => {
  const basicUsageCode = `import { useNotifier } from '@yourusername/notifier';

function Component() {
  const { success, error, warning, info } = useNotifier();
  
  return (
    <div>
      <button onClick={() => success('Operation successful!')}>
        Success
      </button>
      <button onClick={() => error('Something went wrong!')}>
        Error
      </button>
      <button onClick={() => warning('Warning message')}>
        Warning
      </button>
      <button onClick={() => info('Information message')}>
        Info
      </button>
    </div>
  );
}`;

  const positionCode = `import { useNotifier } from '@yourusername/notifier';

function Component() {
  const { toast, setPosition } = useNotifier();
  
  const positions = [
    'top-left', 'top-center', 'top-right',
    'bottom-left', 'bottom-center', 'bottom-right'
  ];
  
  return (
    <div>
      {positions.map(pos => (
        <button
          key={pos}
          onClick={() => {
            setPosition(pos);
            toast(\`Position set to: \${pos}\`);
          }}
        >
          {pos}
        </button>
      ))}
    </div>
  );
}`;

  const durationCode = `import { useNotifier } from '@yourusername/notifier';

function Component() {
  const { toast } = useNotifier();
  
  return (
    <div>
      <button onClick={() => toast('Very quick toast', { duration: 1000 })}>
        1 Second
      </button>
      <button onClick={() => toast('Default toast')}>
        4 Seconds (Default)
      </button>
      <button onClick={() => toast('Long toast', { duration: 8000 })}>
        8 Seconds
      </button>
      <button onClick={() => toast('Persistent toast', { duration: Infinity })}>
        Persistent
      </button>
    </div>
  );
}`;

  const actionCode = `import { useNotifier } from '@yourusername/notifier';

function Component() {
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
    <button onClick={showActionToast}>
      Show Action Toast
    </button>
  );
}`;

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Examples</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Explore various usage examples of the Notifier library. Click on the buttons to see the toast notifications in action.
        </p>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Basic Usage</h2>
            <div className="mb-8">
              <SimpleDemo />
            </div>
            <CodeBlock code={basicUsageCode} title="Basic Usage Example" />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Position Control</h2>
            <div className="mb-8">
              <PositionDemo />
            </div>
            <CodeBlock code={positionCode} title="Position Control Example" />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Duration Control</h2>
            <div className="mb-8">
              <DurationDemo />
            </div>
            <CodeBlock code={durationCode} title="Duration Control Example" />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Action Buttons</h2>
            <div className="mb-8">
              <ActionDemo />
            </div>
            <CodeBlock code={actionCode} title="Action Buttons Example" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ExamplesPage;