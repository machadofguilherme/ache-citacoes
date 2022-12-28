import React, { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const getQuote = async () => {
      const url = 'https://achecitacoes-api.vercel.app';
      
      const quote = await fetch(url);
      const json = await quote.json();
      setQuote(json);
      return json;
    }

    getQuote();
  }, []);


  useEffect(() => {
    const requestOperation = async () => {
      const url = 'https://achecitacoes-api.vercel.app/author';
      const data = { author: "Xupeta" };

      const request = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await request.json();
      console.log(json);
    }

    requestOperation();
  }, []);

  return (
    <span>
      <h3>{ quote.quote }</h3>
      <p>{ quote.author}</p>
    </span>
  )
}

export default App;
