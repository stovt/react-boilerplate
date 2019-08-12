import * as React from 'react';
import { IntlProvider } from 'react-intl';
import en from './messages/en.json';
import { flattenMessages } from './Locale.helpers';
import { DEFAULT_LOCALE } from './Locale.constants';

const locales: Record<string, {}> = { en };

const userLanguage =
  (navigator.languages && navigator.languages.length && navigator.languages[0].split('-')[0]) ||
  navigator.language ||
  navigator.userLanguage ||
  DEFAULT_LOCALE;

const locale = locales[userLanguage] ? userLanguage : DEFAULT_LOCALE;

const messages = flattenMessages(locales[locale]);

const Locale: React.FC = ({ children }) => (
  <IntlProvider locale={locale} messages={messages}>
    <>{children}</>
  </IntlProvider>
);

export default Locale;
