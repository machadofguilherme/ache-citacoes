import React, { useContext, useEffect, useState } from 'react';
import { RiSearch2Fill } from 'react-icons/ri';
import { BiErrorAlt } from 'react-icons/bi';

import AppContext from '../context/AppContext';

import '../styles/Search.css';
import requestOperation from '../utils/request';

const Search = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);

  const { setupChoice, saveData } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      if (error) {
        setError(false);
      };
    }, 1000);
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
    const isText = regex.test(query);
    const response = await requestOperation(query);

    if (isText && response.length !== 0) {
      saveData(response)
      setupChoice(true);
      setError(false);
    }

    setError(true);
    e.target.reset();
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder='Exemplo: Confúcio'
        onChange={({ target }) => setQuery(target.value)}
      />
      <RiSearch2Fill className='icon' onClick={ handleSubmit } />

      {
        error && (
          <h4 className='search-error'>
            <BiErrorAlt className='error-icon' />
            Um erro ocorreu.
          </h4>
        )
      }
    </form>
  )
}

export default Search;