import React, { useContext } from 'react';
import Footer from './components/Footer';

import Header from './components/Header';
import PersonalQuote from './components/PersonalQuote';
import Quote from './components/Quote';
import Search from './components/Search';
import AppContext from './context/AppContext';

const App = () => {
  const { isChoice } = useContext(AppContext);

  return (
    <>
      <main className='main'>
        <section className='main-section'>
          <Header />

          {
            !isChoice
              ? (
                  <>
                    <Search />
                    <Quote />
                  </>
                )
              :
            <PersonalQuote />
          }

        </section>
      </main>
      <Footer />
    </>
  )
}

export default App;