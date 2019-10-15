import React, { useState } from 'react';
import Quote from './Quote.js';
//import logo from './logo.svg';
import './App.css';
import NewQuoteForm from './NewQuoteForm.js';

const quoteCount = 5
var random_boolean = Math.random() >= 0.5;

function App() {
  const [quote, setQuote] = useState({text: 'Test Quote', author: 'Test Author'});

  const newQuoteCallback = (newQuote) => { 
    setQuote(newQuote);
  };

  return (
    <div>
      <header className="App-header">
        <div className="App-header-base">
          <h2>Casey's Random Quote Generator!</h2>
          <p>There are currently {quoteCount} quotes in the database.</p>
          <DatabaseWarningBanner warn={random_boolean} />
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