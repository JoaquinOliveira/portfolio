import React, { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/logo.png'
function Header({ currentLanguage, onLanguageChange, isDark, onThemeToggle }) {
  const intl = useIntl();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
      let current = '';

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'header.about' },
    { id: 'skills', label: 'header.skills' },
    { id: 'projects', label: 'header.projects' },
    { id: 'contact', label: 'header.contact' },
  ];

  return (
    <header className="bg-blue-500 dark:bg-gray-800 text-white fixed top-0 left-0 right-0 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-8 w-auto mr-2" />
          <h1 className="text-2xl font-bold">JO</h1>
        </div>
        <nav className="flex-grow flex justify-center">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`hover:text-blue-100 dark:hover:text-blue-300 pb-2 ${
                    activeSection === item.id
                      ? 'border-b-2 border-white dark:border-blue-300'
                      : ''
                  }`}
                >
                  {intl.formatMessage({ id: item.label })}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <LanguageSelector currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />
          <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
        </div>
      </div>
    </header>
  );
}

export default Header;