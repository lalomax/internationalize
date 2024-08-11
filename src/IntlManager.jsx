import { IntlProvider } from 'react-intl';
import messages_en from './i18n/en.json';
import messages_fr from './i18n/fr.json';
import messages_es from './i18n/es.json';

const messages = {
  en: messages_en,
  fr: messages_fr,
  es: messages_es
};

export function IntlManager({ children, locale }) {
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
}