import React, { useState, useEffect } from 'react';
import Quote from './components/app/Quote.js';
import './App.css';


function App() {
  const quoteAPIURL = "https://rfsu7xxtig.execute-api.us-east-2.amazonaws.com/default/getQuote";
  const [quote, setQuote] = useState();

  useEffect(() => {
    async function getQuoteFromAPI() {
      const response = await fetch(quoteAPIURL);
      const json = await response.json();
      setQuote(json);
    };
    getQuoteFromAPI();
  }, []);

  return (
    <main>
      <div>
        <header className="App-header">
          <div className="App-header-base">
            <h2>Casey's Random Quote Generator!</h2>
            <p>There are not a lot of quotes in the database, so don't get excited.</p>

            <DatabaseWarningBanner warn={quote == null} />
          </div>

          <Quote {...quote}></Quote>
        </header>
      </div>
      <div className="footer">
        <p>© 2020 - Casey Kriutzfield</p>
        <p><a href="https://github.com/ckriutz/quote-engine-web">Github Project</a></p>
      </div>
  </main>
  );
}

function DatabaseWarningBanner(props) {
  if(!props.warn) {
    return null;
  }

  return (
    <div className="alert alert-warning" role="alert">
      The database seems to be down, so no quotes for you.
    </div>
  );
}

export default App;