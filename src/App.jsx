import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import messages_en from '../lang/en.json';
import messages_es from '../lang/es.json';
import Footer from './components/Footer';

const messages = {
  'en': messages_en,
  'es': messages_es
};

function App() {
  const [language, setLanguage] = useState(localStorage.getItem('language') || navigator.language.split(/[-_]/)[0]);
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const handleThemeToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <IntlProvider messages={messages[language]} locale={language} defaultLocale="en">
      <div className="App bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header
          currentLanguage={language}
          onLanguageChange={handleLanguageChange}
          isDark={isDark}
          onThemeToggle={handleThemeToggle}
        />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </IntlProvider>
  );
}

export default App;