import React from 'react';
import { useIntl } from 'react-intl';

function ThemeToggle({ isDark, onToggle }) {
  const intl = useIntl();

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm">☀️</span>
      <button
        onClick={onToggle}
        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
          isDark ? 'bg-blue-600' : 'bg-gray-200'
        }`}
      >
        <span
          className={`inline-block w-4 h-4 transform transition-transform bg-white rounded-full ${
            isDark ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      <span className="text-sm">🌙</span>
    </div>
  );
}

export default ThemeToggle;