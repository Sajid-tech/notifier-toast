import React from 'react';
import CodeBlock from '../components/CodeBlock';

const DocsPage: React.FC = () => {
  const installationCode = `npm install @yourusername/notifier
# or
yarn add @yourusername/notifier
# or
pnpm add @yourusername/notifier`;

  const basicSetupCode = `import React from 'react';
import ReactDOM from 'react-dom/client';
import { NotifierProvider, Notifier } from '@yourusername/notifier';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotifierProvider>
      <Notifier />
      <App />
    </NotifierProvider>
  </React.StrictMode>
);`;

  const usingHookCode = `import { useNotifier } from '@yourusername/notifier';

function MyComponent() {
  const { toast, success, error, warning, info } = useNotifier();
  
  return (
    <div>
      <button onClick={() => success('Operation completed successfully!')}>
        Show Success Toast
      </button>
      
      <button onClick={() => error('Something went wrong!')}>
        Show Error Toast
      </button>
      
      <button onClick={() => warning('This is a warning message.')}>
        Show Warning Toast
      </button>
      
      <button onClick={() => info('This is an informational message.')}>
        Show Info Toast
      </button>
      
      <button onClick={() => toast('Custom toast message', { 
        duration: 5000, 
        type: 'success',
        closable: true,
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo clicked'),
        }
      })}>
        Show Custom Toast
      </button>
    </div>
  );
}`;

  const toastOptionsCode = `interface ToastOptions {
  /**
   * Type of toast
   * @default 'info'
   */
  type?: 'success' | 'error' | 'warning' | 'info';
  
  /**
   * Duration in milliseconds
   * @default 4000
   */
  duration?: number;
  
  /**
   * Custom icon component
   */
  icon?: React.ReactNode;
  
  /**
   * Whether to show the close button
   * @default true
   */
  closable?: boolean;
  
  /**
   * Custom action button
   */
  action?: {
    label: string;
    onClick: () => void;
  };
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Handle on close
   */
  onClose?: () => void;
  
  /**
   * Handle on auto close (when duration expires)
   */
  onAutoClose?: () => void;
}`;

  const positionCode = `import { useNotifier } from '@yourusername/notifier';

function PositionExample() {
  const { toast, setPosition } = useNotifier();
  
  const changePosition = (position) => {
    setPosition(position);
    toast(\`Position set to: \${position}\`);
  };
  
  return (
    <div>
      <button onClick={() => changePosition('top-left')}>Top Left</button>
      <button onClick={() => changePosition('top-center')}>Top Center</button>
      <button onClick={() => changePosition('top-right')}>Top Right</button>
      <button onClick={() => changePosition('bottom-left')}>Bottom Left</button>
      <button onClick={() => changePosition('bottom-center')}>Bottom Center</button>
      <button onClick={() => changePosition('bottom-right')}>Bottom Right</button>
    </div>
  );
}`;

  const versionCheckCode = `import { checkVersion } from '@yourusername/notifier';

async function checkForUpdates() {
  const currentVersion = '0.1.0'; // Your current version
  const result = await checkVersion(currentVersion);
  
  console.log(\`Current version: \${result.current}\`);
  console.log(\`Latest version: \${result.latest}\`);
  console.log(\`Needs update: \${result.needsUpdate}\`);
  
  if (result.needsUpdate) {
    console.log('Update available! Please update your package.');
  }
}`;

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Documentation</h1>

        <div className="prose dark:prose-invert max-w-none">
          <section id="installation" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Installation</h2>
            <p className="mb-4">Install the package using your package manager of choice:</p>
            <CodeBlock code={installationCode} language="bash" />
          </section>

          <section id="setup" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Basic Setup</h2>
            <p className="mb-4">Wrap your application with the <code>NotifierProvider</code> and add the <code>Notifier</code> component:</p>
            <CodeBlock code={basicSetupCode} />
            <p className="mt-4">
              The <code>NotifierProvider</code> provides the context for the toast notifications, while the <code>Notifier</code> component renders the actual toast container.
            </p>
          </section>

          <section id="usage" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Using the Hook</h2>
            <p className="mb-4">Use the <code>useNotifier</code> hook in your components to show toast notifications:</p>
            <CodeBlock code={usingHookCode} />
            <p className="mt-4">
              The <code>useNotifier</code> hook provides methods for showing different types of toasts, as well as a generic <code>toast</code> method for custom options.
            </p>
          </section>

          <section id="options" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Toast Options</h2>
            <p className="mb-4">The <code>toast</code> method accepts the following options:</p>
            <CodeBlock code={toastOptionsCode} language="typescript" />
          </section>

          <section id="position" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Changing Position</h2>
            <p className="mb-4">You can change the position of all toast notifications using the <code>setPosition</code> method:</p>
            <CodeBlock code={positionCode} />
            <p className="mt-4">
              Available positions are: <code>top-left</code>, <code>top-center</code>, <code>top-right</code>, <code>bottom-left</code>, <code>bottom-center</code>, and <code>bottom-right</code>.
            </p>
          </section>

          <section id="version-check" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Version Check</h2>
            <p className="mb-4">Check if your version of Notifier is up to date:</p>
            <CodeBlock code={versionCheckCode} />
            <p className="mt-4">
              The <code>checkVersion</code> function fetches the latest version from npm and compares it with your current version.
            </p>
          </section>

          <section id="npm-publishing" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Publishing to npm</h2>
            <p className="mb-4">To publish your package to npm, follow these steps:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Create an npm account if you don't have one already</li>
              <li>Login to npm in your terminal: <code>npm login</code></li>
              <li>Update the package name in <code>package.json</code> (replace <code>@yourusername/notifier</code> with your own scope)</li>
              <li>Make sure your package version is correct</li>
              <li>Run <code>npm publish</code> to publish your package</li>
            </ol>
            <p className="mt-4">
              For subsequent updates, remember to increment the version number in <code>package.json</code> before publishing.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;