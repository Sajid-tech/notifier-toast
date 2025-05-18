import React from 'react';
import CodeBlock from '../components/CodeBlock';
import Sidebar from '../components/Sidebar';

const DocsPage: React.FC = () => {
  const installationCode = `npm install notifier
# or
yarn add notifier
# or
pnpm add notifier`;

  const basicSetupCode = `import React from 'react';
import ReactDOM from 'react-dom/client';
import notifier from 'notifier';

function App() {
  return (
    <div>
      <Notifier />
      <button onClick={() => notifier.success('Hello Notifier!')}>
        Show Toast
      </button>
    </div>
  );
}

export default App;`;

  const usingHookCode = `import notifier from 'notifier';

function MyComponent() {
  const showSuccess = () => {
    notifier.success('Operation completed successfully!');
  };
  
  return (
    <button onClick={showSuccess}>
      Show Success Toast
    </button>
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
   * @default 3000
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

  const positionCode = `import notifier from 'notifier';

function PositionExample() {
  const changePosition = (position) => {
    notifier.configure({ position });
    notifier.info(\`Position set to: \${position}\`);
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

  const versionCheckCode = `import { checkVersion } from 'notifier';

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

  const sidebarItems = [
    { name: 'Introduction', href: '#introduction' },
    { name: 'Installation', href: '#installation' },
    { name: 'Basic Setup', href: '#setup' },
    { name: 'Usage', href: '#usage' },
    { name: 'Options', href: '#options' },
    { name: 'Position', href: '#position' },
    { name: 'Version Check', href: '#version-check' },
    { name: 'Playground', href: '/playground' },
  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar items={sidebarItems} />
      <div className="flex-1 overflow-x-hidden overflow-y-auto p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Documentation</h1>

          <section id="introduction" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction</h2>
            <p className="mb-4">
              Notifier is a simple and customizable toast notification library for React.
            </p>
          </section>

          <section id="installation" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Installation</h2>
            <p className="mb-4">Install the package using your package manager of choice:</p>
            <CodeBlock code={installationCode} language="bash" />
          </section>

          <section id="setup" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Basic Setup</h2>
            <p className="mb-4">Import the `Notifier` component and add it to your app:</p>
            <CodeBlock code={basicSetupCode} />
            <p className="mt-4">
              The <code>Notifier</code> component renders the toast notifications.
            </p>
          </section>

          <section id="usage" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Usage</h2>
            <p className="mb-4">Use the `notifier` object to show toast notifications:</p>
            <CodeBlock code={usingHookCode} />
            <p className="mt-4">
              The <code>notifier</code> object provides methods for showing different types of toasts.
            </p>
          </section>

          <section id="options" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Toast Options</h2>
            <p className="mb-4">The <code>notifier.show</code> method accepts the following options:</p>
            <CodeBlock code={toastOptionsCode} language="typescript" />
          </section>

          <section id="position" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Changing Position</h2>
            <p className="mb-4">You can change the position of all toast notifications using the <code>configure</code> method:</p>
            <CodeBlock code={positionCode} />
            <p className="mt-4">
              Available positions are: <code>top-left</code>, <code>top-center</code>, <code>top-right</code>, <code>bottom-left</code>, <code>bottom-center</code>, and <code>bottom-right</code>.
            </p>
          </section>

          <section id="version-check" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Version Check</h2>
            <p className="mb-4">Check if your version of Notifier is up todate:</p>
            <CodeBlock code={versionCheckCode} />
            <p className="mt-4">
              The <code>checkVersion</code> function fetches the latest version from npm and compares it with your current version.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
