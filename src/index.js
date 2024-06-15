import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {IntlProvider} from 'react-intl';    
import localeEnMessages from './locales/en';

import "./components/ronald/i18n";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <IntlProvider locale="en-EN" messages= {localeEnMessages}>
        <App />
    </IntlProvider>
);