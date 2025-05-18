import React from 'react';
import { Link } from 'react-router-dom';
import { useNotifier } from '@yourusername/notifier';
import { Bell, ArrowRight, Package, Zap, Layout, Palette } from 'lucide-react';
import CodeBlock from '../components/CodeBlock';

const HomePage: React.FC = () => {
  const { success } = useNotifier();

  const demoNotification = () => {
    success('Welcome to Notifier! 🎉');
  };

  const installationCode = `npm install @yourusername/notifier`;

  const usageCode = `import { NotifierProvider, Notifier, useNotifier } from '@yourusername/notifier';

// Wrap your app with NotifierProvider
function App() {
  return (
    <NotifierProvider>
      <Notifier />
      <YourComponents />
    </NotifierProvider>
  );
}

// Use in your components
function YourComponent() {
  const { success, error, warning, info } = useNotifier();
  
  return (
    <button onClick={() => success('Operation successful!')}>
      Show Notification
    </button>
  );
}`;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-24 sm:py-32">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <Bell className="w-20 h-20 text-white mb-8" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-6">
            Beautiful Notifications for React
          </h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mb-12">
            Notifier is a lightweight, customizable toast notification library for React applications that makes it easy to display beautiful alerts.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/docs"
              className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Get Started
            </Link>
            <button
              onClick={demoNotification}
              className="px-6 py-3 bg-blue-700 border border-blue-400 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors shadow-lg"
            >
              Try It Out
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Notifier?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Designed with simplicity and flexibility in mind, Notifier makes adding beautiful toast notifications to your React applications effortless.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Lightweight</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Minimal bundle size with zero dependencies to keep your application fast and efficient.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Customizable</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Tailor notifications to match your brand with customizable styles, positions, and animations.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <Layout className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Responsive</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Looks great on all devices with responsive design out of the box.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">TypeScript Ready</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Built with TypeScript for excellent type safety and developer experience.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Easy to Use</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Simple API makes integration quick and usage intuitive for all developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Get Started in Minutes
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">1. Install the package</h3>
              <CodeBlock code={installationCode} language="bash" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">2. Add to your application</h3>
              <CodeBlock code={usageCode} />
            </div>

            <div className="text-center mt-12">
              <Link
                to="/docs"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                View Full Documentation <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;