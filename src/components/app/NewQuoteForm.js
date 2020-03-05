import React, { useState } from 'react';
//import styled from 'styled-components';

function NewQuoteForm(props) {
    
    const [quote, setQuote] = useState({});

    const handleChange = (event) => {
        event.persist();
        setQuote(quote => ({...quote, [event.target.name]: event.target.value}));
    }

    const handleSubmit = (event) => {
        if(event) {
            event.preventDefault();
        }
        props.callback(quote);
    }

    return (
        <div className="container-fluid App-form">
            <h3>Add a new quote!</h3>
            <form>
                <div className="form-row">
                    <div className="col-5">
                        <input name="text" type="text" className="form-control" placeholder="Quote" onChange={handleChange} />
                    </div>
                    <div className="col-4">
                        <input name="author" type="text" className="form-control" placeholder="Author" onChange={handleChange} />
                    </div>
                    <div className="col-3">
                        <input class="btn btn-secondary" type="submit" value="Submit" onClick={handleSubmit} />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default NewQuoteForm;