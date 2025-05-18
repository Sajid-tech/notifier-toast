import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <Bell className="h-6 w-6 text-blue-600 dark:text-blue-500" />
              <span className="ml-2 text-lg font-bold text-gray-900 dark:text-white">Notifier</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Beautiful, customizable toast notifications for React
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername/notifier"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
              Documentation
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/docs"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 text-sm"
                >
                  Getting Started
                </Link>
              </li>
              <li>
                <Link
                  to="/docs"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 text-sm"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  to="/examples"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 text-sm"
                >
                  Examples
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/version-check"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 text-sm"
                >
                  Version Check
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/yourusername/notifier/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 text-sm"
                >
                  Report Issues
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yourusername/notifier/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 text-sm"
                >
                  Release Notes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#privacy"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 text-sm"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yourusername/notifier/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 text-sm"
                >
                  License (MIT)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Notifier. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
