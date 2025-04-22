import React from 'react';
import QueryInput from './components/QueryInput';
import SportsList from './components/SportsList';

export default function App() {
  const [query, setQuery] = React.useState('');

  const onQueryChange = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <div className='min-h-screen bg-gray-100 p-4'>
      <header className='container mx-auto'>
        <h1 className='text-3xl font-bold text-center my-4'>Sports Search</h1>
        <p className='text-center mb-4'>Search for your favorite sports team</p>

        <p className='text-center mb-4'>
          Powered by{' '}
          <a href='https://sports-api.dicoding.dev/' target='_blank' rel='noopener noreferrer'>
            Sports API
          </a>
        </p>
      </header>

      <main className='container mx-auto'>
        <section>
          <h2 className='text-2xl font-bold mb-4'>Search</h2>
          <p className='mb-4'>
            You can search for your favorite sports team by entering the name of the team in the
            input field below.
          </p>
          <QueryInput onQueryChange={(newQuery) => onQueryChange(newQuery)}></QueryInput>
        </section>
        <section>
          <SportsList query={query}></SportsList>
        </section>
      </main>
    </div>
  );
}
