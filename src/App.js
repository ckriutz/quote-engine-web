import React, { useState, useEffect } from 'react';
import Quote from './Quote.js';
//import logo from './logo.svg';
import './App.css';
import NewQuoteForm from './NewQuoteForm.js';

function App() {
  const quoteAPIURL = "http://127.0.0.1:8080/quote";
  const [quote, setQuote] = useState();

  const newQuoteCallback = (newQuote) => { 
    setQuote(newQuote);
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