import { PropTypes } from 'prop-types';
import { useState } from 'react';

export default function QueryInput({ onQueryChange }) {
  const [query, setQuery] = useState('');

  const onQueryChangeHandler = (event) => {
    event.preventDefault();
    onQueryChange(query);
  };

  return (
    <form className='flex gap-4' onSubmit={onQueryChangeHandler}>
      <input
        className='flex-grow border-2 border-gray-300 p-2 rounded-md'
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button className='text-white px-4 py-2 bg-blue-500 rounded-lg'>Cari</button>
    </form>
  );
}

QueryInput.propTypes = {
  onQueryChange: PropTypes.func.isRequired,
};
