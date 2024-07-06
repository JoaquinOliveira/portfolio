import React from 'react';
import { useIntl } from 'react-intl';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  const intl = useIntl();

  return (
    <footer className="bg-blue-500 dark:bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">
              {intl.formatMessage({ id: 'footer.socialMedia' })}
            </h3>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/joaquin-santiago-oliveira" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/JoaquinOliveira" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
                <FaGithub size={24} />
              </a>
              
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              {intl.formatMessage({ id: 'footer.downloadCV' })}
            </h3>
            <a 
              href="/path-to-your-cv.pdf" 
              download 
              className="bg-white text-blue-500 dark:bg-gray-700 dark:text-blue-300 py-2 px-4 rounded hover:bg-blue-100 dark:hover:bg-gray-600 transition duration-300"
            >
              {intl.formatMessage({ id: 'footer.downloadButton' })}
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>© {new Date().getFullYear()} Joaquín Oliveira. {intl.formatMessage({ id: 'footer.rightsReserved' })}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;