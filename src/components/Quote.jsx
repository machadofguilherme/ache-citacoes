import React, { useEffect, useState } from 'react';
import { ClipLoader  } from 'react-spinners';

import '../styles/Quote.css';

const Quote = () => {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getQuote = async () => {
      const url = 'https://achecitacoes-api.vercel.app';
      
      const quote = await fetch(url);
      const json = await quote.json();
      setQuote(json);

      setTimeout(() => setIsLoading(false), 1500);
    }

    getQuote();
  }, []);

  return (
    <main>
    {
        isLoading
          ? (
            <>
              <ClipLoader color='#fff' />
              <p>Carregando...</p>
            </>
          ) : (
            <section className='quote'>
              <h3>{`"${quote?.quote}"`}</h3>
              <p>{quote?.author}</p>
            </section>
          )
    }
    </main>
  )
}

export default Quote;