import { IntlProvider, FormattedMessage } from 'react-intl'
import './App.css';
import { useState } from 'react';

// intl ' ın amacı çoklu dil desteği sağlamaktır.

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
  const [lang, setLang] = useState("tr-TR");
  return (
    <div className="App">
      <IntlProvider
        messages={messages[`${lang}`]}
      >
        <FormattedMessage id="title" />

        <p>
          <FormattedMessage id="description"/>
        </p>

        <br /><br />
        <button onClick={() => setLang("tr-TR")} style={{ marginRight: 5 }}>TR</button>
        <button onClick={() => setLang("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
