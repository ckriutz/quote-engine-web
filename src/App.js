import React, { useState, useEffect } from 'react';
import Quote from './components/app/Quote.js';
import NewQuoteForm from './components/app/NewQuoteForm.js';
import './App.css';


function App() {
  const quoteAPIURL = "http://127.0.0.1:8080/quote";
  const [quote, setQuote] = useState();

  const newQuoteCallback = (newQuote) => { 
    setQuote(newQuote);

    // also, need to try to write to database.
    async function writeQuoteToAPI(data) {
      // Should probably do something depending on if this fails or something.
      await fetch(quoteAPIURL, {
        method: 'POST',
        body: JSON.stringify(data)
      });
    };
    writeQuoteToAPI(newQuote);
  };
  

  useEffect(() => {
    async function getQuoteFromAPI() {
      const response = await fetch(quoteAPIURL);
      const json = await response.json();
      setQuote(json);
    };
    getQuoteFromAPI();
  }, []);

  return (
    <div>
      <header className="App-header">
        <div className="App-header-base">
          <h2>Casey's Random Quote Generator!</h2>
          <p>There are not a lot quotes in the database, so don't get excited.</p>

          <DatabaseWarningBanner warn={quote == null} />
        </div>

        <Quote {...quote}></Quote>
      </header>
      <NewQuoteForm callback = {newQuoteCallback} />
    </div>
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