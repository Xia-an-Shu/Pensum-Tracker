import React from 'react';
import { IntlProvider } from 'react-intl';
import English from '../locales/en.json';
import Spanish from '../locales/es.json';

const messages = {
  'en': English,
  'es': Spanish
};

const LanguageWrapper = ({ children }) => {
  const browserLanguage = navigator.language.split(/[-_]/)[0];  // e.g., 'en' or 'es'
  const message = messages[browserLanguage] || messages['en']; // Default to English if the language is not supported

  return (
    <IntlProvider locale={browserLanguage} messages={message}>
      {children}
    </IntlProvider>
  );
};

export default LanguageWrapper;
