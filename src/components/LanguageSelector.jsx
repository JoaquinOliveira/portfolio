import React from 'react';
import { useIntl } from 'react-intl';

function LanguageSelector({ currentLanguage, onLanguageChange }) {
  const intl = useIntl();

  return (
    <div className="flex items-center space-x-2">
      <span className={`text-sm ${currentLanguage === 'en' ? 'font-bold' : ''}`}>EN</span>
      <button
        onClick={() => onLanguageChange(currentLanguage === 'en' ? 'es' : 'en')}
        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
          currentLanguage === 'es' ? 'bg-blue-600' : 'bg-gray-200'
        }`}
      >
        <span
          className={`inline-block w-4 h-4 transform transition-transform bg-white rounded-full ${
            currentLanguage === 'es' ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      <span className={`text-sm ${currentLanguage === 'es' ? 'font-bold' : ''}`}>ES</span>
    </div>
  );
}

export default LanguageSelector;