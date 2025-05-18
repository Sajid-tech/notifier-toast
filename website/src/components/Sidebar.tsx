import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  items: { name: string; href: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const location = useLocation();

  return (
    <div className="w-64 flex-shrink-0 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className={`flex items-center p-2 text-base font-medium rounded-lg ${
                  location.pathname + location.hash === item.href ? 'text-blue-600 dark:text-blue-500 bg-gray-200 dark:bg-gray-700' : 'text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <span className="ml-3">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
