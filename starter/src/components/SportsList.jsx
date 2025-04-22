import PropTypes from 'prop-types';
import SportsListItem from './SportsListItem';
import { useEffect, useState } from 'react';
import { getSportsList } from '../utils/data';

function SportsListWrapper({ children }) {
  return <div className='mt-8'>{children}</div>;
}

export default function SportsList({ query }) {
  const [sports, setSports] = useState(null);

  useEffect(() => {
    setSports(getSportsList());
  }, [query]);

  if (!Array.isArray(sports)) {
    return (
      <SportsListWrapper>
        <section>
          <h2 className='text-2xl font-bold mb-4'>Hasil Pencarian</h2>
          <p>Waiting for searching...</p>
        </section>
      </SportsListWrapper>
    );
  }

  return (
    <SportsListWrapper>
      <section>
        <h2 className='text-2xl font-bold mb-4'>Hasil Pencarian</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6'>
          {sports.map((sport) => {
            return <SportsListItem key={sport.idTeam} {...sport} />;
          })}
        </div>
      </section>
    </SportsListWrapper>
  );
}

SportsList.propTypes = {
  query: PropTypes.string.isRequired,
};
