import React, { useEffect, useState } from 'react';
import { checkVersion } from '@yourusername/notifier';
import CodeBlock from '../components/CodeBlock';

interface VersionInfo {
  current: string;
  latest: string;
  needsUpdate: boolean;
}

const VersionCheckPage: React.FC = () => {
  const [versionInfo, setVersionInfo] = useState<VersionInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkForUpdates = async () => {
      try {
        // Get package version from package.json
        const currentVersion = '0.1.0'; // This would normally come from your package
        const result = await checkVersion(currentVersion);
        setVersionInfo(result);
      } catch (err) {
        setError('Failed to check version. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    checkForUpdates();
  }, []);

  const versionCheckCode = `import { checkVersion } from '@yourusername/notifier';

async function checkForUpdates() {
  const currentVersion = '0.1.0'; // Your current version
  const result = await checkVersion(currentVersion);
  
  console.log(\`Current version: \${result.current}\`);
  console.log(\`Latest version: \${result.latest}\`);
  console.log(\`Needs update: \${result.needsUpdate}\`);
}`;

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Version Check</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Check if your version of the Notifier library is up to date.
        </p>

        <div className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Current Status</h2>
          
          {loading && (
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 p-4 rounded">
              <p className="text-red-700 dark:text-red-400">{error}</p>
            </div>
          )}

          {!loading && !error && versionInfo && (
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                <span className="text-gray-600 dark:text-gray-400">Current Version:</span>
                <span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{versionInfo.current}</span>
              </div>
              
              <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                <span className="text-gray-600 dark:text-gray-400">Latest Version:</span>
                <span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{versionInfo.latest}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Status:</span>
                {versionInfo.needsUpdate ? (
                  <span className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 px-3 py-1 rounded-full text-sm font-medium">
                    Update Available
                  </span>
                ) : (
                  <span className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    Up to Date
                  </span>
                )}
              </div>

              {versionInfo.needsUpdate && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    A new version is available. Update to get the latest features and bug fixes.
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700 font-mono text-sm">
                    npm install @yourusername/notifier@latest
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How to Use Version Check</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Notifier includes a built-in version checking utility that you can use to keep your package up to date.
            The <code>checkVersion</code> function compares your current version with the latest version available on npm.
          </p>
          
          <CodeBlock code={versionCheckCode} title="Version Check Example" />
          
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            You can use this function in your application to notify users when a new version is available or to 
            automatically check for updates during development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VersionCheckPage;