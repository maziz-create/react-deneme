import { IntlProvider, FormattedMessage } from 'react-intl'
import './App.css';
import { useState, useEffect } from 'react';

// intl ' ın amacı çoklu dil desteği sağlamaktır.

//farklı göstermek istediğimiz mesajlar
const messages = {
  "tr-TR": {
    title: "Merhaba, Dünya!",
    description: "3 yeni mesajınız var!",
  },
  "en-US": {
    title: "Hello, World!",
    description: "You have 3 new messages!",
  }
}

function App() {
  //tarayıcının dilini buluyor.
  // localStoragede yoksa tarayıcının ana dilini kullan.
  const defaultLocale = localStorage.getItem('locale') ? localStorage.getItem('locale') : navigator.language;

  console.log(defaultLocale);

  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  return (
    <div className="App">
      {/* Intl provider içerisinde formatted message'ın id kısmı ile gösterim yapılır. */}
      <IntlProvider
        messages={messages[`${locale}`]}
        locale={locale}
      >
        <FormattedMessage id="title" />

        <p>
          <FormattedMessage id="description" />
        </p>

        <br /><br />
        <button onClick={() => setLocale("tr-TR")} style={{ marginRight: 5 }}>TR</button>
        <button onClick={() => setLocale("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
