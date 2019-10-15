import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`align-items: left;`;

function Quote(props) {
    //const [quote, setQuote] = useState(props);
    return(
        <blockquote>
            <Title>The quote!</Title>
            <p className="mb-0">{props.quote}</p>
            <footer className="blockquote footer">{props.author}</footer>
        </blockquote>
    );
}

export default Quote;