import React from 'react';

//const Title = styled.h1`align-items: left;`;

function Quote(props) {
    if(!props.text) {
        // We olny really get here if we don't have a quote to work with.
        console.log("No Quotes. :(");
        return (<div></div>)
    }
    return(
        <div className="container QuoteBox">
            <div class="d-flex flex-row">
            <div class="p-2"><i class="fas fa-quote-left fa-4x"></i></div>
            <div class="p-2">
                <p className="mb-0 h4">{props.text}</p>
                <p class="text-muted">- {props.author}</p></div>
            </div>
        </div>
    );
}

export default Quote;