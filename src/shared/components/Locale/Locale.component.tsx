import * as React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import localeEn from 'react-intl/locale-data/en';
import en from './messages/en.json';
import { flattenMessages } from './Locale.helpers';
import { DEFAULT_LOCALE } from './Locale.constants';

addLocaleData([...localeEn]);

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
    <React.Fragment>{children}</React.Fragment>
  </IntlProvider>
);

export default Locale;
