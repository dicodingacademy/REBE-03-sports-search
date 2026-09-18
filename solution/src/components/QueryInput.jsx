import PropTypes from 'prop-types';
import { useId, useState } from 'react';

export default function QueryInput({ onQueryChange }) {
  const [query, setQuery] = useState('');
  const inputId = useId();

  const onQueryChangeHandler = (event) => {
    event.preventDefault();
    onQueryChange(query);
  };

  return (
    <form className='flex gap-3' onSubmit={onQueryChangeHandler}>
      <label htmlFor={inputId} className='sr-only'>
        Nama tim olahraga
      </label>
      <input
        id={inputId}
        type='search'
        placeholder='Contoh: Arsenal, Lakers, Yankees...'
        className='flex-grow rounded-lg border border-border bg-surface-card px-4 py-2.5 text-ink placeholder:text-ink-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface'
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button
        type='submit'
        className='rounded-lg bg-accent px-5 py-2.5 font-semibold text-white transition-colors hover:bg-accent-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface'
      >
        Cari
      </button>
    </form>
  );
}

QueryInput.propTypes = {
  onQueryChange: PropTypes.func.isRequired,
};
