import React, { useContext, useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';

import AppContext from '../context/AppContext';
import '../styles/PersonalQuote.css';

const PersonalQuote = () => {
  const [quote, setQuote] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { setupChoice } = useContext(AppContext);
  
  useEffect(() => {
    setIsLoading(true);
    const getData = JSON.parse(localStorage.getItem('data'));

    const id = Math.floor(Math.random() * 5);
    const response = getData[id];
    setQuote(response);
    setIsLoading(false);
  }, []);

  const goBack = () => {
    localStorage.clear();
    setQuote({});
    setupChoice(false);
  }

  return (
    <main className='personal'>
      {
        isLoading
          ? (
            <>
              <ClipLoader color='#fff' />
              <p>Carregando...</p>
            </>
        ) : (
          <>
            <h3>{`"${quote?.quote}"`}</h3>
            <p>{quote?.author}</p>
          </>
        )
      }
      <button
        type="button"
        onClick={goBack}
      >Voltar</button>
    </main>
  )
}

export default PersonalQuote;