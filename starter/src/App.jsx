import { useState } from 'react';
import QueryInput from './components/QueryInput';
import SportsList from './components/SportsList';

export default function App() {
  const [query, setQuery] = useState('');

  return (
    <div className='min-h-screen flex flex-col bg-surface text-ink'>
      <div className='flex-1'>
        <header className='border-b border-border'>
          <div className='container mx-auto px-6 py-16'>
            <p className='text-sm font-semibold uppercase tracking-wide text-accent-dark'>
              Sports Search
            </p>
            <h1 className='mt-3 max-w-2xl text-4xl font-extrabold tracking-tight text-ink sm:text-5xl'>
              Cari tim olahraga favoritmu
            </h1>
            <p className='mt-3 max-w-xl text-ink-muted'>
              Ketik nama tim untuk melihat profil dan lencana resminya.
            </p>

            <div className='mt-8 max-w-xl'>
              <QueryInput onQueryChange={setQuery} />
            </div>
          </div>
        </header>

        <main className='container mx-auto px-6 py-10'>
          <SportsList query={query} />
        </main>
      </div>

      <footer className='border-t border-border'>
        <div className='container mx-auto px-6 py-6 text-sm text-ink-muted'>
          Data disediakan oleh{' '}
          <a
            href='https://sports-api.dicoding.dev/'
            target='_blank'
            rel='noopener noreferrer'
            className='font-medium text-accent-dark underline underline-offset-2 hover:text-accent'
          >
            Sports API
          </a>
        </div>
      </footer>
    </div>
  );
}
