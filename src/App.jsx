import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { IntlManager } from './IntlManager';
import './App.css';


function App() {
  const [locale, setLocale] = useState('fr');

  return (
    <IntlManager locale={locale}>
      <div className="App">
        <h1>
          <FormattedMessage id="greeting" />
        </h1>
        <p>
          <FormattedMessage id="message" />
        </p>
        <button onClick={() => setLocale('en')}>English</button>
        <button onClick={() => setLocale('fr')}>French</button>
        <button onClick={() => setLocale('es')}>Spanish</button>
      </div>
    </IntlManager>
  );
}

export default App;